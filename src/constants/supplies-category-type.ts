export const SuppliesCategoryType = {
  ALL: "all",
  BEDDING: "bedding",
  HYGIENE: "hygiene",
  CLOTHING: "clothing",
  TOY: "toy",
  HEALTH: "health",
  OTHER: "other",
} as const;

export type SuppliesCategoryTypes =
  (typeof SuppliesCategoryType)[keyof typeof SuppliesCategoryType];
