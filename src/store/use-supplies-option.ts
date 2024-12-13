import { ColorType, ColorTypes } from "@/constants/color-type";
import { PriceRange, PriceType } from "@/constants/price-range";
import { SizeType, SizeTypes } from "@/constants/size-type";
import { SortType, SortTypes } from "@/constants/sort-type";
import {
  SuppliesCategoryType,
  SuppliesCategoryTypes,
} from "@/constants/supplies-category-type";
import { create } from "zustand";

type SuppliesOptionType = {
  category: SuppliesCategoryTypes;
  price: [PriceType, PriceType];
  sort: SortTypes;
  paging: number;
  size: SizeTypes[];
  color: ColorTypes[];
};

type SuppliesStore = {
  suppliesOption: SuppliesOptionType;
  clearSuppliesOption: () => void;
  setSuppliesOption: (suppliesOptionData: SuppliesOptionType) => void;
};

export const defaultSuppliesOption: SuppliesOptionType = {
  category: SuppliesCategoryType.ALL,
  price: [PriceRange.MIN, PriceRange.MAX],
  sort: SortType.DEFAULT,
  paging: 1,
  size: [SizeType.SMALL, SizeType.MEDIUM, SizeType.BIG],
  color: [ColorType.LIGHT, ColorType.DARK],
};

const useSuppliesOption = create<SuppliesStore>((set) => ({
  suppliesOption: defaultSuppliesOption,
  clearSuppliesOption: () => set({ suppliesOption: defaultSuppliesOption }),
  setSuppliesOption: (suppliesOptionData: SuppliesOptionType) =>
    set({ suppliesOption: suppliesOptionData }),
}));

export default useSuppliesOption;
