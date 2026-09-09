import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin, getSiteUrl } from "@/lib/supabase-admin";
import {
  sendWeeklyDigest,
  type DigestRecipient,
} from "@/lib/newsletter-email";
import {
  curateDigest,
  type CuratedDigest,
  type DigestNewsItem,
} from "@/lib/digest-curation";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const MAX_PER_SECTION = 6;
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
  const end = new Date(kst);
  const start = new Date(kst.getTime() - (WINDOW_DAYS - 1) * 86400000);
  const fmt = (d: Date) => `${d.getUTCMonth() + 1}월 ${d.getUTCDate()}일`;
  return `${fmt(start)} – ${fmt(end)}`;
}

async function fetchNews(lang: string): Promise<DigestNewsItem[]> {
  const res = await fetch(`${getSiteUrl()}/api/news?lang=${lang}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`뉴스 조회 실패(${lang}): HTTP ${res.status}`);
  const json = await res.json();
  return Array.isArray(json?.data) ? json.data : [];
}

/**
 * 해외 규제·기업 동향이 목적이므로 영문 소스를 주로 쓰고,
 * 한국어 소스는 보조로만 합쳐 후보 풀을 넓힌다.
 */
async function buildWeeklyDigest(): Promise<CuratedDigest> {
  const [en, ko] = await Promise.allSettled([fetchNews("en"), fetchNews("ko")]);

  const all: DigestNewsItem[] = [
    ...(en.status === "fulfilled" ? en.value : []),
    ...(ko.status === "fulfilled" ? ko.value : []),
  ];

  if (en.status === "rejected") console.error("영문 뉴스 조회 실패:", en.reason);
  if (ko.status === "rejected") console.error("한글 뉴스 조회 실패:", ko.reason);

  // URL 기준 중복 제거
  const seen = new Set<string>();
  const unique = all.filter((item) => {
    if (!item?.url || seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  });

  const cutoff = Date.now() - WINDOW_DAYS * 86400000;
  const recent = unique.filter((item) => {
    const t = new Date(item.publishedAt).getTime();
    return Number.isFinite(t) && t >= cutoff;
  });

  // 최근 7일치가 너무 적으면 기간 제한 없이 최신 항목까지 후보로 삼는다.
  const pool = recent.length >= 10 ? recent : unique;
  return curateDigest(pool, { regulation: MAX_PER_SECTION, corporate: MAX_PER_SECTION });
}

export async function GET(request: NextRequest) {
  const cronSecret = process.env.CRON_SECRET;
  const authHeader = request.headers.get("authorization");

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const now = new Date();
  const periodKey = getPeriodKey(now);

  try {
    const supabase = getSupabaseAdmin();

    const digest = await buildWeeklyDigest();
    if (digest.total === 0) {
      return NextResponse.json({
        skipped: "no_matching_news",
        periodKey,
      });
    }

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
      .insert({
        period_key: periodKey,
        subject,
        item_count: digest.total,
      })
      .select("id")
      .single();

    if (claimError) {
      // UNIQUE 위반이면 이미 이번 주 발송이 끝난 것이다.
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
      regulation: digest.regulation.length,
      corporate: digest.corporate.length,
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
