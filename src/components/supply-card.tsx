"use client";

import CartIcon from "@/components/common/icons/cart-icon";
import DotIcon from "@/components/common/icons/dot-icon";
import StarIcon from "@/components/common/icons/star-icon";
import cn from "@/utils/style/cn";
import Image from "next/image";

import Link from "next/link";
import ToolTip from "./common/tooltip";
import Button from "./common/button";
import TruncateToolTip from "./common/truncate-tooltip";

export default function SupplyCard() {
  return (
    <div className="border-box flex min-w-[232px] flex-1 transform flex-col border border-solid border-light_gray_color_second bg-white small-screen:min-w-[25%] x-small-screen:min-w-[calc(100%/3)] x-smallest-screen:min-w-[50%]">
      <div className="relative w-full overflow-hidden pb-[85%]">
        <Link href="#" className="h-full w-full">
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
            value="True Acre Foods Grain "
          />

          <TruncateToolTip
            spanClass="mb-[10px] line-clamp-4 max-h-[76px] w-full overflow-hidden font-quicksand text-[13px] font-normal capitalize leading-[1.46] tracking-[0.02em] text-text_color"
            value="Bring some grain-free goodness to your pup’s bowl."
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
          <Link href="#">Fresh & Frozen Food</Link>
          <DotIcon size={3} className="fill-current text-dark_orange_color" />
          <Link href="#">Sophresh</Link>
        </div>
      </div>

      <form className="flex flex-col gap-[12.5px] px-[30px] pb-[30px] pt-[15px]">
        <div className="color">
          <ul className="flex flex-wrap" role="radiogroup" aria-label="weight">
            <li
              aria-checked={true}
              tabIndex={0}
              data-wvstooltip="8lbs"
              className={cn(
                "m-[2.5px] flex h-[26px] w-[26px] cursor-pointer list-none items-center justify-center rounded-[50%] border border-solid bg-white",
                {
                  "border-primary": true,
                  "border-form_color": false,
                },
              )}
              title="red"
              data-title="red"
              data-value="red"
              role="radio"
            >
              <span
                className={cn(
                  "block h-[20px] w-[20px] rounded-[50%] border border-solid border-soft_dark_blue_color",
                  {
                    "bg-red-600": true,
                    "bg-blue-600": false,
                    "bg-white": false,
                  },
                )}
              />
            </li>

            <li
              aria-checked={true}
              tabIndex={0}
              data-wvstooltip="8lbs"
              className={cn(
                "m-[2.5px] flex h-[24px] w-[24px] cursor-pointer list-none items-center justify-center rounded-[50%] border border-solid bg-white",
                {
                  "border-primary": false,
                  "border-form_color": true,
                },
              )}
              title="red"
              data-title="red"
              data-value="red"
              role="radio"
            >
              <span
                className={cn(
                  "block h-[20px] w-[20px] rounded-[50%] border border-solid border-soft_dark_blue_color",
                  {
                    "bg-red-600": false,
                    "bg-blue-600": false,
                    "bg-white": true,
                  },
                )}
              />
            </li>
          </ul>
        </div>

        <div className="relative">
          <select className="relative h-auto w-full rounded-[3px] border border-solid border-input_border_color bg-form_color py-[8px] pl-[9px] pr-[28px] text-[13px] font-medium leading-[16px] tracking-[0.01em] text-primary outline-none">
            <option value="1">Choose your size</option>
            <option value="2">Small</option>
            <option value="3">Medium</option>
            <option value="4">Big</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-quicksand font-bold leading-[1] tracking-[-0.02em] text-secondary up-smallest-screen:text-[18px]">
            $45.00
          </span>
          <ToolTip
            element={
              <Button
                type="submit"
                size="circle_lg"
                variant="primary"
                startIcon={<CartIcon size={16} />}
              />
            }
            value="Add to Cart"
          />
        </div>
      </form>
    </div>
  );
}
