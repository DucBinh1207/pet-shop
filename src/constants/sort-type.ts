export const SortType = {
  DEFAULT: "default",
  RATING: "rating",
  LATEST: "latest",
  PRICE: "price",
  PRICE_DESC: "price-desc",
} as const;

export const sortName = {
  [SortType.DEFAULT]: " Default sorting",
  [SortType.LATEST]: "Sort by latest",
  [SortType.RATING]: "Sort by average rating",
  [SortType.PRICE]: "Sort by price: low to high",
  [SortType.PRICE_DESC]: "Sort by price: high to low",
};

export type SortTypes = (typeof SortType)[keyof typeof SortType];
