export const WeightType = {
  FIVE: 5,
  TEN: 10,
  FIFTY: 15,
} as const;

export type WeightTypes = (typeof WeightType)[keyof typeof WeightType];
