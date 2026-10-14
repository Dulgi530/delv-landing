import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { sendWeeklyDigest, type DigestRecipient } from "@/lib/newsletter-email";
import { buildRegionDigest, type Digest } from "@/lib/digest-curation";
import { translateItems } from "@/lib/digest-translate";
import { fetchAllSources, REGION_ORDER } from "@/lib/news-sources";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const PER_REGION = 6;
const WINDOW_DAYS = 7;

/** KST 기준 ISO 주차 키 (예: 2026-W37) */
function getPeriodKey(now: Date) {
  const kst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  const target = new Date(
    Date.UTC(kst.getUTCFullYear(), kst.getUTCMonth(), kst.getUTCDate())
  );
  // ISO 8601: 주는 목요일이 속한 해에 귀속된다.
  const dayNum = (target.getUTCDay() + 6) % 7;
  target.setUTCDate(target.getUTCDate() - dayNum + 3);
  const isoYear = target.getUTCFullYear();
  const firstThursday = new Date(Date.UTC(isoYear, 0, 4));
  const firstDayNum = (firstThursday.getUTCDay() + 6) % 7;
  firstThursday.setUTCDate(firstThursday.getUTCDate() - firstDayNum + 3);
  const week =
    1 +
    Math.round(
      (target.getTime() - firstThursday.getTime()) / (7 * 24 * 60 * 60 * 1000)
    );
  return `${isoYear}-W${String(week).padStart(2, "0")}`;
}

function formatPeriodLabel(now: Date) {
  const kst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  const start = new Date(kst.getTime() - (WINDOW_DAYS - 1) * 86400000);
  const fmt = (d: Date) => `${d.getUTCMonth() + 1}월 ${d.getUTCDate()}일`;
  return `${fmt(start)} – ${fmt(kst)}`;
}

async function buildWeeklyDigest() {
  const { items, diagnostics } = await fetchAllSources();
  const digest = buildRegionDigest(items, {
    perRegion: PER_REGION,
    windowDays: WINDOW_DAYS,
  });

  // 세 권역을 한 번에 번역해 API 호출을 한 번으로 줄인다.
  // 키가 없거나 실패하면 원문이 그대로 돌아온다.
  const flat = REGION_ORDER.flatMap((region) => digest.regions[region]);
  const translated = await translateItems(flat);

  let cursor = 0;
  const regions = { ...digest.regions };
  for (const region of REGION_ORDER) {
    const size = digest.regions[region].length;
    regions[region] = translated.slice(cursor, cursor + size);
    cursor += size;
  }

  return {
    digest: { regions, total: digest.total } as Digest,
    diagnostics,
    collected: items.length,
  };
}

export async function GET(request: NextRequest) {
  const cronSecret = process.env.CRON_SECRET;
  const authHeader = request.headers.get("authorization");

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const now = new Date();
  const periodKey = getPeriodKey(now);
  // ?dry=1 이면 발송하지 않고 어떤 내용이 나갈지만 돌려준다.
  const dryRun = request.nextUrl.searchParams.get("dry") === "1";

  try {
    const { digest, diagnostics, collected } = await buildWeeklyDigest();

    if (dryRun) {
      return NextResponse.json({
        dryRun: true,
        periodKey,
        collected,
        sources: diagnostics,
        preview: Object.fromEntries(
          REGION_ORDER.map((region) => [
            region,
            digest.regions[region].map((i) => `${i.title} (${i.source})`),
          ])
        ),
      });
    }

    if (digest.total === 0) {
      return NextResponse.json({
        skipped: "no_news",
        periodKey,
        sources: diagnostics,
      });
    }

    const supabase = getSupabaseAdmin();

    const { data: subscribers, error: subError } = await supabase
      .from("newsletter_subscribers")
      .select("email, unsubscribe_token")
      .eq("status", "confirmed");

    if (subError) {
      console.error("Subscriber fetch failed:", subError);
      return NextResponse.json({ error: "구독자 조회 실패" }, { status: 500 });
    }

    if (!subscribers || subscribers.length === 0) {
      return NextResponse.json({ skipped: "no_subscribers", periodKey });
    }

    const subject = `[DELV] 이번 주 Web3 소식 (${formatPeriodLabel(now)})`;

    // 발송 전에 주차를 선점한다. period_key 가 UNIQUE 라 크론이 중복
    // 실행돼도 같은 주에 두 번 나가지 않는다.
    const { data: claim, error: claimError } = await supabase
      .from("newsletter_sends")
      .insert({ period_key: periodKey, subject, item_count: digest.total })
      .select("id")
      .single();

    if (claimError) {
      if (claimError.code === "23505") {
        return NextResponse.json({ skipped: "already_sent", periodKey });
      }
      console.error("Send claim failed:", claimError);
      return NextResponse.json({ error: "발송 기록 생성 실패" }, { status: 500 });
    }

    const recipients: DigestRecipient[] = subscribers.map((s) => ({
      email: s.email,
      unsubscribeToken: s.unsubscribe_token,
    }));

    const { sent, failed } = await sendWeeklyDigest(
      recipients,
      digest,
      subject,
      formatPeriodLabel(now)
    );

    await supabase
      .from("newsletter_sends")
      .update({ recipient_count: sent, failed_count: failed })
      .eq("id", claim.id);

    return NextResponse.json({
      periodKey,
      sent,
      failed,
      apac: digest.regions.apac.length,
      us: digest.regions.us.length,
      europe: digest.regions.europe.length,
    });
  } catch (error) {
    console.error(
      "Weekly digest failed:",
      JSON.stringify(error, Object.getOwnPropertyNames(error))
    );
    return NextResponse.json(
      { error: "다이제스트 발송에 실패했습니다.", periodKey },
      { status: 500 }
    );
  }
}
