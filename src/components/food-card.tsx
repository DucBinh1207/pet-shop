"use client";

import CartIcon from "@/components/common/icons/cart-icon";
import DotIcon from "@/components/common/icons/dot-icon";
import StarIcon from "@/components/common/icons/star-icon";
import Image from "next/image";
import Link from "next/link";
import Button from "./common/button";
import ToolTip from "./common/tooltip";
import TruncateToolTip from "./common/truncate-tooltip";
import { IngredientType, IngredientTypes } from "@/constants/ingredient-type";
import { useState } from "react";
import IngredientCheckbox from "./ingredient-checkbox";
import WeightCheckbox from "./weight-checkbox";
import { getAuthTokenFromInternalServer } from "@/services/api/internal-auth-api";

export default function FoodCard() {
  const [ingredient, setIngredient] = useState<IngredientTypes[]>([
    IngredientType.BEEF,
  ]);

  function handleIngredientFilter(ingredientCurrent: IngredientTypes) {
    if (!ingredient.includes(ingredientCurrent)) {
      setIngredient([ingredientCurrent]);
    }
  }

  return (
    <div className="border-box flex min-w-[232px] flex-1 transform flex-col border border-solid border-light_gray_color_second bg-white small-screen:min-w-[25%] x-small-screen:min-w-[calc(100%/3)] x-smallest-screen:min-w-[50%]">
      <div className="relative w-full overflow-hidden pb-[85%]">
        <Link href="/foods/F3123212" className="h-full w-full">
          <Image
            src="/assets/images/food1.jpg"
            alt="food1"
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
            value="Thức Ăn Ngũ Cốc True Acre "
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
        <div>
          <ul className="flex flex-wrap" role="radiogroup" aria-label="color">
            <WeightCheckbox weight="1kg" />
            <WeightCheckbox weight="5kg" />
          </ul>
        </div>

        <div className="relative">
          <ul className="ml-[5px] flex gap-[10px] text-[14px] leading-[1.23] tracking-[0.02em] text-text_color">
            <IngredientCheckbox
              ingredient={ingredient}
              ingredientType={IngredientType.BEEF}
              handleIngredientFilter={handleIngredientFilter}
            />

            <IngredientCheckbox
              ingredient={ingredient}
              ingredientType={IngredientType.CHICKEN}
              handleIngredientFilter={handleIngredientFilter}
            />
          </ul>
        </div>

        <div className="flex items-center justify-between xxx-smallest-screen:flex-col xxx-smallest-screen:gap-[10px]">
          <span className="pr-[5px] font-quicksand font-bold leading-[1] tracking-[-0.02em] text-secondary up-smallest-screen:text-[18px]">
            10.000.000 VND
          </span>
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
        </div>
      </form>
    </div>
  );
}
