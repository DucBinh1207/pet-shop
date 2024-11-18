"use client";

import { IngredientType, IngredientTypes } from "@/constants/ingredient-type";
import { PriceRange } from "@/constants/price-range";
import { WeightType, WeightTypes } from "@/constants/weight-type";
import { useEffect, useState } from "react";
import ReactSlider from "react-slider";
import CancelIcon from "@/components/common/icons/cancel-icon";
import { SortType, SortTypes } from "@/constants/sort-type";
import AngleIcon from "@/components/common/icons/angle-icon";
import cn from "@/utils/style/cn";
import FoodsCategory from "./foods-category";
import {
  FoodsCategoryType,
  FoodsCategoryTypes,
} from "@/constants/foods-category-type";
import IngredientCheckbox from "@/components/ingredient-checkbox";
import Pagination from "../../_components/pagination";
import Sort from "../../_components/sort";
import ListFoods from "./list-foods";

export default function FoodsContent() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [category, setCategory] = useState<FoodsCategoryTypes>(
    FoodsCategoryType.ALL,
  );
  const [price, setPrice] = useState([PriceRange.MIN, PriceRange.MAX]);
  const [priceParams, setPriceParams] = useState([
    PriceRange.MIN,
    PriceRange.MAX,
  ]);
  const [resultNum, setResultNum] = useState(0);

  const [ingredient, setIngredient] = useState<IngredientTypes[]>([
    IngredientType.BEEF,
    IngredientType.CHICKEN,
  ]);
  const [weight, setWeight] = useState<WeightTypes>(WeightType.FIVE);
  const [sort, setSort] = useState<SortTypes>(SortType.DEFAULT);
  const [paging, setPaging] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  function handleCategoryFilter(categoryCurrent: FoodsCategoryTypes) {
    setCategory(categoryCurrent);
  }

  function handleIngredientFilter(ingredientCurrent: IngredientTypes) {
    if (ingredient.includes(ingredientCurrent)) {
      setIngredient(ingredient.filter((i) => i !== ingredientCurrent));
    } else setIngredient([...ingredient, ingredientCurrent]);
  }

  function handleWeightFilter(event: React.ChangeEvent<HTMLSelectElement>) {
    const weightCurrent = Number(event.target.value) as WeightTypes;
    setWeight(weightCurrent);
  }

  function handleSortFilter(sortCurrent: SortTypes) {
    setSort(sortCurrent);
  }

  function handlePagingFilter(pagingCurrent: number) {
    setPaging(pagingCurrent);
  }

  function handlePrice() {
    setPriceParams(price);
  }

  useEffect(() => {
    const params = new URLSearchParams();

    params.append("category", category);

    ingredient.forEach((ingredientValue) => {
      params.append("ingredient", ingredientValue);
    });

    params.append("weight", weight.toString());

    params.append("sort", sort);

    params.append("page", paging.toString());
  }, [category, ingredient, weight, sort, paging]);

  return (
    <>
      <FoodsCategory
        category={category}
        handleCategoryFilter={handleCategoryFilter}
      />

      <div className="mx-auto flex flex-nowrap rounded-[4px] border border-solid border-light_gray_color_second bg-white large-screen:mb-[40px] large-screen:mt-[15px] large-screen:w-[1160px] small-screen:mb-[30px] small-screen:mt-[30px] smallest-screen:mb-[20px] smallest-screen:mt-[10px]">
        <div className="border-r border-solid border-light_gray_color_second large-screen:min-w-[232px] small-screen:relative small-screen:overflow-hidden">
          <div
            className={cn(
              "sticky top-[90px] flex flex-col pb-[30px] transition-all duration-150 ease-linear large-screen:left-0 small-screen:fixed small-screen:right-0 small-screen:top-0 small-screen:z-[200] small-screen:h-full small-screen:w-[360px] small-screen:max-w-full small-screen:bg-white small-screen:pb-[30px] small-screen:leading-[1.23]",
              {
                "small-screen:translate-x-0 small-screen:opacity-100":
                  isFilterOpen,
                "small-screen:w-0 small-screen:translate-x-full small-screen:opacity-0":
                  !isFilterOpen,
              },
            )}
          >
            <div className="relative flex items-center justify-end large-screen:hidden">
              <div className="flex h-[46px] w-[46px] items-center justify-center">
                <button onClick={() => setIsFilterOpen(false)}>
                  <CancelIcon size={32} className="fill-current text-primary" />
                </button>
              </div>
            </div>

            <div className="flex flex-col px-[25px] pt-[25px]">
              <h3 className="mb-[20px] font-quicksand text-[20px] font-bold leading-[1.1] tracking-[-0.01em] text-primary">
                Giá
              </h3>
              <form action="" className="flex flex-col">
                <span>
                  <ReactSlider
                    className="horizontal-slider"
                    ariaLabel={["Lower thumb", "Upper thumb"]}
                    renderThumb={(props, state) => (
                      <div
                        {...props}
                        key={state.index}
                        className="top-[-4px] h-[10px] w-[10px] rounded-[50%] !border-none bg-primary focus-visible:outline-none"
                      />
                    )}
                    thumbActiveClassName=""
                    renderTrack={(props, state) => {
                      if (state.index === 1) {
                        return (
                          <div
                            {...props}
                            key={state.index}
                            className="relative h-[2px] rounded-full bg-primary"
                          />
                        );
                      } else {
                        return (
                          <div
                            {...props}
                            key={state.index}
                            className="relative h-[2px] rounded-full bg-background_color"
                          />
                        );
                      }
                    }}
                    step={100000}
                    min={PriceRange.MIN}
                    max={PriceRange.MAX}
                    onChange={setPrice}
                    value={price}
                  />
                </span>

                <div className="mb-[3px] mt-[15px] text-[12px] leading-[18px] tracking-[0.025em] text-text_color">
                  <span>Giá:&nbsp;</span>
                  <span>{price[0]} </span>
                  <span>&nbsp;&nbsp;-&nbsp;</span>
                  <span>{price[1]} </span>
                </div>

                <button
                  type="button"
                  className="hover_animate mt-[10px] inline-block cursor-pointer rounded-[18px] border-[2px] border-solid border-primary bg-white px-[18px] py-[5px] text-center text-[12px] font-bold uppercase tracking-wider text-primary outline-none hover:bg-primary hover:text-white"
                  onClick={handlePrice}
                >
                  Lọc
                </button>
              </form>
            </div>

            <div className="px-[25px] pt-[40px]">
              <h3 className="mb-[20px] font-quicksand text-[20px] font-bold leading-[1.1] tracking-[-0.01em] text-primary">
                Nguyên liệu
              </h3>

              <ul className="flex flex-col gap-[5px] text-[14px] leading-[1.23] tracking-[0.02em] text-text_color">
                <IngredientCheckbox
                  ingredient={ingredient}
                  ingredientType={IngredientType.BEEF}
                  name="Thịt bò "
                  isAvailable={true}
                  handleIngredientFilter={handleIngredientFilter}
                />

                <IngredientCheckbox
                  ingredient={ingredient}
                  ingredientType={IngredientType.CHICKEN}
                  name="Thịt gà "
                  isAvailable={true}
                  handleIngredientFilter={handleIngredientFilter}
                />
              </ul>
            </div>

            <div className="px-[25px] pb-[120px] pt-[40px]">
              <h3 className="mb-[20px] font-quicksand text-[20px] font-bold leading-[1.1] tracking-[-0.01em] text-primary">
                Cân nặng
              </h3>

              <div className="text-[14px] leading-[1.23] tracking-[0.02em] text-text_color">
                <select
                  className="relative h-auto w-full rounded-[3px] border border-solid border-input_border_color bg-form_color py-[8px] pl-[9px] pr-[28px] text-[13px] font-medium leading-[16px] tracking-[0.01em] text-primary outline-none"
                  onChange={handleWeightFilter}
                >
                  <option value="">Lựa chọn cân nặng</option>
                  <option value={WeightType.FIVE}>
                    &lt; {WeightType.FIVE}kg
                  </option>
                  <option value={WeightType.TEN}>
                    &lt; {WeightType.TEN}kg
                  </option>
                  <option value={WeightType.FIFTY}>
                    &lt; {WeightType.FIFTY}kg
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col large-screen:min-w-[900px] small-screen:w-full">
          <div className="flex min-h-[55px] items-center border-b border-solid border-light_gray_color_second px-[30px] py-[13px] text-[13px] font-normal leading-[16px] tracking-[0.025em] text-text_color">
            <div className="flex w-full flex-1 small-screen:gap-[5px] up-smallest-screen:items-center up-smallest-screen:justify-between smallest-screen:flex-col">
              <div className="w-full flex-1">Có {resultNum} kết quả</div>
              <Sort sort={sort} handleSortFilter={handleSortFilter} />
            </div>
            <div className="ml-[15px] mr-[2px] large-screen:hidden large-screen:opacity-0">
              <button
                className="hover_animate inline-flex cursor-pointer items-center gap-[7px] rounded-[17px] border-[2px] border-solid border-primary bg-white px-[22px] py-[7px] text-center text-[11px] font-bold uppercase leading-[14px] tracking-[0.07em] text-primary outline-none hover:bg-primary hover:text-white"
                onClick={() => setIsFilterOpen(true)}
              >
                <AngleIcon size={8} className="rotate-[-90deg] fill-current" />
                Bộ lọc
              </button>
            </div>
          </div>

          <ListFoods
            category={category}
            paging={paging}
            sort={sort}
            price={priceParams}
            ingredient={ingredient}
            weight={weight}
            setTotalPages={setTotalPages}
            setResultNum={setResultNum}
          />

          <div className="mt-[30px] flex flex-1 items-end justify-center pb-[30px]">
            <Pagination
              paging={paging}
              totalPages={totalPages}
              handlePagingFilter={handlePagingFilter}
            />
          </div>
        </div>
      </div>
    </>
  );
}
