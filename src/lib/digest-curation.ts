// 주간 다이제스트 큐레이션.
// 최신순으로 아무거나 담는 대신 두 주제로 좁힌다.
//  1) 주요국 크립토 규제 변화 (싱가포르/홍콩/일본/미국 등)
//  2) 해외 기업의 크립토 상품 출시·제휴 (국내 매체가 잘 다루지 않는 영역)

export interface DigestNewsItem {
  title: string;
  description: string;
  url: string;
  source: string;
  category: string;
  publishedAt: string;
}

export type DigestBucket = "regulation" | "corporate";

export interface CuratedItem extends DigestNewsItem {
  bucket: DigestBucket;
  label: string;
  score: number;
}

// 관할권. 앞쪽일수록 우선 표기된다.
const JURISDICTIONS: { name: string; keywords: string[] }[] = [
  { name: "싱가포르", keywords: ["singapore", "mas", "monetary authority of singapore", "싱가포르"] },
  { name: "홍콩", keywords: ["hong kong", "hongkong", "sfc", "hkma", "홍콩"] },
  { name: "일본", keywords: ["japan", "japanese", "jvcea", "japan fsa", "일본"] },
  { name: "미국", keywords: ["united states", "u.s.", "sec", "cftc", "occ", "finra", "treasury", "white house", "congress", "senate", "irs", "미국"] },
  { name: "EU", keywords: ["european union", "mica", "esma", "european commission", "유럽연합", "유럽"] },
  { name: "UAE", keywords: ["uae", "dubai", "abu dhabi", "vara", "adgm", "두바이"] },
  { name: "영국", keywords: ["united kingdom", "fca", "bank of england", "영국"] },
];

const REGULATION_TERMS = [
  "regulation", "regulations", "regulator", "regulators", "regulatory",
  "license", "licence", "licensing", "licensed", "framework", "bill",
  "law", "laws", "legislation", "legal", "ruling", "rules", "rulemaking",
  "approve", "approves", "approval", "guidance", "guidelines", "compliance",
  "sandbox", "ban", "bans", "banned", "enforcement", "lawsuit", "policy",
  "oversight", "custody rules", "stablecoin bill", "crackdown",
  "규제", "법안", "인가", "라이선스", "승인", "제재", "가이드라인",
];

const LAUNCH_TERMS = [
  "launch", "launches", "launched", "launching", "rollout", "roll out",
  "rolls out", "unveil", "unveils", "unveiled", "debut", "debuts",
  "introduce", "introduces", "introducing", "pilot", "pilots",
  "goes live", "adds support", "announces support", "expands into",
  "출시", "선보", "도입",
];

const PARTNERSHIP_TERMS = [
  "partnership", "partners with", "partnered", "collaboration",
  "collaborates", "collaborate", "teams up", "tie-up", "joint venture",
  "integrate", "integrates", "integration", "alliance", "works with",
  "협업", "파트너십", "제휴", "맞손",
];

// 기업/기관 신호. 익명 프로토콜 소식이 아니라 실제 기업 움직임만 남기기 위함.
const COMPANY_SIGNALS = [
  "bank", "banks", "banking", "asset manager", "asset management",
  "blackrock", "fidelity", "jpmorgan", "jp morgan", "goldman", "morgan stanley",
  "visa", "mastercard", "paypal", "stripe", "block inc", "square",
  "nasdaq", "nyse", "cme", "franklin templeton", "vaneck", "bitwise",
  "standard chartered", "dbs", "ocbc", "uob", "hsbc", "citi", "citigroup",
  "bny", "state street", "schwab", "fidelity international",
  "nomura", "mufg", "smbc", "mizuho", "sbi", "rakuten", "softbank", "sony",
  "monex", "gmo", "line", "kakao",
  "samsung", "lg", "google", "alphabet", "amazon", "microsoft", "apple",
  "meta", "shopify", "stripe", "telegram", "x corp",
  "western union", "revolut", "robinhood", "nubank", "grab", "sea limited",
  "ant group", "tencent", "alibaba", "jd.com",
  "telefonica", "vodafone", "deutsche bank", "ubs", "bbva", "santander",
  "siemens", "nike", "starbucks", "mercado libre", "mercadolibre",
  "fintech", "custodian", "brokerage", "insurer", "conglomerate",
  "retailer", "airline", "telecom", "payments giant", "payment giant",
];

