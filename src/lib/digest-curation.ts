// 수집한 기사를 나라별로 분류해 APAC / 미국 / 유럽 세 권역으로 묶는다.
//
// 대상 국가: 한국·일본·홍콩·싱가포르(APAC), 미국, 스위스·독일(유럽).
// 분류 순서
//  1) 제목에 대상 국가가 나오면 그 나라
//  2) 대상 국가는 없고 다른 나라(중국·영국·EU 등)만 나오면 제외
//  3) 아무 나라도 안 나오면 매체 소재국 (글로벌 매체면 제외)

import type { Country, FeedItem, Region } from "./news-sources";
import { COUNTRY_ORDER, COUNTRY_REGION, REGION_ORDER } from "./news-sources";

export type { Country, Region } from "./news-sources";

export interface ClassifiedItem extends FeedItem {
  country: Country;
  region: Region;
  /** 제목에서 나라가 잡혔는지. 아니면 매체 소재국으로 떨어진 것 */
  byContent: boolean;
}

const COUNTRY_KEYWORDS: Record<Country, string[]> = {
  kr: [
    "korea", "korean", "seoul", "upbit", "bithumb", "kospi", "kosdaq",
    "한국", "국내", "서울", "금융위", "금감원", "한은", "한국은행", "원화",
    "업비트", "빗썸", "코스피", "코스닥", "韓国", "韓國",
  ],
  jp: [
    "japan", "japanese", "tokyo", "jvcea", "boj", "bank of japan", "mufg",
    "smbc", "mizuho", "nomura", "sbi", "rakuten", "jpyc",
    "일본", "도쿄", "日本", "東京", "金融庁", "日銀",
  ],
  hk: [
    "hong kong", "hongkong", "hkma", "hkex", "sfc",
    "홍콩", "香港",
  ],
  sg: [
    "singapore", "singaporean", "mas", "monetary authority of singapore",
    "dbs", "ocbc", "uob",
    "싱가포르", "シンガポール", "新加坡",
  ],
  us: [
    "united states", "u.s.", "america", "american", "sec", "cftc", "occ",
    "finra", "treasury", "white house", "congress", "senate",
    "irs", "doj", "fbi", "fed", "federal reserve", "nasdaq", "nyse",
    "wall street", "trump", "california", "texas", "new york", "washington",
    "brooklyn", "manhattan", "florida", "wyoming",
    "미국", "연준", "뉴욕", "월가", "트럼프", "美", "米国", "米証券",
  ],
  ch: [
    "switzerland", "swiss", "zurich", "zürich", "zug", "geneva", "basel",
    "finma", "snb", "six digital", "sygnum", "amina", "ubs", "crypto valley",
    "schweiz", "schweizer", "스위스", "スイス",
  ],
  de: [
    "germany", "german", "deutschland", "deutsche", "deutscher", "bafin",
    "bundesbank", "frankfurt", "berlin", "munich", "münchen", "sparkasse",
    "sparkassen", "dz bank", "börse stuttgart", "boerse stuttgart",
    "독일", "ドイツ",
  ],
};

/** 대상이 아닌 나라·권역. 이것만 나오는 기사는 뺀다. */
const OTHER_PLACES = [
  "china", "chinese", "beijing", "shanghai", "shenzhen", "taiwan",
  "india", "indian", "pakistan", "thailand", "vietnam", "indonesia",
  "philippines", "philippine", "coins.ph", "malaysia", "australia",
  "australian", "uk", "u.k.", "united kingdom", "britain", "british",
  "england", "london", "fca", "france", "french", "paris", "italy",
  "spain", "netherlands", "poland", "lithuania", "ireland", "sweden",
  "norway", "russia", "russian", "ukraine", "turkey", "uae", "dubai",
  "abu dhabi", "israel", "brazil", "argentina", "mexico", "canada",
  "nigeria", "kenya", "south africa", "eu", "european union", "europe",
  "european", "mica", "esma", "ecb",
  "중국", "대만", "인도", "영국", "프랑스", "러시아", "우크라이나", "호주",
  "베트남", "필리핀", "두바이", "유럽", "중동", "브라질",
  "中国", "英国", "欧州",
];

/** 영문 키워드는 단어 경계로, 그 밖의 문자는 부분 문자열로 매칭한다. */
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

/**
 * 크립토와 무관한 기사를 걸러낸다.
 * 일반 경제·AI 매체의 기사도 섞여 들어오므로, 제목에 크립토 용어가 있어야 통과한다.
 */
