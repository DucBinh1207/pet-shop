export const ColorType = {
  LIGHT: "Trắng",
  DARK: "Đen",
  RED: "Đỏ",
  YELLOW: "Vàng",
  ORANGE: "Cam",
  BLUE: "Lam",
  GREEN: "Lục",
  VIOLET: "Tím",
  PINK: "Hồng",
  OTHER: "Khác",
} as const;

export type ColorTypes = (typeof ColorType)[keyof typeof ColorType];

export const ColorMapping = {
  [ColorType.LIGHT]: "light",
  [ColorType.DARK]: "black",
  [ColorType.RED]: "red",
  [ColorType.YELLOW]: "yellow",
  [ColorType.ORANGE]: "orange",
  [ColorType.BLUE]: "blue",
  [ColorType.GREEN]: "green",
  [ColorType.VIOLET]: "violet",
  [ColorType.PINK]: "pink",
  [ColorType.OTHER]: "gray",
};
