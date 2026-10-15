// 주간 다이제스트용 뉴스 소스.
//
// 모든 소스는 공개 RSS 라 API 키가 필요 없다.
// 다루는 나라는 아래 7개로 한정한다.
//   APAC : 한국 · 일본 · 홍콩 · 싱가포르
//   미국 : 미국
//   유럽 : 스위스 · 독일
// 매체마다 소재국(country)을 붙여 두고, 기사 제목에서 나라가 잡히지 않을 때
// 그 소재국으로 분류한다. 소재국이 null 인 글로벌 매체는 제목에 대상 국가가
// 나올 때만 쓴다 (digest-curation 참고).

export type Region = "apac" | "us" | "europe";
export type Country = "kr" | "jp" | "hk" | "sg" | "us" | "ch" | "de";

export const REGION_ORDER: Region[] = ["apac", "us", "europe"];

export const REGION_LABELS: Record<Region, { ko: string; en: string }> = {
  apac: { ko: "APAC · 한국 · 일본 · 홍콩 · 싱가포르", en: "APAC" },
  us: { ko: "미국", en: "United States" },
  europe: { ko: "유럽 · 스위스 · 독일", en: "Europe" },
};

export const COUNTRY_REGION: Record<Country, Region> = {
  kr: "apac",
  jp: "apac",
  hk: "apac",
  sg: "apac",
  us: "us",
  ch: "europe",
  de: "europe",
};

export const COUNTRY_LABELS: Record<Country, string> = {
  kr: "한국",
  jp: "일본",
  hk: "홍콩",
  sg: "싱가포르",
  us: "미국",
  ch: "스위스",
  de: "독일",
};

/** 권역 안에서 나라를 보여줄 순서 */
export const COUNTRY_ORDER: Country[] = ["kr", "jp", "hk", "sg", "us", "ch", "de"];

export interface NewsSource {
  url: string;
  name: string;
  /** 매체 소재국. null 이면 글로벌 매체라 제목 기준으로만 분류한다. */
  country: Country | null;
  lang: "ko" | "ja" | "en" | "de";
  /** 운영 dry-run 에서 수집이 확인된 피드인지 (점검용 메모) */
  proven: boolean;
}

export const NEWS_SOURCES: NewsSource[] = [
  // ── 한국 ────────────────────────────────────────────────
  { url: "https://www.digitalasset.works/rss/allArticle.xml", name: "디지털애셋", country: "kr", lang: "ko", proven: false },
  { url: "https://www.blockmedia.co.kr/feed", name: "블록미디어", country: "kr", lang: "ko", proven: false },
  { url: "https://www.hankyung.com/feed/finance", name: "한국경제", country: "kr", lang: "ko", proven: false },
  { url: "https://kr.beincrypto.com/feed/", name: "BeInCrypto 한국", country: "kr", lang: "ko", proven: true },

  // ── 일본 ────────────────────────────────────────────────
  { url: "https://jp.cointelegraph.com/rss", name: "코인텔레그래프 JP", country: "jp", lang: "ja", proven: false },
  { url: "https://coinpost.jp/?feed=rss2", name: "CoinPost", country: "jp", lang: "ja", proven: false },

  // ── 홍콩 · 싱가포르 ─────────────────────────────────────
  { url: "https://forkast.news/feed/", name: "Forkast", country: "hk", lang: "en", proven: true },

  // ── 미국 ────────────────────────────────────────────────
  { url: "https://www.coindesk.com/arc/outboundfeeds/rss/", name: "CoinDesk", country: "us", lang: "en", proven: true },
  { url: "https://www.theblock.co/rss.xml", name: "The Block", country: "us", lang: "en", proven: true },
  { url: "https://decrypt.co/feed", name: "Decrypt", country: "us", lang: "en", proven: true },
  { url: "https://blockworks.co/feed", name: "Blockworks", country: "us", lang: "en", proven: true },
  { url: "https://bitcoinmagazine.com/.rss/full/", name: "Bitcoin Magazine", country: "us", lang: "en", proven: true },

  // ── 스위스 · 독일 ───────────────────────────────────────
  { url: "https://cvj.ch/feed/", name: "Crypto Valley Journal", country: "ch", lang: "de", proven: false },
  { url: "https://www.finews.ch/?format=feed&type=rss", name: "finews.ch", country: "ch", lang: "de", proven: false },
  { url: "https://www.btc-echo.de/feed/", name: "BTC-ECHO", country: "de", lang: "de", proven: true },

  // ── 글로벌 (제목에 대상 국가가 있을 때만 사용) ──────────
  { url: "https://cointelegraph.com/rss", name: "Cointelegraph", country: null, lang: "en", proven: true },
  { url: "https://cryptonews.com/news/feed/", name: "CryptoNews", country: null, lang: "en", proven: true },
  { url: "https://cryptoslate.com/feed/", name: "CryptoSlate", country: null, lang: "en", proven: true },
  { url: "https://www.cryptopolitan.com/feed/", name: "Cryptopolitan", country: null, lang: "en", proven: true },
  { url: "https://coingape.com/feed/", name: "CoinGape", country: null, lang: "en", proven: true },
];