const CRYPTO_TERMS = [
  "crypto", "bitcoin", "btc", "ether", "eth", "stablecoin", "stablecoins",
  "blockchain", "token", "tokens", "tokenization", "tokenized", "defi", "nft",
  "wallet", "exchange", "coinbase", "binance", "kraken", "coin",
  "xrp", "solana", "polygon", "lido", "ripple", "altcoin", "web3", "cbdc",
  "etf", "mining", "miner", "staking", "custody", "digital asset",
  "가상자산", "암호화폐", "비트코인", "이더리움", "스테이블코인", "블록체인",
  "토큰", "디지털자산", "코인", "지갑", "거래소", "디파이", "웹3",
  // 중앙은행 디지털화폐·예금토큰
  "digital euro", "digital pound", "digital dollar", "e-cny", "deposit token",
  "디지털 유로", "디지털유로", "디지털화폐", "디지털 화폐", "예금토큰", "중앙은행 디지털",
  // 독일어
  "krypto", "kryptowährung", "kryptowährungen", "ledger",
  // 일본어
  "暗号資産", "仮想通貨", "ビットコイン", "イーサリアム", "ステーブルコイン",
  "ブロックチェーン", "トークン", "デジタル資産",
];

export function isCryptoRelevant(item: FeedItem): boolean {
  const text = item.title.toLowerCase();
  return CRYPTO_TERMS.some((term) => hasKeyword(text, term));
}

/**
 * 금융·기관 관련도.
 * 뉴스레터는 '크립토가 제도권 금융과 만나는 지점'을 다룬다. 은행·증권·운용사·
 * 결제사·감독당국이 등장하거나 ETF·수탁·토큰화·스테이블코인 같은 제도권
 * 상품이 주제인 기사를 우선하고, 시세·밈코인 기사는 뒤로 민다.
 */
const INSTITUTIONAL_TERMS = [
  // 금융기관·기업
  "bank", "banks", "banking", "jpmorgan", "goldman", "citi", "citigroup",
  "hsbc", "standard chartered", "bny", "state street", "morgan stanley",
  "blackrock", "fidelity", "franklin templeton", "vanguard", "invesco",
  "asset manager", "asset management", "fund", "funds", "pension",
  "insurer", "brokerage", "broker", "securities", "nasdaq", "nyse", "cme",
  "visa", "mastercard", "paypal", "stripe", "payments", "payment",
  "remittance", "settlement", "fintech", "institutional", "institutions",
  "treasury", "treasuries", "money market",
  // 제도권 상품
  "etf", "etfs", "custody", "custodian", "tokenization", "tokenized",
  "tokenise", "rwa", "real-world asset", "stablecoin", "stablecoins",
  "cbdc", "deposit token", "bond", "bonds",
  // 감독·규제
  "regulator", "regulators", "regulation", "regulatory", "license",
  "licence", "licenses", "charter", "sec", "cftc", "occ", "mas", "fsa",
  "sfc", "hkma", "finma", "bafin", "boj", "central bank", "fed",
  "federal reserve", "bill", "law", "approval", "approves", "framework",
  "compliance",
  // 한국어
  "은행", "증권사", "증권", "자산운용", "운용사", "카드사", "보험사",
  "연기금", "국민연금", "금융위", "금감원", "금융당국", "한국은행", "한은",
  "토큰증권", "스테이블코인", "원화", "수탁", "결제", "송금", "법인",
  "기관", "제도권", "규제", "법안", "인가", "라이선스", "상장지수", "ETF",
  "중앙은행", "디지털화폐", "예금토큰", "디지털자산", "가상자산", "핀테크",
  // 일본어
  "銀行", "証券", "金融庁", "日銀", "ステーブルコイン", "規制",
  // 독일어
  "banken", "sparkasse", "regulierung", "börse", "verwahrung",
];

const NOISE_TERMS = [
  "price", "prices", "rally", "rallies", "surge", "surges", "soar",
  "plunge", "plunges", "dips", "dump", "pump", "prediction", "predicts",
  "forecast", "memecoin", "meme coin", "meme", "airdrop", "whale",
  "whales", "chart", "technical analysis", "bull run", "breakout",
  "시세", "급등", "급락", "폭락", "폭등", "전망", "밈코인", "에어드랍",
  "kurs", "prognose", "価格", "急騰", "急落",
];

export function institutionalScore(item: FeedItem): number {
  const text = item.title.toLowerCase();
  const positive = countMatches(text, INSTITUTIONAL_TERMS);
  const noise = countMatches(text, NOISE_TERMS);
  return positive * 2 - noise * 2;
}

/**
 * "US" 는 대문자일 때만 미국으로 본다.
 * 소문자로 바꾸면 대명사 "us" 와 구분할 수 없기 때문이다.
 */
function mentionsUS(title: string) {
  return /(^|[^A-Za-z])US([^A-Za-z]|$)/.test(title);
}

