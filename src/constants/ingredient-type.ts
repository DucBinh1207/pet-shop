export const IngredientType = {
  BEEF: "Bò",
  CHICKEN: "Gà",
  PORK: "Heo",
  FISH: "Cá",
  OTHER: "Khác",
} as const;

export type IngredientTypes =
  (typeof IngredientType)[keyof typeof IngredientType];
