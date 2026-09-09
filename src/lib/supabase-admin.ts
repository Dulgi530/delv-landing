import { createClient } from "@supabase/supabase-js";

// 서버 전용. service role 키는 RLS 를 우회하므로 클라이언트 번들에
// 절대 들어가면 안 된다. 이 모듈은 route handler 에서만 import 할 것.
export function getSupabaseAdmin() {
  const url =
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    "https://vptomtcrgzknhkvmbuar.supabase.co";
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!serviceRoleKey) {
    throw new Error(
      "SUPABASE_SERVICE_ROLE_KEY 환경변수가 없습니다. Vercel 환경변수에 추가하세요."
    );
  }

  return createClient(url, serviceRoleKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

// 메일 본문의 확인/수신거부 링크를 만들 때 쓰는 절대 URL.
export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  // Vercel 배포에서는 VERCEL_URL 이 프로토콜 없이 들어온다.
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

  return "http://localhost:3001";
}
