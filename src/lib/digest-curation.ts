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
    "philippines", "malaysia", "australia", "austrac",
    "한국", "일본", "중국", "홍콩", "싱가포르", "인도", "호주", "아시아",
  ],
  us: [
    "united states", "u.s.", "sec", "cftc", "occ", "finra",
    "treasury", "white house", "congress", "senate", "irs",
    "federal reserve", "nasdaq", "nyse", "wall street",
    "california", "texas", "new york", "washington",
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
    "유럽", "독일", "프랑스", "영국", "스위스",
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

function countMatches(text: string, keywords: string[]) {
  let n = 0;
  for (const kw of keywords) if (hasKeyword(text, kw)) n++;
  return n;
}

function classify(item: FeedItem): ClassifiedItem {
  const text = item.title.toLowerCase();

  let best: Region | null = null;
  let bestScore = 0;
  for (const region of REGION_ORDER) {
    const score = countMatches(text, REGION_KEYWORDS[region]);
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

  const recent = unique.filter((item) => {
    const t = new Date(item.publishedAt).getTime();
    return Number.isFinite(t) && t >= cutoff;
  });

  // 최근 한 주 분량이 너무 적으면 기간 제한 없이 채운다.
  const pool = recent.length >= 12 ? recent : unique;

  const regions = { apac: [], us: [], europe: [] } as RegionDigest;
  for (const item of pool.map(classify)) {
    regions[item.region].push(item);
  }

  let total = 0;
  for (const region of REGION_ORDER) {
    regions[region].sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
    regions[region] = regions[region].slice(0, perRegion);
    total += regions[region].length;
  }

  return { regions, total };
}