export interface FeedItem {
  title: string;
  url: string;
  source: string;
  /** 매체 소재국 (null 이면 글로벌 매체) */
  sourceCountry: Country | null;
  lang: string;
  publishedAt: string;
}

export interface SourceResult {
  name: string;
  country: Country | null;
  count: number;
  error: string | null;
}

/**
 * 제목 앞의 편집 머리표를 지운다. ([전문] [인터뷰] [영상] …)
 * [단독]은 기사 성격을 알려주므로 남긴다.
 */
const TITLE_TAG = /^\s*[\[［【<〈]\s*(전문|인터뷰|영상|포토|카드뉴스|기고|칼럼|사설|종합|속보|PICK|Interview|Video|Podcast|Opinion|Sponsored)\s*[\]］】>〉]\s*/i;

export function stripTitleTags(title: string) {
  let t = title;
  while (TITLE_TAG.test(t)) t = t.replace(TITLE_TAG, "");
  return t.trim();
}

const FETCH_TIMEOUT_MS = 12000;
const ITEMS_PER_FEED = 20;

async function fetchOne(source: NewsSource): Promise<FeedItem[]> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const res = await fetch(source.url, {
      signal: controller.signal,
      cache: "no-store",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept:
          "application/rss+xml, application/xml, text/xml, application/atom+xml, */*",
      },
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const xml = await res.text();
    const Parser = (await import("rss-parser")).default;
    const feed = await new Parser({ timeout: FETCH_TIMEOUT_MS }).parseString(xml);

    return (feed.items ?? []).slice(0, ITEMS_PER_FEED).flatMap((item) => {
      const title = stripTitleTags((item.title ?? "").replace(/\s+/g, " ").trim());
      const link = (item.link ?? "").trim();
      if (!title || !link) return [];
      return [
        {
          title,
          url: link,
          source: source.name,
          sourceCountry: source.country,
          lang: source.lang,
          publishedAt: item.isoDate ?? item.pubDate ?? new Date().toISOString(),
        },
      ];
    });
  } finally {
    clearTimeout(timer);
  }
}

/**
 * 모든 소스를 병렬로 가져온다. 일부 피드가 죽어도 나머지는 그대로 쓴다.
 * diagnostics 는 어떤 피드가 몇 건을 줬는지 확인하는 용도다.
 */
export async function fetchAllSources(): Promise<{
  items: FeedItem[];
  diagnostics: SourceResult[];
}> {
  const settled = await Promise.allSettled(NEWS_SOURCES.map(fetchOne));

  const items: FeedItem[] = [];
  const diagnostics: SourceResult[] = settled.map((result, i) => {
    const source = NEWS_SOURCES[i];
    if (result.status === "fulfilled") {
      items.push(...result.value);
      return { name: source.name, country: source.country, count: result.value.length, error: null };
    }
    const message =
      result.reason instanceof Error ? result.reason.message : String(result.reason);
    console.error(`피드 수집 실패 · ${source.name}: ${message}`);
    return { name: source.name, country: source.country, count: 0, error: message };
  });

  return { items, diagnostics };
}
