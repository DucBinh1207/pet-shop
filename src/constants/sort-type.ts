export const SortType = {
  DEFAULT: "default",
  RATING: "rating",
  LATEST: "latest",
  PRICE: "price",
  PRICE_DESC: "price-desc",
} as const;

export const sortName = {
  [SortType.DEFAULT]: " Sắp xếp mặc định",
  [SortType.LATEST]: "Sắp xếp theo mới nhất",
  [SortType.RATING]: "Sắp xếp thanh đánh giá",
  [SortType.PRICE]: "Xắp xếp theo giá: thấp đến cao",
  [SortType.PRICE_DESC]: "Xắp xếp theo giá: cao đến thấp",
};

export type SortTypes = (typeof SortType)[keyof typeof SortType];
