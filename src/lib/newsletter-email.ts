import { Resend } from "resend";
import { getSiteUrl } from "./supabase-admin";

const FROM = "DELV <hello@delv.team>";

export interface DigestNewsItem {
  title: string;
  description: string;
  url: string;
  source: string;
  category: string;
  publishedAt: string;
}

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error("RESEND_API_KEY 환경변수가 없습니다.");
  }
  return new Resend(key);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function shell(bodyHtml: string, footerHtml: string) {
  return `
<div style="margin:0;padding:24px 12px;background-color:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
  <div style="max-width:600px;margin:0 auto;background-color:#ffffff;border-radius:12px;overflow:hidden;">
    <div style="background:linear-gradient(135deg,#1A202C 0%,#2D3748 100%);padding:28px 32px;">
      <div style="color:#ffffff;font-size:22px;font-weight:700;letter-spacing:1px;">DELV</div>
      <div style="color:#4FD1C7;font-size:13px;margin-top:4px;">Web3 Consulting &amp; Global Expansion</div>
    </div>
    <div style="padding:32px;">
      ${bodyHtml}
    </div>
    <div style="padding:20px 32px 28px;border-top:1px solid #e2e8f0;color:#94a3b8;font-size:12px;line-height:1.7;">
      ${footerHtml}
    </div>
  </div>
</div>`.trim();
}

/** 더블 옵트인 확인 메일 */
export async function sendConfirmationEmail(email: string, confirmToken: string) {
  const confirmUrl = `${getSiteUrl()}/api/newsletter/confirm?token=${confirmToken}`;

  const body = `
    <h1 style="margin:0 0 16px;font-size:22px;color:#0f172a;">뉴스레터 구독을 확인해 주세요</h1>
    <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#475569;">
      DELV 주간 Web3 뉴스레터를 신청하셨습니다.<br />
      아래 버튼을 눌러야 구독이 완료됩니다.
    </p>
    <a href="${confirmUrl}"
       style="display:inline-block;background-color:#4FD1C7;color:#ffffff;text-decoration:none;padding:14px 28px;border-radius:8px;font-size:15px;font-weight:600;">
      구독 확인하기
    </a>
    <p style="margin:24px 0 0;font-size:13px;line-height:1.7;color:#94a3b8;">
      버튼이 눌리지 않으면 아래 주소를 브라우저에 붙여넣어 주세요.<br />
      <span style="color:#64748b;word-break:break-all;">${confirmUrl}</span>
    </p>`;

  const footer = `
    본인이 신청하지 않았다면 이 메일을 무시하셔도 됩니다. 확인하지 않으면 구독은 시작되지 않습니다.<br />
    DELV · admin@delv.team`;

  const resend = getResend();
  const { data, error } = await resend.emails.send({
    from: FROM,
    to: [email],
    subject: "[DELV] 뉴스레터 구독을 확인해 주세요",
    html: shell(body, footer),
  });

  if (error) throw error;
  return data;
}

function renderNewsItem(item: DigestNewsItem) {
  const date = new Date(item.publishedAt).toLocaleDateString("ko-KR", {
    month: "long",
    day: "numeric",
  });

  return `
    <div style="padding:18px 0;border-bottom:1px solid #e2e8f0;">
      <div style="margin-bottom:6px;">
        <span style="display:inline-block;background-color:#ccfbf1;color:#0f766e;padding:3px 10px;border-radius:999px;font-size:11px;font-weight:600;">
          ${escapeHtml(item.category)}
        </span>
      </div>
      <a href="${encodeURI(item.url)}"
         style="color:#0f172a;text-decoration:none;font-size:16px;font-weight:600;line-height:1.5;">
        ${escapeHtml(item.title)}
      </a>
      <p style="margin:8px 0 8px;font-size:14px;line-height:1.7;color:#64748b;">
        ${escapeHtml(item.description)}
      </p>
      <div style="font-size:12px;color:#94a3b8;">
        ${escapeHtml(item.source)} · ${date}
      </div>
    </div>`;
}

export function buildDigestHtml(
  items: DigestNewsItem[],
  unsubscribeUrl: string,
  periodLabel: string
) {
  const body = `
    <div style="font-size:13px;color:#4FD1C7;font-weight:600;margin-bottom:8px;">${escapeHtml(periodLabel)}</div>
    <h1 style="margin:0 0 12px;font-size:22px;color:#0f172a;">이번 주 Web3 소식</h1>
    <p style="margin:0 0 8px;font-size:15px;line-height:1.7;color:#475569;">
      한 주간의 주요 블록체인·Web3 뉴스를 정리했습니다.
    </p>
    ${items.map(renderNewsItem).join("")}
    <div style="margin-top:28px;">
      <a href="${getSiteUrl()}/newsletter"
         style="display:inline-block;background-color:#1A202C;color:#ffffff;text-decoration:none;padding:12px 24px;border-radius:8px;font-size:14px;font-weight:600;">
        DELV 뉴스레터 더 보기
      </a>
    </div>`;

  const footer = `
    이 메일은 DELV 뉴스레터를 구독하신 분께 발송되었습니다.<br />
    <a href="${unsubscribeUrl}" style="color:#64748b;text-decoration:underline;">수신거부</a> · admin@delv.team`;

  return shell(body, footer);
}

export interface DigestRecipient {
  email: string;
  unsubscribeToken: string;
}

export interface DigestSendResult {
  sent: number;
  failed: number;
}

/**
 * 구독자 전원에게 다이제스트를 발송한다.
 * 수신거부 링크가 사람마다 달라 batch API 로 개별 메일을 묶어 보낸다.
 * Resend 제한: batch 당 최대 100건, 초당 2요청.
 */
export async function sendWeeklyDigest(
  recipients: DigestRecipient[],
  items: DigestNewsItem[],
  subject: string,
  periodLabel: string
): Promise<DigestSendResult> {
  const resend = getResend();
  const site = getSiteUrl();
  const BATCH_SIZE = 100;

  let sent = 0;
  let failed = 0;

  for (let i = 0; i < recipients.length; i += BATCH_SIZE) {
    const chunk = recipients.slice(i, i + BATCH_SIZE);

    const payload = chunk.map((r) => {
      const unsubscribeUrl = `${site}/api/newsletter/unsubscribe?token=${r.unsubscribeToken}`;
      return {
        from: FROM,
        to: [r.email],
        subject,
        html: buildDigestHtml(items, unsubscribeUrl, periodLabel),
        headers: {
          // 메일 클라이언트의 원클릭 수신거부 (RFC 8058)
          "List-Unsubscribe": `<${unsubscribeUrl}>`,
          "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
        },
      };
    });

    try {
      const { error } = await resend.batch.send(payload);
      if (error) {
        console.error("Digest batch failed:", JSON.stringify(error));
        failed += chunk.length;
      } else {
        sent += chunk.length;
      }
    } catch (e) {
      console.error("Digest batch threw:", e);
      failed += chunk.length;
    }

    // 초당 2요청 제한을 넘지 않도록 간격을 둔다.
    if (i + BATCH_SIZE < recipients.length) {
      await new Promise((resolve) => setTimeout(resolve, 600));
    }
  }

  return { sent, failed };
}
