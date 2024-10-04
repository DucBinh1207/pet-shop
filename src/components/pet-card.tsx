"use client";

import CartIcon from "@/components/common/icons/cart-icon";
import DotIcon from "@/components/common/icons/dot-icon";
import StarIcon from "@/components/common/icons/star-icon";
import Image from "next/image";

import Link from "next/link";
import ToolTip from "./common/tooltip";
import Button from "./common/button";
import { useLayoutEffect, useRef, useState } from "react";

export default function PetCard() {
  const nameRef = useRef<HTMLSpanElement>(null);
  const descriptionRef = useRef<HTMLSpanElement>(null);
  const [isShowNameTooltip, setIsShowNameTooltip] = useState(false);
  const [isShowDescriptionTooltip, setIsShowDescriptionTooltip] =
    useState(false);

  useLayoutEffect(() => {
    if (nameRef.current) {
      setIsShowNameTooltip(
        nameRef.current.clientHeight < nameRef.current.scrollHeight,
      );
    }

    if (descriptionRef.current) {
      setIsShowDescriptionTooltip(
        descriptionRef.current.clientHeight <
          descriptionRef.current.scrollHeight,
      );
    }
  }, []);

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
          <ToolTip
            element={
              <span
                className="mb-[10px] line-clamp-2 max-h-[46px] w-full overflow-hidden font-quicksand text-[17px] font-bold capitalize leading-[1.35] tracking-[-0.01em] text-primary"
                ref={nameRef}
              >
                True Acre Foods Grain
              </span>
            }
            value="True Acre Foods Grain"
            isShowToolTip={isShowNameTooltip}
          />

          <ToolTip
            element={
              <span
                className="mb-[10px] line-clamp-4 max-h-[76px] w-full overflow-hidden font-quicksand text-[13px] font-normal capitalize leading-[1.46] tracking-[0.02em] text-text_color"
                ref={descriptionRef}
              >
                Bring some grain-free goodness to your pup’s bowl.
              </span>
            }
            value="Bring some grain-free goodness to your pup’s bowl."
            isShowToolTip={isShowDescriptionTooltip}
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
