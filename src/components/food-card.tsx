"use client";

import CartIcon from "@/components/common/icons/cart-icon";
import DotIcon from "@/components/common/icons/dot-icon";
import StarIcon from "@/components/common/icons/star-icon";
import Image from "next/image";
import Link from "next/link";
import Button from "./common/button";
import ToolTip from "./common/tooltip";
import TruncateToolTip from "./common/truncate-tooltip";
import { IngredientTypes } from "@/constants/ingredient-type";
import { useEffect, useState } from "react";
import IngredientCheckbox from "./ingredient-checkbox";
import WeightCheckbox from "./weight-checkbox";
import { getAuthTokenFromInternalServer } from "@/services/api/internal-auth-api";
import { FoodType } from "@/types/food";

type props = {
  data: FoodType;
};

export default function FoodCard({ data }: props) {
  const [weight, setWeight] = useState([data.variationsFoods[0].weight]);
  const [ingredient, setIngredient] = useState<IngredientTypes[]>([
    data.variationsFoods[0].ingredient as IngredientTypes,
  ]);

  const [weightOption, setWeightOption] = useState<string[]>([]);
  const [ingredientOption, setIngredientOption] = useState<string[]>([]);

  const weightOptionFilter = () => {
    const newWeightOption = data.variationsFoods.reduce<string[]>(
      (acc, food) => {
        if (food.weight && !acc.includes(food.weight)) {
          acc.push(food.weight);
        }
        return acc;
      },
      [],
    );
    return newWeightOption;
  };

  const ingredientOptionFilter = () => {
    const newIngredientOption = data.variationsFoods.reduce<string[]>(
      (acc, food) => {
        if (food.ingredient && !acc.includes(food.ingredient)) {
          acc.push(food.ingredient);
        }
        return acc;
      },
      [],
    );
    return newIngredientOption;
  };

  function handleWeightFilter(weightCurrent: string) {
    if (!weight.includes(weightCurrent)) {
      const newIngredientOption = data.variationsFoods.reduce<string[]>(
        (acc, food) => {
          if (
            food.ingredient &&
            !acc.includes(food.ingredient) &&
            food.weight === weightCurrent
          ) {
            acc.push(food.ingredient);
          }
          return acc;
        },
        [],
      );

      if (!newIngredientOption.includes(ingredient[0])) {
        setIngredient([newIngredientOption[0] as IngredientTypes]);
      }

      setIngredientOption(newIngredientOption);
      setWeight([weightCurrent]);
    } else {
      setWeight([]);
      setIngredientOption(ingredientOptionFilter());
    }
  }

  function handleIngredientFilter(ingredientCurrent: IngredientTypes) {
    if (!ingredient.includes(ingredientCurrent)) {
      const newWeightOption = data.variationsFoods.reduce<string[]>(
        (acc, food) => {
          if (
            food.weight &&
            !acc.includes(food.weight) &&
            food.ingredient === ingredientCurrent
          ) {
            acc.push(food.weight);
          }
          return acc;
        },
        [],
      );

      if (!newWeightOption.includes(weight[0])) {
        setWeight([newWeightOption[0]]);
      }

      setWeightOption(newWeightOption);
      setIngredient([ingredientCurrent]);
    } else {
      setIngredient([]);
      setWeightOption(weightOptionFilter());
    }
  }

  const weightRender = weightOptionFilter();
  const ingredientRender = ingredientOptionFilter();

  const food = data.variationsFoods.find(
    (food) =>
      ingredient.includes(food.ingredient as IngredientTypes) &&
      weight.includes(food.weight as IngredientTypes),
  );

  const { minPrice, maxPrice } = data.variationsFoods.reduce(
    (num, option) => ({
      minPrice: Math.min(option.price, num.minPrice),
      maxPrice: Math.max(option.price, num.maxPrice),
    }),
    { minPrice: Infinity, maxPrice: -Infinity },
  );

  useEffect(() => {
    if (data.variationsFoods) {
      setWeightOption(weightOptionFilter());
      setIngredientOption(ingredientOptionFilter());
    }
  }, []);

  return (
    <div className="border-box flex min-w-[232px] flex-1 transform flex-col border border-solid border-light_gray_color_second bg-white small-screen:min-w-[25%] x-small-screen:min-w-[calc(100%/3)] x-smallest-screen:min-w-[50%]">
      <div className="relative w-full overflow-hidden pb-[85%]">
        <Link href={`/foods/${data.id}`} className="h-full w-full">
          <Image
            src={data.image}
            alt={data.name}
            fill
            loading="eager"
            className="absolute left-0 top-0 object-cover"
          />
        </Link>
      </div>
      <div className="relative flex flex-auto flex-col justify-between px-[30px] pt-[20px]">
        <div className="flex flex-col">
          <TruncateToolTip
            spanClass="mb-[10px] line-clamp-2 max-h-[46px] w-full overflow-hidden font-quicksand text-[17px] font-bold capitalize leading-[1.35] tracking-[-0.01em] text-primary"
            value={data.name}
          />

          <TruncateToolTip
            spanClass="mb-[10px] line-clamp-4 max-h-[76px] w-full overflow-hidden font-quicksand text-[13px] font-normal capitalize leading-[1.46] tracking-[0.02em] text-text_color"
            value="Cung cấp thức ăn dinh dưỡng chất lượng cao, không chứa ngũ cốc, giúp hỗ trợ sức khỏe và sự phát triển của thú cưng."
          />

          <span className="flex gap-[2px]">
            {[...Array(4)].map((_, index) => (
              <StarIcon
                size={12}
                className="fill-current text-dark_yellow_color"
                key={index}
              />
            ))}

            <StarIcon
              size={12}
              className="fill-current text-dark_yellow_color"
              percentage={0.5}
            />
          </span>
        </div>
        <div className="mt-[15px] flex flex-wrap items-center gap-[5px] text-[13px] font-normal leading-[16px] tracking-[0.02em] text-primary">
          <Link href="#">Thức ăn khô</Link>
          <DotIcon size={3} className="fill-current text-dark_orange_color" />
          <Link href="#">Sophresh</Link>
        </div>
      </div>

      <form className="flex flex-col gap-[12.5px] px-[30px] pb-[30px] pt-[15px]">
        {data.variationsFoods.length && (
          <>
            <div>
              <ul
                className="flex flex-wrap"
                role="radiogroup"
                aria-label="color"
              >
                {weightRender.map((weightValue, index) => {
                  if (weightOption.includes(weightValue)) {
                    return (
                      <WeightCheckbox
                        key={index}
                        weight={weight}
                        weightValue={weightValue}
                        isAvailable={true}
                        handleWeightFilter={handleWeightFilter}
                      />
                    );
                  } else {
                    return (
                      <WeightCheckbox
                        key={index}
                        weight={weight}
                        isAvailable={false}
                        weightValue={weightValue}
                      />
                    );
                  }
                })}
              </ul>
            </div>

            <div className="relative">
              <ul className="ml-[5px] flex gap-[10px] text-[14px] leading-[1.23] tracking-[0.02em] text-text_color">
                {ingredientRender.map((ingredientValue, index) => {
                  if (ingredientOption.includes(ingredientValue)) {
                    return (
                      <IngredientCheckbox
                        key={index}
                        ingredient={ingredient}
                        ingredientType={ingredientValue as IngredientTypes}
                        isAvailable={true}
                        handleIngredientFilter={handleIngredientFilter}
                      />
                    );
                  } else {
                    return (
                      <IngredientCheckbox
                        key={index}
                        ingredient={ingredient}
                        isAvailable={false}
                        ingredientType={ingredientValue as IngredientTypes}
                      />
                    );
                  }
                })}
              </ul>
            </div>
          </>
        )}

        <div className="flex items-center justify-between xxx-smallest-screen:flex-col xxx-smallest-screen:gap-[10px]">
          <span className="pr-[5px] font-quicksand font-bold leading-[1] tracking-[-0.02em] text-secondary up-smallest-screen:text-[18px]">
            {food?.price ? (
              `${food?.price}đ`
            ) : (
              <div className="flex flex-col items-center gap-[5px]">
                {minPrice && <span>{minPrice}đ</span>}
                {maxPrice && (
                  <>
                    <span> - </span>
                    <span>{maxPrice}đ</span>
                  </>
                )}
              </div>
            )}
          </span>
          {weight.length === 0 || ingredient.length === 0 ? (
            <Button
              type="submit"
              size="circle_lg"
              variant="primary"
              className="pointer-events-none opacity-20"
              startIcon={<CartIcon size={16} />}
              onClick={(e) => {
                e.preventDefault();
              }}
            />
          ) : (
            <ToolTip
              element={
                <Button
                  type="submit"
                  size="circle_lg"
                  variant="primary"
                  startIcon={<CartIcon size={16} />}
                  onClick={async () => {
                    const token = await getAuthTokenFromInternalServer();
                    if (!token) {
                      window.location.href = "/login";
                    } else {
                      window.location.href = "/not_found";
                    }
                  }}
                />
              }
              value="Thêm vào giỏ hàng"
            />
          )}
        </div>
      </form>
    </div>
  );
}
