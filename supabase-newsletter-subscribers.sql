-- 뉴스레터 구독자 / 발송 이력 스키마
-- Supabase Dashboard > SQL Editor 에서 실행하세요.

-- ---------------------------------------------------------------
-- 구독자
-- ---------------------------------------------------------------
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id BIGSERIAL PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  -- pending: 확인 메일 발송됨 / confirmed: 구독 확정 / unsubscribed: 수신거부
  status TEXT NOT NULL DEFAULT 'pending'
    CHECK (status IN ('pending', 'confirmed', 'unsubscribed')),
  confirm_token UUID NOT NULL DEFAULT gen_random_uuid(),
  unsubscribe_token UUID NOT NULL DEFAULT gen_random_uuid(),
  -- 확인 메일 재발송 남용 방지용
  confirm_sent_at TIMESTAMPTZ,
  confirmed_at TIMESTAMPTZ,
  unsubscribed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_subscribers_status ON newsletter_subscribers(status);
CREATE UNIQUE INDEX IF NOT EXISTS idx_subscribers_confirm_token
  ON newsletter_subscribers(confirm_token);
CREATE UNIQUE INDEX IF NOT EXISTS idx_subscribers_unsubscribe_token
  ON newsletter_subscribers(unsubscribe_token);

-- ---------------------------------------------------------------
-- 발송 이력 (중복 발송 방지 + 운영 기록)
-- ---------------------------------------------------------------
CREATE TABLE IF NOT EXISTS newsletter_sends (
  id BIGSERIAL PRIMARY KEY,
  -- 'YYYY-Www' 형식의 ISO 주차. 같은 주에 두 번 나가는 것을 막는다.
  period_key TEXT NOT NULL UNIQUE,
  subject TEXT NOT NULL,
  recipient_count INTEGER NOT NULL DEFAULT 0,
  failed_count INTEGER NOT NULL DEFAULT 0,
  item_count INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ---------------------------------------------------------------
-- RLS: 두 테이블 모두 공개 anon 키로는 접근 불가.
-- 모든 읽기/쓰기는 서버 라우트에서 service role 키로만 수행한다.
-- (service role 은 RLS 를 우회하므로 별도 정책이 필요 없다)
-- ---------------------------------------------------------------
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_sends ENABLE ROW LEVEL SECURITY;

-- 혹시 이전에 열어둔 정책이 있다면 제거
DROP POLICY IF EXISTS "Enable read access for all users" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Enable insert for all users" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Enable read access for all users" ON newsletter_sends;
DROP POLICY IF EXISTS "Enable insert for all users" ON newsletter_sends;
