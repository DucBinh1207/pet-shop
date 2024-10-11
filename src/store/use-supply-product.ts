import { SupplyType } from "@/types/supply";
import { create } from "zustand";

type SupplyStore = {
  product: SupplyType | null;
  setProduct: (product: SupplyType) => void;
};

const useSupplyProduct = create<SupplyStore>((set) => ({
  product: null,
  setProduct: (product: SupplyType) => set({ product: product }),
}));

export default useSupplyProduct;
