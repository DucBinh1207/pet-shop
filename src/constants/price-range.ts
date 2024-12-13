export const PriceRange = {
  MIN: 0,
  MAX: 100000000,
} as const;

export type PriceType = (typeof PriceRange)[keyof typeof PriceRange];
