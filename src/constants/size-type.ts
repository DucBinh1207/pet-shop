export const SizeType = {
  SMALL: "small",
  MEDIUM: "medium",
  BIG: "big",
} as const;

export type SizeTypes = (typeof SizeType)[keyof typeof SizeType];
