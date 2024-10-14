export const ProductType = {
  PETS: "pets",
  FOODS: "foods",
  SUPPLIES: "supplies",
} as const;

export type ProductTypes = (typeof ProductType)[keyof typeof ProductType];
