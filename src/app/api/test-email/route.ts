import { NextResponse } from "next/server";
import { Resend } from "resend";

// 진단용 임시 엔드포인트. 원인 파악 후 삭제할 것.
export async function GET() {
  const key = process.env.RESEND_API_KEY;

  const diagnostics: Record<string, unknown> = {
    hasKey: Boolean(key),
    keyPrefix: key ? key.slice(0, 8) : null,
    keyLength: key ? key.length : 0,
  };

  if (!key) {
    return NextResponse.json(
      { ...diagnostics, error: "RESEND_API_KEY 환경변수가 없습니다." },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(key);
    const { data, error } = await resend.emails.send({
      from: "Delv <hello@delv.team>",
      to: ["admin@delv.team"],
      subject: "DELV 발송 테스트",
      html: "<p>이 메일이 도착했다면 Resend 설정이 정상입니다.</p>",
    });

    return NextResponse.json({
      ...diagnostics,
      sent: !error,
      data,
      error: error ? { name: error.name, message: error.message } : null,
    });
  } catch (e) {
    return NextResponse.json(
      {
        ...diagnostics,
        sent: false,
        thrown: e instanceof Error ? e.message : String(e),
      },
      { status: 500 }
    );
  }
}
