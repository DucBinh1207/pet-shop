export const PaymentMethod = {
  COD: "Trả tiền khi nhận hàng",
  ONLINE: "Chuyển khoản online",
} as const;

export type PaymentType = (typeof PaymentMethod)[keyof typeof PaymentMethod];
