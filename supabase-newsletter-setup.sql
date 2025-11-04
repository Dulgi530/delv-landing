-- Supabase에서 실행할 SQL 쿼리
-- Supabase Dashboard > SQL Editor에서 실행하세요

-- newsletters 테이블 생성
CREATE TABLE IF NOT EXISTS newsletters (
  id BIGSERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  author TEXT NOT NULL DEFAULT 'DELV Team',
  views INTEGER DEFAULT 0,
  category TEXT,
  thumbnail_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 인덱스 생성 (성능 향상)
CREATE INDEX IF NOT EXISTS idx_newsletters_created_at ON newsletters(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_newsletters_category ON newsletters(category);

-- RLS (Row Level Security) 활성화
ALTER TABLE newsletters ENABLE ROW LEVEL SECURITY;

-- 모든 사용자가 읽기 가능하도록 정책 설정
DROP POLICY IF EXISTS "Enable read access for all users" ON newsletters;
CREATE POLICY "Enable read access for all users" ON newsletters
  FOR SELECT USING (true);

-- 모든 사용자가 작성 가능하도록 정책 설정
DROP POLICY IF EXISTS "Enable insert for all users" ON newsletters;
CREATE POLICY "Enable insert for all users" ON newsletters
  FOR INSERT WITH CHECK (true);

-- 모든 사용자가 수정 가능하도록 정책 설정
DROP POLICY IF EXISTS "Enable update for all users" ON newsletters;
CREATE POLICY "Enable update for all users" ON newsletters
  FOR UPDATE USING (true);

-- 모든 사용자가 삭제 가능하도록 정책 설정
DROP POLICY IF EXISTS "Enable delete for all users" ON newsletters;
CREATE POLICY "Enable delete for all users" ON newsletters
  FOR DELETE USING (true);

-- updated_at 자동 업데이트를 위한 함수 (이미 있다면 건너뛰기)
CREATE OR REPLACE FUNCTION update_newsletters_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- updated_at 트리거 생성
DROP TRIGGER IF EXISTS update_newsletters_updated_at ON newsletters;
CREATE TRIGGER update_newsletters_updated_at
  BEFORE UPDATE ON newsletters
  FOR EACH ROW
  EXECUTE FUNCTION update_newsletters_updated_at();

-- 조회수 증가 함수 생성
CREATE OR REPLACE FUNCTION increment_views(newsletter_id BIGINT)
RETURNS void AS $$
BEGIN
  UPDATE newsletters
  SET views = views + 1
  WHERE id = newsletter_id;
END;
$$ LANGUAGE plpgsql;

-- 예시 데이터 삽입 (선택사항)
INSERT INTO newsletters (title, content, author, category, views, thumbnail_url) VALUES
(
  'Web3 산업의 최신 동향',
  '<h2>Web3 산업 개요</h2>
  <p>Web3 산업은 급속도로 성장하고 있으며, 블록체인 기술을 기반으로 한 다양한 서비스들이 등장하고 있습니다.</p>
  
  <h3>주요 동향</h3>
  <ul>
    <li>탈중앙화 금융(DeFi) 시장의 확대</li>
    <li>NFT 시장의 성숙화</li>
    <li>메타버스 플랫폼의 발전</li>
    <li>웹3 게임의 상용화</li>
  </ul>
  
  <p>이러한 변화 속에서 기업들은 새로운 비즈니스 모델을 탐색하고 있으며, 법적 규제와 기술적 도전에 직면하고 있습니다.</p>
  
  <h3>전망</h3>
  <p>앞으로 Web3 산업은 더욱 성장할 것으로 예상되며, 기업들은 이를 위한 준비가 필요합니다. DELV는 이러한 기업들을 지원하기 위한 포괄적인 컨설팅 서비스를 제공합니다.</p>',
  'DELV Team',
  '업계 동향',
  0,
  'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80'
),
(
  '글로벌 법무 확장 전략',
  '<h2>해외 진출을 위한 법무 전략</h2>
  <p>글로벌 시장으로의 진출은 다양한 법적 도전을 수반합니다. 이 기사에서는 효과적인 법무 전략에 대해 알아봅니다.</p>
  
  <h3>주요 고려사항</h3>
  <ul>
    <li>각 국가별 규제 환경 분석</li>
    <li>법인 설립 및 컴플라이언스</li>
    <li>지적재산권 보호</li>
    <li>계약 관리 및 분쟁 해결</li>
  </ul>
  
  <p>DELV의 법무 전문가는 각 국가의 특성을 고려한 맞춤형 법무 서비스를 제공합니다.</p>',
  'DELV Team',
  '법무',
  0,
  'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80'
),
(
  '기술 컨설팅의 중요성',
  '<h2>디지털 전환 시대의 기술 컨설팅</h2>
  <p>현대 비즈니스에서 기술은 핵심 경쟁력입니다. 효과적인 기술 컨설팅이 어떻게 비즈니스 성장을 이끌 수 있는지 알아봅니다.</p>
  
  <h3>기술 컨설팅의 가치</h3>
  <ul>
    <li>디지털 전환 로드맵 수립</li>
    <li>클라우드 마이그레이션 전략</li>
    <li>AI/ML 기술 통합</li>
    <li>DevOps 최적화</li>
  </ul>
  
  <p>DELV는 최신 기술 트렌드를 반영한 실용적인 기술 컨설팅을 제공합니다.</p>',
  'DELV Team',
  '기술',
  0,
  'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80'
)
ON CONFLICT DO NOTHING;

