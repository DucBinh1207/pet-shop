"use client";

import CartIcon from "@/components/common/icons/cart-icon";
import DotIcon from "@/components/common/icons/dot-icon";
import StarIcon from "@/components/common/icons/star-icon";
import Image from "next/image";
import Link from "next/link";
import ToolTip from "./common/tooltip";
import Button from "./common/button";
import TruncateToolTip from "./common/truncate-tooltip";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import { ColorTypes } from "@/constants/color-type";
import ColorCheckbox from "./color-checkbox";
import { getAuthTokenFromInternalServer } from "@/services/api/internal-auth-api";
import { SupplyType } from "@/types/supply";
import useMutation from "@/hooks/use-mutation";
import { toastError } from "@/utils/toast";
import { AddToCart } from "@/services/api/cart-api";
import ToastAddToCart from "./toast-add-to-cart";
import { PurchaseDataType } from "@/types/purchase-data-type";
import useCartTrigger from "@/store/use-cart-trigger";
import { useShallow } from "zustand/react/shallow";

type props = {
  data: SupplyType;
};

export default function SupplyCard({ data }: props) {
  const [color, setColor] = useState<ColorTypes[]>([
    data.variationsSupplies[0].color as ColorTypes,
  ]);
  const [size, setSize] = useState("");

  const [colorOption, setColorOption] = useState<string[]>([]);
  const [sizeOption, setSizeOption] = useState<string[]>([]);

  const colorOptionFilter = () => {
    const newColorOption = data.variationsSupplies.reduce<string[]>(
      (acc, supply) => {
        if (supply.color && !acc.includes(supply.color)) {
          acc.push(supply.color);
        }
        return acc;
      },
      [],
    );
    return newColorOption;
  };

  const sizeOptionFilter = () => {
    const newSizeOption = data.variationsSupplies.reduce<string[]>(
      (acc, supply) => {
        if (supply.size && !acc.includes(supply.size)) {
          acc.push(supply.size);
        }
        return acc;
      },
      [],
    );
    return newSizeOption;
  };

  function handleColorFilter(colorCurrent: ColorTypes) {
    if (!color.includes(colorCurrent)) {
      const newSizeOption = data.variationsSupplies.reduce<string[]>(
        (acc, supply) => {
          if (
            supply.size &&
            !acc.includes(supply.size) &&
            supply.color === colorCurrent
          ) {
            acc.push(supply.size);
          }
          return acc;
        },
        [],
      );

      setSizeOption(newSizeOption);
      setColor([colorCurrent]);
      setSize("");
    } else {
      setColor([]);
      setSizeOption(sizeOptionFilter());
    }
  }

  function handleSizeFilter(event: ChangeEvent<HTMLSelectElement>) {
    const sizeSelected = event.target.value;
    if (sizeSelected !== size) {
      const newColorOption = data.variationsSupplies.reduce<string[]>(
        (acc, supply) => {
          if (
            supply.color &&
            !acc.includes(supply.color) &&
            supply.size === sizeSelected
          ) {
            acc.push(supply.color);
          }
          return acc;
        },
        [],
      );

      if (!newColorOption.includes(color[0])) {
        setColor([newColorOption[0] as ColorTypes]);
      }

      setColorOption(newColorOption);
      setSize(sizeSelected);
    } else {
      setSize("");
      setColorOption(colorOptionFilter());
    }
  }

   const { increaseTriggerNumber } = useCartTrigger(
     useShallow((state) => ({
       increaseTriggerNumber: state.increaseTriggerNumber,
     })),
   );

  const { mutate, isMutating } = useMutation({
    fetcher: AddToCart,
    options: {
      onSuccess: async () => {
        ToastAddToCart();
        increaseTriggerNumber()
      },
      onError: (error) => {
        toastError(error.message);
      },
      onFinally: () => {},
    },
  });

  const colorRender = colorOptionFilter();

  const supply = data.variationsSupplies.find(
    (supply) =>
      size === supply.size && color.includes(supply.color as ColorTypes),
  );

  const { minPrice, maxPrice } = data.variationsSupplies.reduce(
    (num, option) => ({
      minPrice: Math.min(option.price, num.minPrice),
      maxPrice: Math.max(option.price, num.maxPrice),
    }),
    { minPrice: Infinity, maxPrice: -Infinity },
  );

  const handleAddToCart = async (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault();
    const token = await getAuthTokenFromInternalServer();
    if (!token) {
      window.location.href = "/login";
    } else {
      if (supply) {
        const cartData: PurchaseDataType = {
          productVariantId: supply.productVariantId,
          category: "supplies",
          quantity: 1,
        };
        mutate({ data: cartData });
      }
    }
  };

  useEffect(() => {
    if (data.variationsSupplies) {
      setColorOption(colorOptionFilter());
      setSizeOption(sizeOptionFilter());
    }
  }, []);

  return (
    <div className="border-box flex min-w-[232px] flex-1 transform flex-col border border-solid border-light_gray_color_second bg-white small-screen:min-w-[25%] x-small-screen:min-w-[calc(100%/3)] x-smallest-screen:min-w-[50%]">
      <div className="relative w-full overflow-hidden pb-[85%]">
        <Link href={`/supplies/${data.id}`} className="h-full w-full">
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
            value="Khay vệ sinh cho mèo"
          />

          <TruncateToolTip
            spanClass="mb-[10px] line-clamp-4 max-h-[76px] w-full overflow-hidden font-quicksand text-[13px] font-normal capitalize leading-[1.46] tracking-[0.02em] text-text_color"
            value="Khay vệ sinh có nắp giúp giữ mùi hôi và bụi bẩn bên trong, mang lại sự riêng tư cho mèo và dễ dàng cho bạn trong việc vệ sinh."
          />

          {data.rating && data.rating !== 0 ? (
            <span className="flex gap-[2px]">
              {[...Array(Math.floor(data.rating))].map((_, index) => (
                <StarIcon
                  size={12}
                  className="fill-current text-dark_yellow_color"
                  key={index}
                />
              ))}

              <StarIcon
                size={12}
                className="fill-current text-dark_yellow_color"
                percentage={data.rating - Math.floor(data.rating)}
              />
            </span>
          ) : (
            <></>
          )}
        </div>
        <div className="mt-[15px] flex flex-wrap items-center gap-[5px] text-[13px] font-normal leading-[16px] tracking-[0.02em] text-primary">
          <Link href="#">Đồ vệ sinh</Link>
          <DotIcon size={3} className="fill-current text-dark_orange_color" />
          <Link href="#">Sophresh</Link>
        </div>
      </div>

      <form className="flex flex-col gap-[12.5px] px-[30px] pb-[30px] pt-[15px]">
        {data.variationsSupplies.length && (
          <>
            <div className="color">
              <ul
                className="flex flex-wrap gap-[10px]"
                role="radiogroup"
                aria-label="weight"
              >
                {colorRender.map((colorValue, index) => {
                  if (colorOption.includes(colorValue)) {
                    return (
                      <ColorCheckbox
                        key={index}
                        color={color}
                        colorType={colorValue as ColorTypes}
                        handleColorFilter={handleColorFilter}
                      />
                    );
                  } else {
                    return (
                      <ColorCheckbox
                        key={index}
                        color={color}
                        colorType={colorValue as ColorTypes}
                        handleColorFilter={handleColorFilter}
                      />
                    );
                  }
                })}
              </ul>
            </div>

            <div className="relative">
              <select
                className="relative h-auto w-full rounded-[3px] border border-solid border-input_border_color bg-form_color py-[8px] pl-[9px] pr-[28px] text-[13px] font-medium leading-[16px] tracking-[0.01em] text-primary outline-none"
                value={size}
                onChange={handleSizeFilter}
              >
                <option value="" hidden disabled>
                  Chọn kích cỡ
                </option>

                {sizeOption.map((sizeValue, index) => {
                  return (
                    <option key={index} value={sizeValue}>
                      {sizeValue}
                    </option>
                  );
                })}
              </select>
            </div>
          </>
        )}

        <div className="flex items-center justify-between xxx-smallest-screen:flex-col xxx-smallest-screen:gap-[10px]">
          <span className="pr-[5px] font-quicksand font-bold leading-[1] tracking-[-0.02em] text-secondary up-smallest-screen:text-[18px]">
            {supply?.price ? (
              `${supply?.price}đ`
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
          {size === "" || color.length === 0 ? (
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
            <>
              {!isMutating ? (
                <ToolTip
                  element={
                    <Button
                      size="circle_lg"
                      variant="primary"
                      startIcon={<CartIcon size={16} />}
                      onClick={handleAddToCart}
                    />
                  }
                  value="Thêm vào giỏ hàng"
                />
              ) : (
                <div className="hover_animate inline-block cursor-pointer rounded-[25px] border-[2px] border-solid border-primary bg-primary p-[12px] text-center uppercase text-primary outline-none hover:bg-primary hover:text-white">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-t-2 border-transparent border-t-white"></div>
                </div>
              )}
            </>
          )}
        </div>
      </form>
    </div>
  );
}
