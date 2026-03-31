export const SERVICE_CARD_KEYS = [
  "bmPackage",
  "tokenMicroPayment",
  "icoListing",
  "rwaAdvisory",
  "subsidiaryGlobal",
  "taxDiagnosis",
] as const;

export type ServiceCardKey = (typeof SERVICE_CARD_KEYS)[number];

export const SERVICE_CARD_TAG_CLASSES: Record<ServiceCardKey, string> = {
  bmPackage: "bg-purple-100 text-purple-800",
  tokenMicroPayment: "bg-blue-100 text-blue-800",
  icoListing: "bg-emerald-100 text-emerald-800",
  rwaAdvisory: "bg-amber-100 text-amber-800",
  subsidiaryGlobal: "bg-indigo-100 text-indigo-800",
  taxDiagnosis: "bg-rose-100 text-rose-800",
};
