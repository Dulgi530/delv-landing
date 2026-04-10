import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { sendContactEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    console.log("API route called");
    const body = await request.json();
    console.log("Request body:", body);
    const { name, company, email, phone, message, privacy } = body;

    // 필수 필드 검증
    if (!name || !company || !email || !phone || !privacy) {
      return NextResponse.json(
        { error: "필수 필드를 모두 입력해주세요." },
        { status: 400 }
      );
    }

    // 이메일 형식 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "올바른 이메일 형식을 입력해주세요." },
        { status: 400 }
      );
    }

    // Supabase에 데이터 저장
    console.log("Attempting to insert data to Supabase");
    const { data, error } = await supabase
      .from("contacts")
      .insert([
        {
          name,
          company,
          email,
          phone,
          message: message || "",
          privacy_agreed: privacy,
          created_at: new Date().toISOString(),
        },
      ])
      .select();

    console.log("Supabase response:", { data, error });

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "문의 전송에 실패했습니다. 다시 시도해주세요." },
        { status: 500 }
      );
    }

    // 이메일 발송
    let emailDebug: Record<string, unknown> = {};
    try {
      console.log("Sending email notification");
      const emailResult = await sendContactEmail({
        name,
        company,
        email,
        phone,
        message: message || "",
        privacy_agreed: privacy,
      });
      console.log("Email sent successfully:", emailResult);
      emailDebug = { status: "success", result: emailResult };
    } catch (emailError: unknown) {
      const err = emailError as { message?: string; name?: string; statusCode?: number; cause?: unknown };
      console.error("Email sending failed:", JSON.stringify(err, Object.getOwnPropertyNames(err)));
      emailDebug = {
        status: "failed",
        message: err?.message,
        name: err?.name,
        statusCode: err?.statusCode,
        cause: String(err?.cause),
      };
    }

    return NextResponse.json(
      {
        success: true,
        message: "문의가 성공적으로 전송되었습니다.",
        data,
        _emailDebug: emailDebug,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
