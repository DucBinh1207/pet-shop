export const CategoryType = {
  ALL: "all",
  DOG: "dogs",
  CAT: "cats",
} as const;

export type CategoryTypes = (typeof CategoryType)[keyof typeof CategoryType];