/** 대상 국가로 분류하거나, 대상이 아니면 null */
export function classify(item: FeedItem): ClassifiedItem | null {
  const text = item.title.toLowerCase();

  let best: Country | null = null;
  let bestScore = 0;
  for (const country of COUNTRY_ORDER) {
    let score = countMatches(text, COUNTRY_KEYWORDS[country]);
    if (country === "us" && mentionsUS(item.title)) score++;
    // 동점이면 매체 소재국을 우선한다.
    if (
      score > bestScore ||
      (score > 0 && score === bestScore && country === item.sourceCountry)
    ) {
      best = country;
      bestScore = score;
    }
  }

  if (best) {
    return { ...item, country: best, region: COUNTRY_REGION[best], byContent: true };
  }

  // 대상 국가 없이 다른 나라만 나오면 그 나라 기사로 보고 뺀다.
  if (countMatches(text, OTHER_PLACES) > 0) return null;

  if (item.sourceCountry) {
    return {
      ...item,
      country: item.sourceCountry,
      region: COUNTRY_REGION[item.sourceCountry],
      byContent: false,
    };
  }

  return null;
}

/** 제목이 비슷하면 같은 사건으로 보고 하나만 남긴다. */
function normalizeTitle(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9가-힣぀-ヿ一-鿿]/g, "")
    .slice(0, 40);
}

const MIN_PER_REGION = 3;

export type RegionDigest = Record<Region, ClassifiedItem[]>;

export interface Digest {
  regions: RegionDigest;
  total: number;
}

const byRecency = (a: ClassifiedItem, b: ClassifiedItem) =>
  new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();

/**
 * 한 권역에서 기사를 고른다.
 * 먼저 나라마다 가장 금융·기관다운 기사를 하나씩 넣어 한 나라가 권역을
 * 독차지하지 않게 하고, 남은 자리는 점수순으로 채운다.
 */
function pickForRegion(items: ClassifiedItem[], perRegion: number) {
  const scored = items
    .map((item) => ({ item, score: institutionalScore(item) }))
    .sort((a, b) => b.score - a.score || byRecency(a.item, b.item));

  const institutional = scored.filter((x) => x.score > 0);
  const picked: typeof scored = [];

  for (const country of COUNTRY_ORDER) {
    const first = institutional.find((x) => x.item.country === country);
    if (first && picked.length < perRegion) picked.push(first);
  }
  for (const x of institutional) {
    if (picked.length >= perRegion) break;
    if (!picked.includes(x)) picked.push(x);
  }

  // 권역이 비어 보이지 않도록, 시세성이 아닌 기사로 최소 건수만 채운다.
  if (picked.length < MIN_PER_REGION) {
    for (const x of scored) {
      if (picked.length >= MIN_PER_REGION) break;
      if (x.score === 0 && !picked.includes(x)) picked.push(x);
    }
  }

  // 메일에서는 나라 순서로 묶어 보여준다.
  return picked
    .sort(
      (a, b) =>
        COUNTRY_ORDER.indexOf(a.item.country) -
          COUNTRY_ORDER.indexOf(b.item.country) ||
        b.score - a.score ||
        byRecency(a.item, b.item)
    )
    .map((x) => x.item);
}

export function buildRegionDigest(
  items: FeedItem[],
  opts: { perRegion?: number; windowDays?: number } = {}
): Digest {
  const perRegion = opts.perRegion ?? 6;
  const windowDays = opts.windowDays ?? 7;
  const cutoff = Date.now() - windowDays * 86400000;

  // URL 과 제목 양쪽으로 중복 제거
  const seenUrl = new Set<string>();
  const seenTitle = new Set<string>();
  const unique = items.filter((item) => {
    const key = normalizeTitle(item.title);
    if (seenUrl.has(item.url) || seenTitle.has(key)) return false;
    seenUrl.add(item.url);
    seenTitle.add(key);
    return true;
  });

  const crypto = unique.filter(isCryptoRelevant);

  const recent = crypto.filter((item) => {
    const t = new Date(item.publishedAt).getTime();
    return Number.isFinite(t) && t >= cutoff;
  });

  // 최근 한 주 분량이 너무 적으면 기간 제한 없이 채운다.
  const pool = recent.length >= 12 ? recent : crypto;

  const byRegion = { apac: [], us: [], europe: [] } as RegionDigest;
  for (const item of pool) {
    const classified = classify(item);
    if (classified) byRegion[classified.region].push(classified);
  }

  const regions = { apac: [], us: [], europe: [] } as RegionDigest;
  let total = 0;
  for (const region of REGION_ORDER) {
    regions[region] = pickForRegion(byRegion[region], perRegion);
    total += regions[region].length;
  }

  return { regions, total };
}
