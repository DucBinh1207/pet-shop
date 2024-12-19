export const SuppliesCategoryType = {
  ALL: "all",
  BEDDING: "Giường",
  HYGIENE: "Vệ sinh",
  CLOTHING: "clothing",
  TOY: "Đồ chơi",
  HEALTH: "Sức khỏe",
  OTHER: "other",
} as const;

export type SuppliesCategoryTypes =
  (typeof SuppliesCategoryType)[keyof typeof SuppliesCategoryType];