/** 영문 키워드는 단어 경계로, 한글은 부분 문자열로 매칭한다. */
function hasKeyword(text: string, keyword: string) {
  if (/^[a-z0-9.\s-]+$/i.test(keyword)) {
    const escaped = keyword.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`(^|[^a-z0-9])${escaped}([^a-z0-9]|$)`, "i").test(text);
  }
  return text.includes(keyword);
}

function countMatches(text: string, keywords: string[]) {
  let n = 0;
  for (const kw of keywords) if (hasKeyword(text, kw)) n++;
  return n;
}

function matchedJurisdiction(text: string) {
  for (const j of JURISDICTIONS) {
    if (j.keywords.some((kw) => hasKeyword(text, kw))) return j.name;
  }
  return null;
}

/** 국내 매체가 이미 다룬 내용은 가치가 낮으므로 해외 소스에 가산점을 준다. */
function isOverseasSource(source: string) {
  return !/한국|KR|코인텔레그래프|토큰포스트/i.test(source);
}

function scoreItem(item: DigestNewsItem): CuratedItem | null {
  const text = `${item.title} ${item.description}`.toLowerCase();

  const jurisdiction = matchedJurisdiction(text);
  const regTerms = countMatches(text, REGULATION_TERMS);
  const launchTerms = countMatches(text, LAUNCH_TERMS);
  const partnerTerms = countMatches(text, PARTNERSHIP_TERMS);
  const companyTerms = countMatches(text, COMPANY_SIGNALS);
  const overseasBonus = isOverseasSource(item.source) ? 2 : 0;

  // 규제: 관할권과 규제 용어가 모두 있어야 한다.
  const regulationScore =
    jurisdiction && regTerms > 0
      ? 4 + Math.min(regTerms, 3) * 2 + overseasBonus
      : 0;

  // 기업: 출시/제휴 동사와 기업 신호가 모두 있어야 한다.
  const actionTerms = launchTerms + partnerTerms;
  const corporateScore =
    actionTerms > 0 && companyTerms > 0
      ? 4 + Math.min(actionTerms, 3) * 2 + Math.min(companyTerms, 2) * 2 + overseasBonus
      : 0;

  if (regulationScore === 0 && corporateScore === 0) return null;

  if (regulationScore >= corporateScore) {
    return {
      ...item,
      bucket: "regulation",
      label: `규제 · ${jurisdiction}`,
      score: regulationScore,
    };
  }

  return {
    ...item,
    bucket: "corporate",
    label: partnerTerms >= launchTerms ? "기업 · 협업" : "기업 · 상품출시",
    score: corporateScore,
  };
}

/** 기업 신호 없이 출시/제휴 동사만 있는 항목 (결과가 부족할 때의 보충용) */
function looseCorporate(item: DigestNewsItem): CuratedItem | null {
  const text = `${item.title} ${item.description}`.toLowerCase();
  const launchTerms = countMatches(text, LAUNCH_TERMS);
  const partnerTerms = countMatches(text, PARTNERSHIP_TERMS);
  const actionTerms = launchTerms + partnerTerms;
  if (actionTerms === 0) return null;

  return {
    ...item,
    bucket: "corporate",
    label: partnerTerms >= launchTerms ? "기업 · 협업" : "기업 · 상품출시",
    score: 1 + actionTerms + (isOverseasSource(item.source) ? 1 : 0),
  };
}

export interface CuratedDigest {
  regulation: CuratedItem[];
  corporate: CuratedItem[];
  total: number;
}

export function curateDigest(
  items: DigestNewsItem[],
  limits: { regulation: number; corporate: number } = {
    regulation: 6,
    corporate: 6,
  }
): CuratedDigest {
  const scored = items
    .map(scoreItem)
    .filter((x): x is CuratedItem => x !== null);

  const byScore = (a: CuratedItem, b: CuratedItem) =>
    b.score - a.score ||
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();

  const regulation = scored
    .filter((x) => x.bucket === "regulation")
    .sort(byScore)
    .slice(0, limits.regulation);

  let corporate = scored
    .filter((x) => x.bucket === "corporate")
    .sort(byScore)
    .slice(0, limits.corporate);

  // 엄격한 조건으로 2건 미만이면 기업 신호 요건을 풀어 보충한다.
  if (corporate.length < 2) {
    const taken = new Set([...regulation, ...corporate].map((x) => x.url));
    const extra = items
      .filter((i) => !taken.has(i.url))
      .map(looseCorporate)
      .filter((x): x is CuratedItem => x !== null)
      .sort(byScore)
      .slice(0, limits.corporate - corporate.length);
    corporate = [...corporate, ...extra];
  }

  return {
    regulation,
    corporate,
    total: regulation.length + corporate.length,
  };
}
