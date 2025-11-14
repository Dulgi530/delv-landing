import { Resend } from "resend";

const resend = new Resend(
  process.env.RESEND_API_KEY || "re_M8cpGKNd_49vHquy2cStkwEPZxQubaN6o"
);

export interface ContactData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message?: string;
  privacy_agreed: boolean;
}

export async function sendContactEmail(contactData: ContactData) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Delv <hello@delv.team>",
      to: ["admin@delv.team"],
      subject: `새로운 문의: ${contactData.name} (${contactData.company})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0ea5e9; border-bottom: 2px solid #0ea5e9; padding-bottom: 10px;">
            새로운 문의가 접수되었습니다
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">문의자 정보</h3>
            <p><strong>이름:</strong> ${contactData.name}</p>
            <p><strong>회사:</strong> ${contactData.company}</p>
            <p><strong>이메일:</strong> ${contactData.email}</p>
            <p><strong>전화번호:</strong> ${contactData.phone}</p>
            <p><strong>개인정보 동의:</strong> ${
              contactData.privacy_agreed ? "동의" : "비동의"
            }</p>
          </div>
          
          ${
            contactData.message
              ? `
            <div style="background-color: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #334155; margin-top: 0;">문의 내용</h3>
              <p style="white-space: pre-wrap;">${contactData.message}</p>
            </div>
          `
              : ""
          }
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
            <p>이 문의는 DELV 랜딩페이지를 통해 접수되었습니다.</p>
            <p>문의 시간: ${new Date().toLocaleString("ko-KR")}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      throw new Error("이메일 발송에 실패했습니다.");
    }

    console.log("Email sent successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Email sending error:", error);
    throw error;
  }
}
