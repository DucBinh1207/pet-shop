"use client";

import Button from "@/components/common/button";
import CartIcon from "@/components/common/icons/cart-icon";
import DotIcon from "@/components/common/icons/dot-icon";
import StarIcon from "@/components/common/icons/star-icon";
import ToolTip from "@/components/common/tooltip";
import cn from "@/utils/style/cn";
import Image from "next/image";

import Link from "next/link";
import { useState } from "react";

export default function FoodCard() {
  const [bgSelect, setBgSelect] = useState("/assets/icons/angle-down-icon.svg");
  const [isOpen, setIsOpen] = useState(false);

  const onBlurSelect = () => {
    setBgSelect("/assets/icons/angle-down-icon.svg");
    setIsOpen(false);
  };

  const onClickSelect = () => {
    if (isOpen) {
      setBgSelect("/assets/icons/angle-down-icon.svg");
      setIsOpen(false);
    } else {
      setBgSelect("/assets/icons/angle-up-icon.svg");
      setIsOpen(true);
    }
  };

  return (
    <div className="border-box flex min-w-[232px] flex-1 transform flex-col border border-solid border-light_gray_color_second bg-white small-screen:min-w-[25%] xs-small-screen:min-w-[calc(100%/3)] xs-smallest-screen:min-w-[50%]">
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
          <ToolTip
            element={
              <span className="mb-[10px] line-clamp-2 max-h-[46px] w-full overflow-hidden font-quicksand text-[17px] font-bold capitalize leading-[1.35] tracking-[-0.01em] text-primary">
                True Acre Foods Grain
              </span>
            }
            value="True Acre Foods Grain"
          />
          <ToolTip
            element={
              <span className="mb-[10px] line-clamp-4 max-h-[76px] w-full overflow-hidden font-quicksand text-[13px] font-normal capitalize leading-[1.46] tracking-[0.02em] text-text_color">
                Bring some grain-free goodness to your pup’s bowl.
              </span>
            }
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
        <div className="weight">
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
                  "border-soft_dark_blue_color block h-[20px] w-[20px] rounded-[50%] border border-solid",
                  {
                    "bg-red-600": true,
                    "bg-blue-600": false,
                    "bg-white": false,
                  },
                )}
              ></span>
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
                  "border-soft_dark_blue_color block h-[20px] w-[20px] rounded-[50%] border border-solid",
                  {
                    "bg-red-600": false,
                    "bg-blue-600": false,
                    "bg-white": true,
                  },
                )}
              ></span>
            </li>
          </ul>
        </div>

        <div className="color">
          <ul className="flex flex-wrap" role="radiogroup" aria-label="color">
            <li
              aria-checked={true}
              tabIndex={0}
              data-wvstooltip="red"
              className="m-[2.5px] cursor-pointer list-none"
              title="8lbs"
              data-title="8lbs"
              data-value="8lbs"
              role="radio"
            >
              <span
                className={cn(
                  "block rounded-[13px] border border-solid bg-form_color px-[9px] py-[5px] text-center text-[13px] font-medium leading-[16px] tracking-[0.01em] text-primary",
                  {
                    "border-primary": true,
                    "border-form_color": !true,
                  },
                )}
              >
                8lbs
              </span>
            </li>
            <li
              aria-checked={false}
              tabIndex={0}
              data-wvstooltip="16lbs"
              className="m-[2.5px] cursor-pointer list-none"
              title="16lbs"
              data-title="16lbs"
              data-value="16lbs"
              role="radio"
            >
              <span
                className={cn(
                  "block rounded-[13px] border border-solid bg-form_color px-[9px] py-[5px] text-center text-[13px] font-medium leading-[16px] tracking-[0.01em] text-primary",
                  {
                    "border-primary": false,
                    "border-form_color": !false,
                  },
                )}
              >
                16lbs
              </span>
            </li>
          </ul>
        </div>

        <div className="relative">
          <select
            className="relative h-auto w-full appearance-none rounded-[3px] border border-solid border-input_border_color bg-form_color py-[8px] pl-[9px] pr-[28px] text-[13px] font-medium leading-[16px] tracking-[0.01em] text-primary outline-none"
            style={{
              backgroundImage: `url(${bgSelect})`,
              backgroundPosition: "right 10px center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "12px",
            }}
            onBlur={onBlurSelect}
            onClick={onClickSelect}
          >
            <option value="1">Choose your Ingredients</option>
            <option value="2">Pig</option>
            <option value="3">Chicken</option>
            <option value="4">Beef</option>
          </select>
        </div>

        <div className="relative">
          <select
            className="relative h-auto w-full appearance-none rounded-[3px] border border-solid border-input_border_color bg-form_color py-[8px] pl-[9px] pr-[28px] text-[13px] font-medium leading-[16px] tracking-[0.01em] text-primary outline-none"
            style={{
              backgroundImage: `url(${bgSelect})`,
              backgroundPosition: "right 10px center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "12px",
            }}
            onBlur={onBlurSelect}
            onClick={onClickSelect}
          >
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
              ></Button>
            }
            value="Add to Cart"
          />
        </div>
      </form>
    </div>
  );
}
