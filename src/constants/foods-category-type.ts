export const FoodsCategoryType = {
  ALL: "all",
  DRY: "Thức ăn khô",
  WET: "Thức ăn ướt",
  RAW: "Thức ăn tươi sống",
  FREEZE: "Thức ăn đông lạnh",
} as const;

export type FoodsCategoryTypes =
  (typeof FoodsCategoryType)[keyof typeof FoodsCategoryType];
