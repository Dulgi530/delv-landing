export const SERVICE_CARD_KEYS = [
  "bm",
  "token",
  "ico",
  "rwa",
  "global",
  "tax",
] as const;

export type ServiceCardKey = (typeof SERVICE_CARD_KEYS)[number];

export const SERVICE_CARD_TAG_CLASSES: Record<ServiceCardKey, string> = {
  bm: "bg-cyan-100 text-cyan-800",
  token: "bg-violet-100 text-violet-800",
  ico: "bg-amber-100 text-amber-800",
  rwa: "bg-emerald-100 text-emerald-800",
  global: "bg-blue-100 text-blue-800",
  tax: "bg-rose-100 text-rose-800",
};
