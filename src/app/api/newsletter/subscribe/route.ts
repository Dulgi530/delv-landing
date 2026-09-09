import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase-admin";
import { sendConfirmationEmail } from "@/lib/newsletter-email";

export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// 확인 메일 재발송 최소 간격 (남용 방지)
const RESEND_COOLDOWN_MS = 5 * 60 * 1000;

export async function POST(request: NextRequest) {
  let email: string;

  try {
    const body = await request.json();
    email = String(body?.email ?? "").trim().toLowerCase();
  } catch {
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  if (!email || !EMAIL_RE.test(email) || email.length > 254) {
    return NextResponse.json(
      { error: "올바른 이메일 주소를 입력해주세요." },
      { status: 400 }
    );
  }

  try {
    const supabase = getSupabaseAdmin();

    const { data: existing, error: lookupError } = await supabase
      .from("newsletter_subscribers")
      .select("id, status, confirm_token, confirm_sent_at")
      .eq("email", email)
      .maybeSingle();

    if (lookupError) {
      console.error("Subscriber lookup failed:", lookupError);
      return NextResponse.json(
        { error: "일시적인 오류가 발생했습니다. 잠시 후 다시 시도해주세요." },
        { status: 500 }
      );
    }

    if (existing?.status === "confirmed") {
      return NextResponse.json({
        ok: true,
        status: "already_subscribed",
        message: "이미 구독 중인 이메일입니다.",
      });
    }

    // 재발송 쿨다운 확인 — 같은 주소로 확인 메일을 반복 발송하지 않는다.
    if (existing?.confirm_sent_at) {
      const elapsed = Date.now() - new Date(existing.confirm_sent_at).getTime();
      if (elapsed < RESEND_COOLDOWN_MS) {
        return NextResponse.json({
          ok: true,
          status: "pending",
          message: "확인 메일을 이미 보냈습니다. 받은편지함을 확인해주세요.",
        });
      }
    }

    let confirmToken: string;

    if (existing) {
      // 수신거부했던 주소가 다시 신청한 경우도 여기서 pending 으로 되돌린다.
      const { data: updated, error: updateError } = await supabase
        .from("newsletter_subscribers")
        .update({
          status: "pending",
          confirm_sent_at: new Date().toISOString(),
          unsubscribed_at: null,
        })
        .eq("id", existing.id)
        .select("confirm_token")
        .single();

      if (updateError || !updated) {
        console.error("Subscriber update failed:", updateError);
        return NextResponse.json(
          { error: "일시적인 오류가 발생했습니다." },
          { status: 500 }
        );
      }
      confirmToken = updated.confirm_token;
    } else {
      const { data: inserted, error: insertError } = await supabase
        .from("newsletter_subscribers")
        .insert({ email, confirm_sent_at: new Date().toISOString() })
        .select("confirm_token")
        .single();

      if (insertError || !inserted) {
        console.error("Subscriber insert failed:", insertError);
        return NextResponse.json(
          { error: "일시적인 오류가 발생했습니다." },
          { status: 500 }
        );
      }
      confirmToken = inserted.confirm_token;
    }

    await sendConfirmationEmail(email, confirmToken);

    return NextResponse.json({
      ok: true,
      status: "pending",
      message: "확인 메일을 보냈습니다. 메일의 링크를 눌러 구독을 완료해주세요.",
    });
  } catch (error) {
    console.error(
      "Newsletter subscribe failed:",
      JSON.stringify(error, Object.getOwnPropertyNames(error))
    );
    return NextResponse.json(
      { error: "구독 신청에 실패했습니다. 잠시 후 다시 시도해주세요." },
      { status: 500 }
    );
  }
}
