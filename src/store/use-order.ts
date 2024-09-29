import { order } from "@/types/order";
import { create } from "zustand";

type OrderStore = {
  order: order | null;
  setOrder: (order: order) => void;
  clearOrder: () => void;
  resetOrder: () => void;
};

const defaultOrder: order = {
  id: "",
  product: "",
  quantity: "",
  name: "",
  telephone: 0,
  total: 0,
};

const useOrder = create<OrderStore>((set) => ({
  order: null,
  setOrder: (order) => set({ order }),
  clearOrder: () => set({ order: null }),
  resetOrder: () => set({ order: defaultOrder }),
}));

export default useOrder;
