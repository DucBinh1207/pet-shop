"use client";

import Button from "@/components/common/button";
import Input from "@/components/common/input";
import { ColorType } from "@/constants/color-type";
import { IngredientType } from "@/constants/ingredient-type";
import { PriceRange } from "@/constants/price-range";
import { SizeType } from "@/constants/size-type";
import { WeightType } from "@/constants/weight-type";
import cn from "@/utils/style/cn";
import Image from "next/image";
import { useState } from "react";
import ReactSlider from "react-slider";

type ColorTypes = (typeof ColorType)[keyof typeof ColorType];
type SizeTypes = (typeof SizeType)[keyof typeof SizeType];
type IngredientTypes = (typeof IngredientType)[keyof typeof IngredientType];
type WeightTypes = (typeof WeightType)[keyof typeof WeightType];

export default function PetsContent() {
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

  const [weight, setWeight] = useState<WeightTypes>();

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

  return (
    <div className="mx-auto flex flex-nowrap rounded-[4px] border border-solid border-light_gray_color_second bg-white large-screen:w-[1160px]">
      <div className="border-r border-solid border-light_gray_color_second large-screen:min-w-[232px]">
        <div className="flex flex-col pb-[30px]">
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
                    ></div>
                  )}
                  thumbActiveClassName=""
                  renderTrack={(props, state) => {
                    if (state.index === 1) {
                      return (
                        <div
                          {...props}
                          key={state.index}
                          className="relative h-[2px] rounded-full bg-primary"
                        ></div>
                      );
                    } else {
                      return (
                        <div
                          {...props}
                          key={state.index}
                          className="relative h-[2px] rounded-full bg-background_color"
                        ></div>
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

              <Button
                size="filter"
                className="mt-[10px] rounded-[18px] text-[12px] font-bold tracking-wider"
              >
                Filter
              </Button>
            </form>
          </div>

          <div className="px-[25px] pt-[40px]">
            <h3 className="mb-[20px] font-quicksand text-[20px] font-bold leading-[1.1] tracking-[-0.01em] text-primary">
              Color
            </h3>
            <ul className="text-[14px] leading-[1.23] tracking-[0.02em] text-text_color">
              <li
                className="group flex cursor-pointer items-center gap-[10px] pb-[13px] hover:text-secondary"
                onClick={() => {
                  handleColorFilter(ColorType.LIGHT);
                }}
              >
                <span
                  className={cn(
                    "hover_animate after:hover_animate relative inline-block h-[22px] w-[22px] rounded-[50%] outline outline-[1px] outline-light_gray_color_second after:absolute after:bottom-[-4px] after:left-[-4px] after:right-[-4px] after:top-[-4px] after:rounded-[50%] after:border after:border-solid after:content-[''] group-hover:after:border-secondary",
                    {
                      "after:border-secondary": color.includes(ColorType.LIGHT),
                      "after:border-transparent": !color.includes(
                        ColorType.LIGHT,
                      ),
                    },
                  )}
                  style={{ backgroundColor: ColorType.LIGHT }}
                ></span>
                <span className="flex-1"> Màu sáng </span>
              </li>

              <li
                className="group flex cursor-pointer items-center gap-[10px] pb-[13px] hover:text-secondary"
                onClick={() => {
                  handleColorFilter(ColorType.DARK);
                }}
              >
                <span
                  className={cn(
                    "hover_animate after:hover_animate relative inline-block h-[22px] w-[22px] rounded-[50%] outline outline-[1px] outline-light_gray_color_second after:absolute after:bottom-[-4px] after:left-[-4px] after:right-[-4px] after:top-[-4px] after:rounded-[50%] after:border after:border-solid after:content-[''] group-hover:after:border-secondary",
                    {
                      "after:border-secondary": color.includes(ColorType.DARK),
                      "after:border-transparent": !color.includes(
                        ColorType.DARK,
                      ),
                    },
                  )}
                  style={{ backgroundColor: ColorType.DARK }}
                ></span>
                <span className="flex-1"> Màu tối </span>
              </li>
            </ul>
          </div>

          <div className="px-[25px] pt-[40px]">
            <h3 className="mb-[20px] font-quicksand text-[20px] font-bold leading-[1.1] tracking-[-0.01em] text-primary">
              Size
            </h3>

            <ul className="text-[14px] leading-[1.23] tracking-[0.02em] text-text_color">
              <li className="group flex cursor-pointer items-center gap-[10px] pb-[13px] hover:text-secondary">
                <label htmlFor={SizeType.SMALL} className="cursor-pointer">
                  <Input
                    type="checkbox"
                    id={SizeType.SMALL}
                    inputSize="form_controls"
                    className={cn(
                      "relative mr-[7px] appearance-none rounded-[3px] align-middle after:absolute after:bottom-[1px] after:left-[1px] after:right-[1px] after:top-0",
                      {
                        "after:bg-checked": size.includes(SizeType.SMALL),
                      },
                    )}
                    name="weight"
                    onClick={() => {
                      handleSizeFilter(SizeType.SMALL);
                    }}
                  />
                  <span className="text-[14px] leading-[1.5] tracking-[0.02em] text-text_color">
                    Nhỏ
                  </span>
                </label>
              </li>

              <li className="group flex cursor-pointer items-center gap-[10px] pb-[13px] hover:text-secondary">
                <label htmlFor={SizeType.MEDIUM} className="cursor-pointer">
                  <Input
                    type="checkbox"
                    id={SizeType.MEDIUM}
                    inputSize="form_controls"
                    className={cn(
                      "relative mr-[7px] appearance-none rounded-[3px] align-middle after:absolute after:bottom-[1px] after:left-[1px] after:right-[1px] after:top-0",
                      {
                        "after:bg-checked": size.includes(SizeType.MEDIUM),
                      },
                    )}
                    name="weight"
                    onClick={() => {
                      handleSizeFilter(SizeType.MEDIUM);
                    }}
                  />
                  <span className="text-[14px] leading-[1.5] tracking-[0.02em] text-text_color">
                    Trung bình
                  </span>
                </label>
              </li>

              <li className="group flex cursor-pointer items-center gap-[10px] pb-[13px] hover:text-secondary">
                <label htmlFor={SizeType.BIG} className="cursor-pointer">
                  <Input
                    type="checkbox"
                    id={SizeType.BIG}
                    inputSize="form_controls"
                    className={cn(
                      "relative mr-[7px] appearance-none rounded-[3px] align-middle after:absolute after:bottom-[1px] after:left-[1px] after:right-[1px] after:top-0",
                      {
                        "after:bg-checked": size.includes(SizeType.BIG),
                      },
                    )}
                    name="weight"
                    onClick={() => {
                      handleSizeFilter(SizeType.BIG);
                    }}
                  />
                  <span className="text-[14px] leading-[1.5] tracking-[0.02em] text-text_color">
                    Lớn
                  </span>
                </label>
              </li>
            </ul>
          </div>

          <div className="px-[25px] pt-[40px]">
            <h3 className="mb-[20px] font-quicksand text-[20px] font-bold leading-[1.1] tracking-[-0.01em] text-primary">
              Ingredients
            </h3>

            <ul className="text-[14px] leading-[1.23] tracking-[0.02em] text-text_color">
              <li
                className="group flex cursor-pointer items-center gap-[10px] pb-[13px] hover:text-secondary"
                onClick={() => {
                  handleIngredientFilter(IngredientType.BEEF);
                }}
              >
                <div
                  className={cn(
                    "hover_animate after:hover_animate relative inline-block h-[35px] w-[35px] rounded-[50%] after:absolute after:bottom-[-4px] after:left-[-4px] after:right-[-4px] after:top-[-4px] after:rounded-[4px] after:border after:border-solid after:content-[''] group-hover:after:border-secondary",
                    {
                      "after:border-secondary": ingredient.includes(
                        IngredientType.BEEF,
                      ),
                      "after:border-transparent": !ingredient.includes(
                        IngredientType.BEEF,
                      ),
                    },
                  )}
                >
                  <Image src="/assets/images/beef.png" fill alt="beef" />
                </div>
                <span className="flex-1"> Thịt bò</span>
              </li>

              <li
                className="group flex cursor-pointer items-center gap-[10px] pb-[13px] hover:text-secondary"
                onClick={() => {
                  handleIngredientFilter(IngredientType.CHICKEN);
                }}
              >
                <div
                  className={cn(
                    "hover_animate after:hover_animate relative inline-block h-[35px] w-[35px] rounded-[50%] after:absolute after:bottom-[-4px] after:left-[-4px] after:right-[-4px] after:top-[-4px] after:rounded-[4px] after:border after:border-solid after:content-[''] group-hover:after:border-secondary",
                    {
                      "after:border-secondary": ingredient.includes(
                        IngredientType.CHICKEN,
                      ),
                      "after:border-transparent": !ingredient.includes(
                        IngredientType.CHICKEN,
                      ),
                    },
                  )}
                >
                  <Image src="/assets/images/chicken.png" fill alt="beef" />
                </div>
                <span className="flex-1"> Thịt gà</span>
              </li>
            </ul>
          </div>

          <div className="px-[25px] pt-[40px]">
            <h3 className="mb-[20px] font-quicksand text-[20px] font-bold leading-[1.1] tracking-[-0.01em] text-primary">
              Weight
            </h3>

            <div className="text-[14px] leading-[1.23] tracking-[0.02em] text-text_color">
              <select
                className="relative h-auto w-full appearance-none rounded-[3px] border border-solid border-input_border_color bg-form_color py-[8px] pl-[9px] pr-[28px] text-[13px] font-medium leading-[16px] tracking-[0.01em] text-primary outline-none"
                onChange={handleWeightFilter}
              >
                <option value="">Choose the weight</option>
                <option value={WeightType.FIVE}>&lt;{WeightType.FIVE}</option>
                <option value={WeightType.TEN}>&lt;{WeightType.TEN}</option>
                <option value={WeightType.FIFTY}>&lt;{WeightType.FIFTY}</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
