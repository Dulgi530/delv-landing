import { generateObject, type LanguageModel } from "ai";
import { z } from "zod";
import type { CuratedItem } from "./digest-curation";

// 번역은 부가 기능이다. 키가 없거나 호출이 실패하면 원문을 그대로 쓴다.
// 뉴스레터 발송 자체가 번역 때문에 막히면 안 된다.

const TranslationSchema = z.object({
  items: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
    })
  ),
});

/**
 * 설정된 키에 따라 모델을 고른다.
 * ANTHROPIC_API_KEY 를 우선하고, 없으면 OPENAI_API_KEY 를 쓴다.
 */
async function resolveModel(): Promise<LanguageModel | null> {
  if (process.env.ANTHROPIC_API_KEY) {
    const { anthropic } = await import("@ai-sdk/anthropic");
    return anthropic("claude-haiku-4-5-20251001");
  }
  if (process.env.OPENAI_API_KEY) {
    const { openai } = await import("@ai-sdk/openai");
    return openai("gpt-4o-mini");
  }
  return null;
}

/** 한글이 이미 절반 이상이면 번역할 필요가 없다. */
function isMostlyKorean(text: string) {
  const hangul = (text.match(/[가-힣]/g) ?? []).length;
  const letters = (text.match(/[가-힣a-zA-Z]/g) ?? []).length;
  return letters > 0 && hangul / letters > 0.5;
}

const SYSTEM_PROMPT = `너는 한국의 Web3 컨설팅 회사가 발행하는 뉴스레터의 번역가다.
영문 암호화폐/블록체인 뉴스의 제목과 요약을 한국어로 옮긴다.

규칙:
- 자연스러운 한국어 뉴스 문체로 옮긴다. 직역투를 피한다.
- 기관·기업·티커·법령 고유명사는 원문 표기를 유지하되, 널리 쓰이는 한글 표기가 있으면 그것을 쓴다 (예: Singapore -> 싱가포르, MAS -> MAS).
- 제목은 40자 내외로 간결하게 한다.
- 요약은 두 문장을 넘기지 않는다.
- 내용을 지어내지 않는다. 원문에 없는 사실을 추가하지 않는다.
- 이미 한국어인 항목은 그대로 돌려준다.
- 입력 순서와 개수를 반드시 그대로 유지한다.`;

/**
 * 선별된 항목의 제목/요약을 한국어로 옮긴다.
 * 실패하면 입력을 그대로 돌려준다 (발송은 계속되어야 하므로).
 */
export async function translateItems(
  items: CuratedItem[]
): Promise<CuratedItem[]> {
  if (items.length === 0) return items;

  let model: LanguageModel | null;
  try {
    model = await resolveModel();
  } catch (e) {
    console.error("번역 모델 로딩 실패:", e);
    return items;
  }

  if (!model) {
    console.warn(
      "ANTHROPIC_API_KEY / OPENAI_API_KEY 가 없어 번역을 건너뜁니다."
    );
    return items;
  }

  // 이미 한국어인 항목은 API 에 보내지 않는다.
  const targets = items
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => !isMostlyKorean(`${item.title} ${item.description}`));

  if (targets.length === 0) return items;

  try {
    const { object } = await generateObject({
      model,
      schema: TranslationSchema,
      system: SYSTEM_PROMPT,
      prompt: JSON.stringify({
        items: targets.map(({ item }) => ({
          title: item.title,
          description: item.description,
        })),
      }),
    });

    if (object.items.length !== targets.length) {
      console.error(
        `번역 결과 개수 불일치: ${object.items.length} !== ${targets.length}`
      );
      return items;
    }

    const translated = [...items];
    targets.forEach(({ index }, i) => {
      const t = object.items[i];
      translated[index] = {
        ...translated[index],
        title: t.title.trim() || translated[index].title,
        description: t.description.trim() || translated[index].description,
      };
    });

    return translated;
  } catch (error) {
    console.error(
      "번역 실패, 원문으로 발송합니다:",
      error instanceof Error ? error.message : error
    );
    return items;
  }
}
