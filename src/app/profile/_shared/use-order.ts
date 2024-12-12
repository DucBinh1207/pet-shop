import { OrderType } from "@/types/order-item";
import { create } from "zustand";

type OrderStore = {
  order: OrderType | null;
  setOrder: (order: OrderType) => void;
  clearOrder: () => void;
  resetOrder: () => void;
};

const defaultOrder: OrderType = {
  id: "",
  dateCreated: "",
  status: 0,
  subtotalPrice: "",
  shippingPrice: "",
  totalPrice: "",
  paymentMethod: "",
  note: "",
  name: "",
  telephoneNumber: "",
  email: "",
  province: "",
  district: "",
  ward: "",
  street: "",
  voucherCode: "",
  orderItems: [],
};

const useOrder = create<OrderStore>((set) => ({
  order: null,
  setOrder: (order) => set({ order }),
  clearOrder: () => set({ order: null }),
  resetOrder: () => set({ order: defaultOrder }),
}));

export default useOrder;
