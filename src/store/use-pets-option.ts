import { CategoryType, CategoryTypes } from "@/constants/category-type";
import { PriceRange, PriceType } from "@/constants/price-range";
import { SortType, SortTypes } from "@/constants/sort-type";
import { create } from "zustand";

type PetsOptionType = {
  category: CategoryTypes;
  price: [PriceType, PriceType];
  sort: SortTypes;
  paging: number;
};

type PetsStore = {
  petsOption: PetsOptionType;
  clearPetsOption: () => void;
  setPetsOption: (petsOptionData: PetsOptionType) => void;
};

export const defaultPetsOption: PetsOptionType = {
  category: CategoryType.ALL,
  price: [PriceRange.MIN, PriceRange.MAX],
  sort: SortType.DEFAULT,
  paging: 1,
};

const usePetsOption = create<PetsStore>((set) => ({
  petsOption: defaultPetsOption,
  clearPetsOption: () => set({ petsOption: defaultPetsOption }),
  setPetsOption: (petsOptionData: PetsOptionType) =>
    set({ petsOption: petsOptionData }),
}));

export default usePetsOption;
