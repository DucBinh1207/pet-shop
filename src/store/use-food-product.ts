import { FoodType } from "@/types/food";
import { create } from "zustand";

type FoodStore = {
  product: FoodType | null;
  setProduct: (product: FoodType) => void;
};

const useFoodStore = create<FoodStore>((set) => ({
  product: null,
  setProduct: (product: FoodType) => set({ product: product }),
}));

export default useFoodStore;
