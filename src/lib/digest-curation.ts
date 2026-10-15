// 수집한 기사를 APAC / 미국 / 유럽 세 권역으로 나눈다.
//
// 분류 기준은 두 단계다.
//  1) 제목에서 다루는 권역이 잡히면 그 권역 (독자가 기대하는 기준)
//  2) 잡히지 않으면 매체 소재 권역으로 보낸다
// Forkast(APAC 매체)가 쓴 美 SEC 기사는 '미국'으로 가는 게 읽는 쪽에 맞다.

import type { FeedItem, Region } from "./news-sources";
import { REGION_ORDER } from "./news-sources";

export type { Region } from "./news-sources";

export interface ClassifiedItem extends FeedItem {
  region: Region;
  /** 제목에서 권역이 잡혔는지. 아니면 매체 소재지로 떨어진 것 */
  byContent: boolean;
}

const REGION_KEYWORDS: Record<Region, string[]> = {
  apac: [
    "korea", "korean", "seoul", "fiu", "kospi",
    "japan", "japanese", "tokyo", "jvcea", "yen",
    "china", "chinese", "beijing", "shanghai", "yuan",
    "hong kong", "hongkong", "sfc", "hkma",
    "singapore", "mas",
    "india", "indian", "sebi",
    "thailand", "vietnam", "indonesia", "taiwan",
    "philippines", "philippine", "filipino", "coins.ph", "manila",
    "malaysia", "australia", "austrac", "dubai", "uae", "abu dhabi",
    "한국", "일본", "중국", "홍콩", "싱가포르", "인도", "호주", "아시아",
  ],
  us: [
    "united states", "u.s.", "sec", "cftc", "occ", "finra",
    "treasury", "white house", "congress", "senate", "irs",
    "federal reserve", "nasdaq", "nyse", "wall street",
    "california", "texas", "new york", "washington", "brooklyn",
    "manhattan", "florida", "wyoming", "american", "doj", "fbi",
    "미국", "연준", "뉴욕",
  ],
  europe: [
    "european union", "mica", "esma", "ecb", "eba",
    "germany", "german", "bafin", "frankfurt",
    "france", "french", "amf", "paris",
    "united kingdom", "britain", "british", "fca", "london",
    "switzerland", "swiss", "finma", "zurich",
    "netherlands", "dutch", "spain", "spanish", "italy", "italian",
    "poland", "lithuania", "ireland", "sweden", "norway",
    "russia", "russian", "ukraine", "ukrainian", "europe", "european",
    "유럽", "독일", "프랑스", "영국", "스위스", "러시아", "우크라이나",
  ],
};

/** 영문 키워드는 단어 경계로, 한글은 부분 문자열로 매칭한다. */
function hasKeyword(text: string, keyword: string) {
  if (/^[a-z0-9.\s-]+$/i.test(keyword)) {
    const escaped = keyword.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`(^|[^a-z0-9])${escaped}([^a-z0-9]|$)`, "i").test(text);
  }
  return text.includes(keyword);
}

/**
 * 크립토와 무관한 기사를 걸러낸다.
 * 일반 경제·AI 매체의 기사도 섞여 들어오므로, 제목에 크립토 용어가 있어야 통과한다.
 */
const CRYPTO_TERMS = [
  "crypto", "bitcoin", "btc", "ether", "eth", "stablecoin", "stablecoins",
  "blockchain", "token", "tokens", "tokenization", "tokenized", "defi", "nft",
  "wallet", "exchange", "coinbase", "binance", "kraken", "coins.ph", "coin",
  "xrp", "solana", "polygon", "lido", "ripple", "altcoin", "web3", "cbdc",
  "stablecoin", "etf", "mining", "miner", "staking", "custody", "digital asset",
  "가상자산", "암호화폐", "비트코인", "이더리움", "스테이블코인", "블록체인",
  "토큰", "디지털자산", "코인", "지갑", "거래소", "디파이", "웹3",
  // 중앙은행 디지털화폐·예금토큰
  "digital euro", "digital pound", "digital dollar", "e-cny", "deposit token",
  "디지털 유로", "디지털유로", "디지털화폐", "디지털 화폐", "예금토큰", "중앙은행 디지털",
  // 독일어 (BTC-ECHO)
  "krypto", "kryptowährung", "kryptowährungen", "ledger",
  // 일본어 (코인텔레그래프 JP)
  "暗号資産", "仮想通貨", "ビットコイン", "イーサリアム", "ステーブルコイン", "ブロックチェーン", "トークン",
];

