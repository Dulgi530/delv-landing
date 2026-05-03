import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { sendContactEmail } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, phone, message, privacy } = body;

    if (!name || !company || !email || !phone || !privacy) {
      return NextResponse.json(
        { error: "필수 필드를 모두 입력해주세요." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "올바른 이메일 형식을 입력해주세요." },
        { status: 400 }
      );
    }

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

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "문의 전송에 실패했습니다. 다시 시도해주세요." },
        { status: 500 }
      );
    }

    try {
      await sendContactEmail({
        name,
        company,
        email,
        phone,
        message: message || "",
        privacy_agreed: privacy,
      });
    } catch (emailError) {
      console.error("Email sending failed:", JSON.stringify(emailError, Object.getOwnPropertyNames(emailError)));
    }

    return NextResponse.json(
      { success: true, message: "문의가 성공적으로 전송되었습니다.", data },
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
