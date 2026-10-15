import { Resend } from "resend";
import { getSiteUrl } from "./supabase-admin";
import type { ClassifiedItem, Digest, Region } from "./digest-curation";
import { REGION_ORDER, REGION_LABELS } from "./news-sources";

const FROM = "DELV <hello@delv.team>";

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

const REGION_COLORS: Record<Region, { accent: string; chip: string }> = {
  apac: { accent: "#0f766e", chip: "#ccfbf1" },
  us: { accent: "#1d4ed8", chip: "#dbeafe" },
  europe: { accent: "#6d28d9", chip: "#ede9fe" },
};

function renderItem(item: ClassifiedItem, accent: string) {
  return `
    <tr>
      <td style="padding:7px 0;vertical-align:top;width:18px;color:${accent};font-size:11px;line-height:1.7;">▲</td>
      <td style="padding:7px 0;vertical-align:top;font-size:14px;line-height:1.7;">
        <a href="${encodeURI(item.url)}" style="color:#0f172a;text-decoration:none;">${escapeHtml(item.title)}</a>
        <span style="color:#94a3b8;"> (${escapeHtml(item.source)})</span>
      </td>
    </tr>`;
}

function renderRegion(region: Region, items: ClassifiedItem[]) {
  if (items.length === 0) return "";
  const { accent, chip } = REGION_COLORS[region];

  return `
    <div style="margin-top:26px;">
      <div style="display:inline-block;background-color:${chip};color:${accent};padding:4px 12px;border-radius:6px;font-size:13px;font-weight:700;margin-bottom:4px;">
        ${escapeHtml(REGION_LABELS[region].ko)}
      </div>
      <table cellpadding="0" cellspacing="0" border="0" style="width:100%;border-collapse:collapse;">
        ${items.map((item) => renderItem(item, accent)).join("")}
      </table>
    </div>`;
}

export function buildDigestHtml(
  digest: Digest,
  unsubscribeUrl: string,
  periodLabel: string
) {
  const body = `
    <div style="font-size:13px;color:#4FD1C7;font-weight:600;margin-bottom:8px;">${escapeHtml(periodLabel)}</div>
    <h1 style="margin:0 0 10px;font-size:21px;color:#0f172a;">이번 주 Web3 소식</h1>
    <p style="margin:0;font-size:14px;line-height:1.7;color:#64748b;">
      APAC · 미국 · 유럽 크립토 매체의 한 주간 주요 기사를 권역별로 정리했습니다.
    </p>
    ${REGION_ORDER.map((region) => renderRegion(region, digest.regions[region])).join("")}
    <div style="margin-top:30px;">
      <a href="${getSiteUrl()}/newsletter"
         style="display:inline-block;background-color:#1A202C;color:#ffffff;text-decoration:none;padding:12px 24px;border-radius:8px;font-size:14px;font-weight:600;">
        DELV 뉴스레터 더 보기
      </a>
    </div>`;

  const footer = `
    제목은 한국어로 옮긴 것이며, 링크를 누르면 원문으로 이동합니다.<br />
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
  digest: Digest,
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
        html: buildDigestHtml(digest, unsubscribeUrl, periodLabel),
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

// ─────────────────────────────────────────────────────────────
// 카카오톡 브리프
//
// 카카오는 단톡방·오픈채팅방에 메시지를 올리는 API 를 제공하지 않는다.
// 그래서 붙여넣기용 텍스트를 만들어 운영자에게 메일로 보내고,
// 운영자가 단톡방에 직접 붙여넣는다.
// ─────────────────────────────────────────────────────────────

const KAKAO_BRIEF_TO = "admin@delv.team";
// 카카오톡은 링크마다 미리보기를 길게 펼치므로 권역당 건수를 줄인다.
const KAKAO_PER_REGION = 4;

export function buildKakaoText(digest: Digest, periodLabel: string) {
  const lines = [`📌 DELV Weekly Brief | ${periodLabel}`];

  for (const region of REGION_ORDER) {
    const items = digest.regions[region].slice(0, KAKAO_PER_REGION);
    if (items.length === 0) continue;
    lines.push("", `□ ${REGION_LABELS[region].ko}`);
    for (const item of items) {
      lines.push(`▲ ${item.title} (${item.source})`, item.url);
    }
  }

  lines.push("", "구독하기 · https://www.delv.team");
  return lines.join("\n");
}

/** 붙여넣기용 브리프를 운영자 메일로 보낸다. */
export async function sendKakaoBriefToAdmin(text: string, periodLabel: string) {
  const body = `
    <h1 style="margin:0 0 8px;font-size:19px;color:#0f172a;">카카오톡 브리프</h1>
    <p style="margin:0 0 20px;font-size:14px;line-height:1.7;color:#64748b;">
      아래 상자 안의 내용을 길게 눌러 전체 복사한 뒤 단톡방에 붙여넣어 주세요.
    </p>
    <div style="background-color:#fef9c3;border:1px solid #fde68a;border-radius:10px;padding:18px;font-size:14px;line-height:1.75;color:#1f2937;white-space:pre-wrap;word-break:break-all;font-family:-apple-system,BlinkMacSystemFont,'Apple SD Gothic Neo','Malgun Gothic',sans-serif;">${escapeHtml(text)}</div>`;

  const footer = `구독자용 뉴스레터와 같은 내용을 권역당 ${KAKAO_PER_REGION}건으로 줄인 것입니다.`;

  const resend = getResend();
  const { error } = await resend.emails.send({
    from: FROM,
    to: [KAKAO_BRIEF_TO],
    subject: `[DELV] 카카오톡 브리프 (${periodLabel})`,
    html: shell(body, footer),
    // 메일 앱에서 텍스트 보기로 열면 그대로 복사할 수 있다.
    text,
  });

  if (error) throw error;
}
