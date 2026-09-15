export const SERVICE_CARD_KEYS = [
  "sto",
  "collateral",
  "accounting",
  "rwa",
  "global",
] as const;

export type ServiceCardKey = (typeof SERVICE_CARD_KEYS)[number];

export const SERVICE_CARD_TAG_CLASSES: Record<ServiceCardKey, string> = {
  sto: "bg-violet-100 text-violet-800",
  collateral: "bg-amber-100 text-amber-800",
  accounting: "bg-rose-100 text-rose-800",
  rwa: "bg-emerald-100 text-emerald-800",
  global: "bg-blue-100 text-blue-800",
};

/**
 * 각 자문 영역의 상세 페이지 경로.
 * 홈 카드 · /services 목록 · 서비스 페이지 푸터가 모두 이 표를 쓴다.
 * (회계·재무는 기존 /services/tax 페이지를 그대로 쓴다)
 */
export const SERVICE_CARD_HREFS: Record<ServiceCardKey, string> = {
  sto: "/services/sto",
  collateral: "/services/collateral",
  accounting: "/services/tax",
  rwa: "/services/rwa",
  global: "/services/global",
};
