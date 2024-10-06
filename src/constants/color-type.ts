export const ColorType = {
  LIGHT: "white",
  DARK: "black",
} as const;

export type ColorTypes = (typeof ColorType)[keyof typeof ColorType];