export function isCryptoRelevant(item: FeedItem): boolean {
  const text = item.title.toLowerCase();
  return CRYPTO_TERMS.some((term) => hasKeyword(text, term));
}

function countMatches(text: string, keywords: string[]) {
  let n = 0;
  for (const kw of keywords) if (hasKeyword(text, kw)) n++;
  return n;
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
  "licence", "licenses", "charter", "sec", "cftc", "occ", "fca", "mas",
  "esma", "mica", "central bank", "fed", "federal reserve", "bill", "law",
  "ecb", "boe", "boj", "pboc", "bis", "fsa", "sfc", "hkma", "finma", "bafin",
  "approval", "approves", "framework", "compliance",
  // 한국어
  "은행", "증권사", "증권", "자산운용", "운용사", "카드사", "보험사",
  "연기금", "국민연금", "금융위", "금감원", "금융당국", "한국은행", "한은",
  "토큰증권", "스테이블코인", "원화", "수탁", "결제", "송금", "법인",
  "기관", "제도권", "규제", "법안", "인가", "라이선스", "상장지수", "ETF",
  "중앙은행", "디지털 유로", "디지털유로", "디지털화폐",
  "예금토큰", "디지털자산", "가상자산", "핀테크",
  // 일본어·독일어
  "銀行", "証券", "金融庁", "ステーブルコイン", "bank", "banken",
  "regulierung", "börse",
];

const NOISE_TERMS = [
  "price", "prices", "rally", "rallies", "surge", "surges", "soar",
  "plunge", "plunges", "dips", "dump", "pump", "prediction", "predicts",
  "forecast", "memecoin", "meme coin", "meme", "airdrop", "whale",
  "whales", "chart", "technical analysis", "bull run", "breakout",
  "시세", "급등", "급락", "폭락", "폭등", "전망", "밈코인", "에어드랍",
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

function classify(item: FeedItem): ClassifiedItem {
  const text = item.title.toLowerCase();

  let best: Region | null = null;
  let bestScore = 0;
  for (const region of REGION_ORDER) {
    let score = countMatches(text, REGION_KEYWORDS[region]);
    if (region === "us" && mentionsUS(item.title)) score++;
    // 동점이면 매체 소재 권역을 우선한다.
    if (score > bestScore || (score > 0 && score === bestScore && region === item.sourceRegion)) {
      best = region;
      bestScore = score;
    }
  }

  return best
    ? { ...item, region: best, byContent: true }
    : { ...item, region: item.sourceRegion, byContent: false };
}

/** 제목이 비슷하면 같은 사건으로 보고 하나만 남긴다. */
function normalizeTitle(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]/g, "")
    .slice(0, 40);
}

const MIN_PER_REGION = 3;

export type RegionDigest = Record<Region, ClassifiedItem[]>;

export interface Digest {
  regions: RegionDigest;
  total: number;
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

  const regions = { apac: [], us: [], europe: [] } as RegionDigest;
  for (const item of pool.map(classify)) {
    regions[item.region].push(item);
  }

  const byRecency = (a: ClassifiedItem, b: ClassifiedItem) =>
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();

  let total = 0;
  for (const region of REGION_ORDER) {
    const scored = regions[region].map((item) => ({
      item,
      score: institutionalScore(item),
    }));

    // 금융·기관 기사(점수 > 0)를 점수순, 같은 점수면 최신순으로 먼저 채운다.
    const institutional = scored
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score || byRecency(a.item, b.item))
      .map((x) => x.item);

    // 권역이 비어 보이지 않도록 MIN_PER_REGION 까지만, 시세성 기사가 아닌 것으로 채운다.
    const filler = scored
      .filter((x) => x.score === 0)
      .map((x) => x.item)
      .sort(byRecency);

    const picked = institutional.slice(0, perRegion);
    if (picked.length < MIN_PER_REGION) {
      picked.push(...filler.slice(0, MIN_PER_REGION - picked.length));
    }

    regions[region] = picked;
    total += picked.length;
  }

  return { regions, total };
}
