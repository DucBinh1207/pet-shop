"use client";

import CartIcon from "@/components/common/icons/cart-icon";
import DotIcon from "@/components/common/icons/dot-icon";
import StarIcon from "@/components/common/icons/star-icon";
import Image from "next/image";

import Link from "next/link";
import ToolTip from "./common/tooltip";
import Button from "./common/button";
import TruncateToolTip from "./common/truncate-tooltip";
import { useState } from "react";
import { ColorType, ColorTypes } from "@/constants/color-type";
import ColorCheckbox from "./color-checkbox";
import { getAuthTokenFromInternalServer } from "@/services/api/internal-auth-api";

export default function SupplyCard() {
  const [color, setColor] = useState<ColorTypes[]>([ColorType.LIGHT]);
  function handleColorFilter(colorCurrent: ColorTypes) {
    if (!color.includes(colorCurrent)) {
      setColor([colorCurrent]);
    }
  }

  return (
    <div className="border-box flex min-w-[232px] flex-1 transform flex-col border border-solid border-light_gray_color_second bg-white small-screen:min-w-[25%] x-small-screen:min-w-[calc(100%/3)] x-smallest-screen:min-w-[50%]">
      <div className="relative w-full overflow-hidden pb-[85%]">
        <Link href="/supplies/564845321" className="h-full w-full">
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
            value="Khay vệ sinh cho mèo"
          />

          <TruncateToolTip
            spanClass="mb-[10px] line-clamp-4 max-h-[76px] w-full overflow-hidden font-quicksand text-[13px] font-normal capitalize leading-[1.46] tracking-[0.02em] text-text_color"
            value="Khay vệ sinh có nắp giúp giữ mùi hôi và bụi bẩn bên trong, mang lại sự riêng tư cho mèo và dễ dàng cho bạn trong việc vệ sinh."
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
          <Link href="#">Đồ vệ sinh</Link>
          <DotIcon size={3} className="fill-current text-dark_orange_color" />
          <Link href="#">Sophresh</Link>
        </div>
      </div>

      <form className="flex flex-col gap-[12.5px] px-[30px] pb-[30px] pt-[15px]">
        <div className="color">
          <ul
            className="flex flex-wrap gap-[10px]"
            role="radiogroup"
            aria-label="weight"
          >
            <ColorCheckbox
              color={color}
              colorType={ColorType.LIGHT}
              handleColorFilter={handleColorFilter}
            />

            <ColorCheckbox
              color={color}
              colorType={ColorType.DARK}
              handleColorFilter={handleColorFilter}
            />
          </ul>
        </div>

        <div className="relative">
          <select className="relative h-auto w-full rounded-[3px] border border-solid border-input_border_color bg-form_color py-[8px] pl-[9px] pr-[28px] text-[13px] font-medium leading-[16px] tracking-[0.01em] text-primary outline-none">
            <option value="1">Chọn kích cỡ</option>
            <option value="2">Nhỏ</option>
            <option value="3">Vừa</option>
            <option value="4">Lớn</option>
          </select>
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
