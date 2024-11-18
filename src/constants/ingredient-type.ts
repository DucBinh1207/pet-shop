export const IngredientType = {
  BEEF: "Bò",
  CHICKEN: "Gà",
} as const;

export type IngredientTypes =
  (typeof IngredientType)[keyof typeof IngredientType];
