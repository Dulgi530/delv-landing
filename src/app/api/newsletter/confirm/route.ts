import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin, getSiteUrl } from "@/lib/supabase-admin";

export const dynamic = "force-dynamic";

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token") ?? "";
  const site = getSiteUrl();

  if (!UUID_RE.test(token)) {
    return NextResponse.redirect(`${site}/newsletter/subscribed?status=invalid`);
  }

  try {
    const supabase = getSupabaseAdmin();

    const { data: subscriber, error } = await supabase
      .from("newsletter_subscribers")
      .select("id, status")
      .eq("confirm_token", token)
      .maybeSingle();

    if (error) {
      console.error("Confirm lookup failed:", error);
      return NextResponse.redirect(
        `${site}/newsletter/subscribed?status=error`
      );
    }

    if (!subscriber) {
      return NextResponse.redirect(
        `${site}/newsletter/subscribed?status=invalid`
      );
    }

    if (subscriber.status === "confirmed") {
      return NextResponse.redirect(
        `${site}/newsletter/subscribed?status=already`
      );
    }

    const { error: updateError } = await supabase
      .from("newsletter_subscribers")
      .update({ status: "confirmed", confirmed_at: new Date().toISOString() })
      .eq("id", subscriber.id);

    if (updateError) {
      console.error("Confirm update failed:", updateError);
      return NextResponse.redirect(
        `${site}/newsletter/subscribed?status=error`
      );
    }

    return NextResponse.redirect(`${site}/newsletter/subscribed?status=ok`);
  } catch (e) {
    console.error("Newsletter confirm failed:", e);
    return NextResponse.redirect(`${site}/newsletter/subscribed?status=error`);
  }
}
