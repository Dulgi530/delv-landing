import { generateObject, type LanguageModel } from "ai";
import { z } from "zod";
import type { ClassifiedItem } from "./digest-curation";
import { COUNTRY_LABELS } from "./news-sources";

// 번역은 부가 기능이다. 키가 없거나 호출이 실패하면 원문을 그대로 쓴다.
// 뉴스레터 발송 자체가 번역 때문에 막히면 안 된다.

const TranslationSchema = z.object({
  titles: z.array(z.string()),
});

interface ModelChoice {
  model: LanguageModel;
  name: string;
}

/**
 * 설정된 키에 따라 모델을 고른다.
 * ANTHROPIC_API_KEY 를 우선하고, 없으면 OPENAI_API_KEY 를 쓴다.
 * 주당 수십 건의 짧은 제목이라 비용보다 번역 품질을 우선해 상위 모델을 쓴다.
 */
async function resolveModel(): Promise<ModelChoice | null> {
  if (process.env.ANTHROPIC_API_KEY) {
    const { anthropic } = await import("@ai-sdk/anthropic");
    return { model: anthropic("claude-sonnet-5"), name: "anthropic/claude-sonnet-5" };
  }
  if (process.env.OPENAI_API_KEY) {
    const { openai } = await import("@ai-sdk/openai");
    return { model: openai("gpt-4o"), name: "openai/gpt-4o" };
  }
  return null;
}

/** 한글이 이미 절반 이상이면 번역할 필요가 없다. 일본어 가나·한자는 한글로 치지 않는다. */
function isMostlyKorean(text: string) {
  const hangul = (text.match(/[가-힣]/g) ?? []).length;
  const letters = (text.match(/[가-힣a-zA-Z぀-ヿ一-鿿]/g) ?? []).length;
  return letters > 0 && hangul / letters > 0.5;
}

const SYSTEM_PROMPT = `너는 한국 금융권 독자를 위한 Web3 뉴스레터의 전문 번역 편집자다.
해외 크립토·금융 기사의 '제목'을 한국 경제지(한국경제·이데일리·아시아경제) 헤드라인 문체로 옮긴다.
입력 제목은 영어·일본어·독일어일 수 있다.

[문체]
- 경제지 헤드라인처럼 간결하게 쓴다. 주어 뒤 쉼표, 문장 연결은 '…'을 쓴다.
  예) "OCC, 대형은행 가상자산 차별 지적…크립토 기업엔 인가 발급"
- 서술어는 명사형·현재형으로 끝낸다 (~발표, ~추진, ~승인, ~나선다). 마침표는 찍지 않는다.
- 35~45자 안팎. 핵심 주체·행위·대상만 남기고 수식어는 줄인다.
- 원문에 없는 사실·해석을 더하지 않는다. 숫자·날짜·금액은 정확히 옮긴다.
  금액은 한국식으로 쓴다 (예: $8.6M → 860만 달러, $1.2B → 12억 달러, €50M → 5000만 유로).
- 매체명 꼬리말("| CoinDesk", "- Decrypt" 등)은 지운다.

[국가 표기]
- 나라를 밝혀야 할 때 한자 약칭을 쓴다: 美(미국) 日(일본) 獨(독일) 中(중국) 英(영국).
  홍콩·싱가포르·스위스는 한글로 쓴다.

[기관·용어 표기 — 반드시 아래대로]
- SEC → 美 SEC / CFTC → 美 CFTC / OCC → 美 통화감독청(OCC) / Fed, Federal Reserve → 연준
- Treasury(미 재무부) → 美 재무부 / Congress → 美 의회 / Senate → 美 상원
- FSA(일본) → 日 금융청 / BOJ → 日銀 / JVCEA → 日 가상자산거래소협회
- MAS → 싱가포르 통화청(MAS) / SFC → 홍콩 증권선물위원회(SFC) / HKMA → 홍콩금융관리국(HKMA)
- FINMA → 스위스 금융시장감독청(FINMA) / SNB → 스위스 중앙은행 / BaFin → 獨 금융감독청(BaFin)
- stablecoin → 스테이블코인 / tokenization → 토큰화 / tokenized fund → 토큰화 펀드
- custody → 수탁 / staking → 스테이킹 / spot ETF → 현물 ETF / RWA → 실물자산(RWA)
- deposit token → 예금토큰 / charter, license → 인가 / broker-dealer → 증권사
- asset manager → 자산운용사 / exchange(가상자산) → 거래소 / crypto → 가상자산

[회사명]
- 국내에 굳어진 표기를 쓴다: BlackRock 블랙록, Fidelity 피델리티, JPMorgan JP모건,
  Goldman Sachs 골드만삭스, Citi 씨티, Visa 비자, Mastercard 마스터카드, PayPal 페이팔,
  Coinbase 코인베이스, Binance 바이낸스, Ripple 리플, Circle 서클, Tether 테더,
  Strategy 스트래티지, VanEck 반에크, Franklin Templeton 프랭클린템플턴, Nomura 노무라,
  MUFG 미쓰비시UFJ, SBI SBI, UBS UBS, Deutsche Bank 도이치방크, Sparkasse 슈파르카세.
- 그 밖의 회사·프로젝트·티커는 원문 철자를 그대로 둔다. 붙어 있는 단어를 임의로 합치거나 소문자로 바꾸지 않는다.

[출력]
- 입력과 같은 순서, 같은 개수의 한국어 제목 배열만 돌려준다.
- 이미 한국어인 제목은 문체만 다듬어 돌려준다.`;

