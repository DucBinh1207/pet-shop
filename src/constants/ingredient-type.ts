export const IngredientType = {
  BEEF: "beef",
  CHICKEN: "chicken",
} as const;

export type IngredientTypes =
  (typeof IngredientType)[keyof typeof IngredientType];
