import { PetType } from "@/types/pet";
import { create } from "zustand";

type PetStore = {
  product: PetType | null;
  setProduct: (product: PetType) => void;
};

const usePetProduct = create<PetStore>((set) => ({
  product: null,
  setProduct: (product: PetType) => set({ product: product }),
}));

export default usePetProduct;
