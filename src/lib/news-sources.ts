// 주간 다이제스트용 뉴스 소스.
//
// 모든 소스는 공개 RSS 라 API 키가 필요 없다.
// region 은 '매체의 소재 권역'이고, 개별 기사는 본문에서 다루는 권역이
// 잡히면 그쪽으로 재분류된다 (digest-curation 참고).

export type Region = "apac" | "us" | "europe";

export const REGION_ORDER: Region[] = ["apac", "us", "europe"];

export const REGION_LABELS: Record<Region, { ko: string; en: string }> = {
  apac: { ko: "APAC 아시아", en: "APAC" },
  us: { ko: "미국", en: "United States" },
  europe: { ko: "유럽", en: "Europe" },
};

export interface NewsSource {
  url: string;
  name: string;
  region: Region;
  lang: "ko" | "ja" | "en" | "de";
  /** 기존 /api/news 에서 수집이 확인된 피드인지 (운영 중 점검용) */
  proven: boolean;
}

export const NEWS_SOURCES: NewsSource[] = [
  // ── APAC ────────────────────────────────────────────────
  // 국내 금융·디지털자산 매체 (금융기관·제도권 소식 비중이 높다)
  { url: "https://www.digitalasset.works/rss/allArticle.xml", name: "디지털애셋", region: "apac", lang: "ko", proven: false },
  { url: "https://www.blockmedia.co.kr/feed", name: "블록미디어", region: "apac", lang: "ko", proven: false },
  { url: "https://www.hankyung.com/feed/finance", name: "한국경제", region: "apac", lang: "ko", proven: false },
  { url: "https://kr.beincrypto.com/feed/", name: "BeInCrypto 한국", region: "apac", lang: "ko", proven: true },
  { url: "https://forkast.news/feed/", name: "Forkast", region: "apac", lang: "en", proven: false },

  { url: "https://jp.cointelegraph.com/rss", name: "코인텔레그래프 JP", region: "apac", lang: "ja", proven: false },
  { url: "https://coingape.com/feed/", name: "CoinGape", region: "apac", lang: "en", proven: false },

  // ── 미국 ────────────────────────────────────────────────
  { url: "https://www.coindesk.com/arc/outboundfeeds/rss/", name: "CoinDesk", region: "us", lang: "en", proven: true },
  { url: "https://www.theblock.co/rss.xml", name: "The Block", region: "us", lang: "en", proven: true },
  { url: "https://decrypt.co/feed", name: "Decrypt", region: "us", lang: "en", proven: true },
  { url: "https://cryptoslate.com/feed/", name: "CryptoSlate", region: "us", lang: "en", proven: true },
  { url: "https://blockworks.co/feed", name: "Blockworks", region: "us", lang: "en", proven: false },

  { url: "https://bitcoinmagazine.com/.rss/full/", name: "Bitcoin Magazine", region: "us", lang: "en", proven: false },

  // ── 유럽 ────────────────────────────────────────────────
  { url: "https://cointelegraph.com/rss", name: "Cointelegraph", region: "europe", lang: "en", proven: true },
  { url: "https://cryptonews.com/news/feed/", name: "CryptoNews", region: "europe", lang: "en", proven: true },
  { url: "https://www.cryptopolitan.com/feed/", name: "Cryptopolitan", region: "europe", lang: "en", proven: false },
  { url: "https://www.btc-echo.de/feed/", name: "BTC-ECHO", region: "europe", lang: "de", proven: false },
  { url: "https://coinjournal.net/feed/", name: "CoinJournal", region: "europe", lang: "en", proven: false },
];

export interface FeedItem {
  title: string;
  url: string;
  source: string;
  /** 매체 소재 권역 (기사 본문 기준 재분류 전) */
  sourceRegion: Region;
  lang: string;
  publishedAt: string;
}

export interface SourceResult {
  name: string;
  region: Region;
  count: number;
  error: string | null;
}

const FETCH_TIMEOUT_MS = 12000;
const ITEMS_PER_FEED = 15;

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
      const title = (item.title ?? "").trim();
      const link = (item.link ?? "").trim();
      if (!title || !link) return [];
      return [
        {
          title,
          url: link,
          source: source.name,
          sourceRegion: source.region,
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
      return { name: source.name, region: source.region, count: result.value.length, error: null };
    }
    const message =
      result.reason instanceof Error ? result.reason.message : String(result.reason);
    console.error(`피드 수집 실패 · ${source.name}: ${message}`);
    return { name: source.name, region: source.region, count: 0, error: message };
  });

  return { items, diagnostics };
}
