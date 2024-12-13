export const CategoryType = {
  ALL: "all",
  DOG: "chó",
  CAT: "mèo",
} as const;

export type CategoryTypes = (typeof CategoryType)[keyof typeof CategoryType];
