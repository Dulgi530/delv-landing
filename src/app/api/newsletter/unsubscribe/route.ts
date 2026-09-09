import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin, getSiteUrl } from "@/lib/supabase-admin";

export const dynamic = "force-dynamic";

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

async function unsubscribe(token: string) {
  if (!UUID_RE.test(token)) return "invalid" as const;

  const supabase = getSupabaseAdmin();

  const { data: subscriber, error } = await supabase
    .from("newsletter_subscribers")
    .select("id, status")
    .eq("unsubscribe_token", token)
    .maybeSingle();

  if (error) {
    console.error("Unsubscribe lookup failed:", error);
    return "error" as const;
  }
  if (!subscriber) return "invalid" as const;
  if (subscriber.status === "unsubscribed") return "already" as const;

  const { error: updateError } = await supabase
    .from("newsletter_subscribers")
    .update({
      status: "unsubscribed",
      unsubscribed_at: new Date().toISOString(),
    })
    .eq("id", subscriber.id);

  if (updateError) {
    console.error("Unsubscribe update failed:", updateError);
    return "error" as const;
  }

  return "ok" as const;
}

/** 메일 본문의 수신거부 링크 클릭 */
export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token") ?? "";
  const site = getSiteUrl();

  try {
    const status = await unsubscribe(token);
    return NextResponse.redirect(`${site}/newsletter/unsubscribed?status=${status}`);
  } catch (e) {
    console.error("Newsletter unsubscribe failed:", e);
    return NextResponse.redirect(`${site}/newsletter/unsubscribed?status=error`);
  }
}

/**
 * 메일 클라이언트의 원클릭 수신거부 (RFC 8058).
 * 리다이렉트가 아니라 200 을 그대로 돌려줘야 한다.
 */
export async function POST(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token") ?? "";

  try {
    const status = await unsubscribe(token);
    if (status === "error") {
      return NextResponse.json({ ok: false }, { status: 500 });
    }
    return NextResponse.json({ ok: true, status });
  } catch (e) {
    console.error("Newsletter one-click unsubscribe failed:", e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
