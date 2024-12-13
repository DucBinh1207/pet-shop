import { IngredientType, IngredientTypes } from "@/constants/ingredient-type";
import { FoodsCategoryType, FoodsCategoryTypes } from "./../constants/foods-category-type";
import { PriceRange, PriceType } from "@/constants/price-range";
import { SortType, SortTypes } from "@/constants/sort-type";
import { create } from "zustand";
import { WeightType, WeightTypes } from "@/constants/weight-type";

type FoodsOptionType = {
  category: FoodsCategoryTypes;
  price: [PriceType, PriceType];
  sort: SortTypes;
  paging: number;
  ingredient: IngredientTypes[];
  weight: WeightTypes;
};

type FoodsStore = {
  foodsOption: FoodsOptionType;
  clearFoodsOption: () => void;
  setFoodsOption: (foodsOptionData: FoodsOptionType) => void;
};

export const defaultFoodsOption: FoodsOptionType = {
  category: FoodsCategoryType.ALL,
  price: [PriceRange.MIN, PriceRange.MAX],
  sort: SortType.DEFAULT,
  paging: 1,
  ingredient: [IngredientType.BEEF, IngredientType.CHICKEN],
  weight: WeightType.FIVE,
};

const useFoodsOption = create<FoodsStore>((set) => ({
  foodsOption: defaultFoodsOption,
  clearFoodsOption: () => set({ foodsOption: defaultFoodsOption }),
  setFoodsOption: (foodsOptionData: FoodsOptionType) =>
    set({ foodsOption: foodsOptionData }),
}));

export default useFoodsOption;
