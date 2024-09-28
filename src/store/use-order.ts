import { create } from "zustand";

type OrderStore = {
  order: string;
  setOrder: () => void;
  clearOrder: () => void;
};

const useOrder = create<OrderStore>((set) => ({
  order: "",
  setOrder: () => set({ order: "1" }),
  clearOrder: () => set({ order: "" }),
}));

export default useOrder;
