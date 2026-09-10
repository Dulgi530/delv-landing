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
