"use client";

import { ColorType, ColorTypes } from "@/constants/color-type";
import { IngredientType, IngredientTypes } from "@/constants/ingredient-type";
import { PriceRange } from "@/constants/price-range";
import { SizeType, SizeTypes } from "@/constants/size-type";
import { WeightType, WeightTypes } from "@/constants/weight-type";
import { useEffect, useState } from "react";
import ReactSlider from "react-slider";
import ColorCheckbox from "./color-checkbox";
import SizeCheckbox from "./size-checkbox";
import IngredientCheckbox from "./ingredient-checkbox";
import PetsCategory from "./pets-category";
import { CategoryType, CategoryTypes } from "@/constants/category-type";
import PetCard from "@/components/pet-card";
import CancelIcon from "@/components/common/icons/cancel-icon";
import { SortType, SortTypes } from "@/constants/sort-type";
import Sort from "./sort";
import AngleIcon from "@/components/common/icons/angle-icon";
import cn from "@/utils/style/cn";

export default function PetsContent() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [category, setCategory] = useState<CategoryTypes>(CategoryType.ALL);
  const [price, setPrice] = useState([PriceRange.MIN, PriceRange.MAX]);
  const [color, setColor] = useState<ColorTypes[]>([
    ColorType.LIGHT,
    ColorType.DARK,
  ]);
  const [size, setSize] = useState<SizeTypes[]>([
    SizeType.SMALL,
    SizeType.MEDIUM,
    SizeType.BIG,
  ]);
  const [ingredient, setIngredient] = useState<IngredientTypes[]>([
    IngredientType.BEEF,
    IngredientType.CHICKEN,
  ]);
  const [weight, setWeight] = useState<WeightTypes>(WeightType.FIFTY);
  const [sort, setSort] = useState<SortTypes>(SortType.DEFAULT);
  const [paging, setPaging] = useState<number>(1);

  function handleCategoryFilter(categoryCurrent: CategoryTypes) {
    setCategory(categoryCurrent);
  }
  function handleColorFilter(colorCurrent: ColorTypes) {
    if (color.includes(colorCurrent)) {
      setColor(color.filter((c) => c !== colorCurrent));
    } else setColor([...color, colorCurrent]);
  }
  function handleSizeFilter(sizeCurrent: SizeTypes) {
    if (size.includes(sizeCurrent)) {
      setSize(size.filter((s) => s !== sizeCurrent));
    } else setSize([...size, sizeCurrent]);
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

  const appendColorsToParams = () => {
    const params = new URLSearchParams();

    params.append("category", category);

    color.forEach((colorValue) => {
      params.append("color", colorValue);
    });

    size.forEach((sizeValue) => {
      params.append("size", sizeValue);
    });

    ingredient.forEach((ingredientValue) => {
      params.append("ingredient", ingredientValue);
    });

    params.append("weight", weight.toString());

    params.append("sort", sort);

    params.append("paging", paging.toString());
  };

  useEffect(() => {
    appendColorsToParams();
  }, [category, color, size, ingredient, weight, sort, paging]);

  return (
    <>
      <PetsCategory
        category={category}
        handleCategoryFilter={handleCategoryFilter}
      />

      <div className="mx-auto flex flex-nowrap rounded-[4px] border border-solid border-light_gray_color_second bg-white large-screen:w-[1160px]">
        <div className="border-r border-solid border-light_gray_color_second large-screen:min-w-[232px] small-screen:relative small-screen:overflow-hidden">
          <div
            className={cn(
              "flex flex-col pb-[30px] transition-all duration-150 ease-linear small-screen:fixed small-screen:right-0 small-screen:top-0 small-screen:z-[200] small-screen:h-full small-screen:w-[360px] small-screen:max-w-full small-screen:bg-white small-screen:pb-[30px] small-screen:leading-[1.23]",
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
                Price
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
                  <span>Price:&nbsp;</span>
                  <span>{price[0]} </span>
                  <span>&nbsp;&nbsp;-&nbsp;</span>
                  <span>{price[1]} </span>
                </div>

                <button
                  type="button"
                  className="hover_animate mt-[10px] inline-block cursor-pointer rounded-[18px] border-[2px] border-solid border-primary bg-white px-[18px] py-[5px] text-center text-[12px] font-bold uppercase tracking-wider text-primary outline-none hover:bg-primary hover:text-white"
                >
                  Filter
                </button>
              </form>
            </div>

            <div className="px-[25px] pt-[40px]">
              <h3 className="mb-[20px] font-quicksand text-[20px] font-bold leading-[1.1] tracking-[-0.01em] text-primary">
                Color
              </h3>

              <ul className="text-[14px] leading-[1.23] tracking-[0.02em] text-text_color">
                <ColorCheckbox
                  color={color}
                  colorType={ColorType.LIGHT}
                  name="Màu sáng"
                  handleColorFilter={handleColorFilter}
                />

                <ColorCheckbox
                  color={color}
                  colorType={ColorType.DARK}
                  name="Màu tối"
                  handleColorFilter={handleColorFilter}
                />
              </ul>
            </div>

            <div className="px-[25px] pt-[40px]">
              <h3 className="mb-[20px] font-quicksand text-[20px] font-bold leading-[1.1] tracking-[-0.01em] text-primary">
                Size
              </h3>

              <ul className="text-[14px] leading-[1.23] tracking-[0.02em] text-text_color">
                <SizeCheckbox
                  size={size}
                  sizeType={SizeType.SMALL}
                  name="Nhỏ "
                  handleSizeFilter={handleSizeFilter}
                />

                <SizeCheckbox
                  size={size}
                  sizeType={SizeType.MEDIUM}
                  name="Trung bình "
                  handleSizeFilter={handleSizeFilter}
                />

                <SizeCheckbox
                  size={size}
                  sizeType={SizeType.BIG}
                  name="Lớn "
                  handleSizeFilter={handleSizeFilter}
                />
              </ul>
            </div>

            <div className="px-[25px] pt-[40px]">
              <h3 className="mb-[20px] font-quicksand text-[20px] font-bold leading-[1.1] tracking-[-0.01em] text-primary">
                Ingredients
              </h3>

              <ul className="text-[14px] leading-[1.23] tracking-[0.02em] text-text_color">
                <IngredientCheckbox
                  ingredient={ingredient}
                  ingredientType={IngredientType.BEEF}
                  name="Thịt bò "
                  handleIngredientFilter={handleIngredientFilter}
                />

                <IngredientCheckbox
                  ingredient={ingredient}
                  ingredientType={IngredientType.CHICKEN}
                  name="Thịt gà "
                  handleIngredientFilter={handleIngredientFilter}
                />
              </ul>
            </div>

            <div className="px-[25px] pb-[120px] pt-[40px]">
              <h3 className="mb-[20px] font-quicksand text-[20px] font-bold leading-[1.1] tracking-[-0.01em] text-primary">
                Weight
              </h3>

              <div className="text-[14px] leading-[1.23] tracking-[0.02em] text-text_color">
                <select
                  className="relative h-auto w-full rounded-[3px] border border-solid border-input_border_color bg-form_color py-[8px] pl-[9px] pr-[28px] text-[13px] font-medium leading-[16px] tracking-[0.01em] text-primary outline-none"
                  onChange={handleWeightFilter}
                >
                  <option value="">Choose the weight</option>
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

        <div className="flex-1 large-screen:min-w-[900px] small-screen:w-full">
          <div className="flex min-h-[55px] items-center border-b border-solid border-light_gray_color_second px-[30px] py-[13px] text-[13px] font-normal leading-[16px] tracking-[0.025em] text-text_color">
            <div className="flex w-full flex-1 small-screen:gap-[5px] up-smallest-screen:items-center up-smallest-screen:justify-between smallest-screen:flex-col">
              <div className="w-full flex-1">Showing all 11 results</div>
              <Sort sort={sort} handleSortFilter={handleSortFilter} />
            </div>
            <div className="ml-[15px] mr-[2px] large-screen:hidden large-screen:opacity-0">
              <button
                className="hover_animate inline-flex cursor-pointer items-center gap-[7px] rounded-[17px] border-[2px] border-solid border-primary bg-white px-[22px] py-[7px] text-center text-[11px] font-bold uppercase leading-[14px] tracking-[0.07em] text-primary outline-none hover:bg-primary hover:text-white"
                onClick={() => setIsFilterOpen(true)}
              >
                <AngleIcon size={8} className="rotate-[-90deg] fill-current" />
                Filter
              </button>
            </div>
          </div>

          <div className="flex flex-wrap">
            {[...Array(11)].map((_, index) => (
              <div
                className="large-screen:w-[25%] up-x-small-screen:w-[25%] up-x-smallest-screen:!w-[calc(100%/3)] up-xx-smallest-screen:!w-[50%] xx-smallest-screen:w-full down-xx-smallest-screen:!w-[50%]"
                key={index}
              >
                <PetCard />
              </div>
            ))}
          </div>

          <div className="flex min-h-[55px] items-center justify-center gap-[5px] border-b border-solid border-light_gray_color_second px-[30px] py-[13px] text-[13px] font-normal leading-[16px] tracking-[0.025em] text-text_color">
            <button
              className="hover_animate inline-block cursor-pointer rounded-[8px] border-[2px] border-solid border-primary bg-white p-[8px] text-center uppercase text-primary outline-none hover:bg-primary hover:text-white"
              onClick={() => {
                handlePagingFilter(1);
              }}
            >
              1
            </button>

            <button
              className="hover_animate inline-block cursor-pointer rounded-[8px] border-[2px] border-solid border-primary bg-white p-[8px] text-center uppercase text-primary outline-none hover:bg-primary hover:text-white"
              onClick={() => {
                handlePagingFilter(10);
              }}
            >
              10
            </button>

            <button
              className="hover_animate inline-block cursor-pointer rounded-[8px] border-[2px] border-solid border-primary bg-white p-[8px] text-center uppercase text-primary outline-none hover:bg-primary hover:text-white"
              onClick={() => {
                handlePagingFilter(100);
              }}
            >
              100
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
