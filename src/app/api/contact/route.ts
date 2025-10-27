import { NextRequest, NextResponse } from "next/server";
import { createConnection } from "@/lib/database";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
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

    // MySQL에 데이터 저장
    const connection = await createConnection();

    try {
      const insertQuery = `
        INSERT INTO contacts (name, company, email, phone, message, privacy_agreed)
        VALUES (?, ?, ?, ?, ?, ?)
      `;

      const [result] = await connection.execute(insertQuery, [
        name,
        company,
        email,
        phone,
        message || "",
        privacy,
      ]);

      return NextResponse.json(
        {
          success: true,
          message: "문의가 성공적으로 전송되었습니다.",
          data: result,
        },
        { status: 200 }
      );
    } catch (dbError) {
      console.error("Database error:", dbError);
      return NextResponse.json(
        { error: "문의 전송에 실패했습니다. 다시 시도해주세요." },
        { status: 500 }
      );
    } finally {
      await connection.end();
    }
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