export interface TranslationReport {
  model: string | null;
  attempted: number;
  translated: number;
  error: string | null;
}

async function requestTitles(
  model: LanguageModel,
  inputs: { title: string; lang: string; source: string; country: string }[]
): Promise<string[]> {
  const { object } = await generateObject({
    model,
    schema: TranslationSchema,
    system: SYSTEM_PROMPT,
    prompt:
      "다음 제목들을 번역해 titles 배열로 돌려줘. lang 은 원문 언어, country 는 기사가 다루는 나라다.\n" +
      JSON.stringify(inputs),
  });

  if (object.titles.length !== inputs.length) {
    throw new Error(
      `번역 결과 개수 불일치: ${object.titles.length} !== ${inputs.length}`
    );
  }
  return object.titles.map((t) => t.trim().replace(/[.。]$/, ""));
}

/**
 * 선별된 항목의 제목을 한국어로 옮긴다. 원문 링크는 손대지 않는다.
 * 한국어로 돌아오지 않은 제목은 한 번 더 요청하고, 그래도 안 되면 원문을 둔다.
 */
export async function translateItems(
  items: ClassifiedItem[]
): Promise<{ items: ClassifiedItem[]; report: TranslationReport }> {
  const report: TranslationReport = {
    model: null,
    attempted: 0,
    translated: 0,
    error: null,
  };
  if (items.length === 0) return { items, report };

  let choice: ModelChoice | null;
  try {
    choice = await resolveModel();
  } catch (e) {
    report.error = `모델 로딩 실패: ${e instanceof Error ? e.message : String(e)}`;
    console.error(report.error);
    return { items, report };
  }

  if (!choice) {
    report.error = "ANTHROPIC_API_KEY / OPENAI_API_KEY 가 없어 번역을 건너뜁니다.";
    console.warn(report.error);
    return { items, report };
  }
  report.model = choice.name;

  const result = [...items];
  // 한국어 제목도 문체 통일을 위해 함께 다듬는다.
  let pending = items.map((_, index) => index);
  report.attempted = pending.length;

  for (let attempt = 1; attempt <= 2 && pending.length > 0; attempt++) {
    try {
      const titles = await requestTitles(
        choice.model,
        pending.map((i) => ({
          title: items[i].title,
          lang: items[i].lang,
          source: items[i].source,
          country: COUNTRY_LABELS[items[i].country],
        }))
      );

      const stillPending: number[] = [];
      pending.forEach((index, k) => {
        const title = titles[k];
        if (title && isMostlyKorean(title)) {
          result[index] = { ...result[index], title };
        } else {
          stillPending.push(index);
        }
      });
      pending = stillPending;
    } catch (error) {
      report.error = error instanceof Error ? error.message : String(error);
      console.error(`번역 ${attempt}차 시도 실패:`, report.error);
    }
  }

  report.translated = report.attempted - pending.length;
  if (pending.length > 0) {
    console.warn(`번역되지 않은 제목 ${pending.length}건은 원문으로 발송합니다.`);
  } else {
    report.error = null;
  }

  return { items: result, report };
}
