"use client";

import CartIcon from "@/components/common/icons/cart-icon";
import DotIcon from "@/components/common/icons/dot-icon";
import StarIcon from "@/components/common/icons/star-icon";
import Image from "next/image";
import Link from "next/link";
import ToolTip from "./common/tooltip";
import Button from "./common/button";
import TruncateToolTip from "./common/truncate-tooltip";
import { getAuthTokenFromInternalServer } from "@/services/api/internal-auth-api";
import { PetType } from "@/types/pet";
import { MouseEvent } from "react";
import useMutation from "@/hooks/use-mutation";
import { toastError } from "@/utils/toast";
import { AddToCard } from "@/services/api/cart-api";
import { AddToCartData } from "@/types/cart-item";
import ToastAddToCart from "./toast-add-to-cart";

type props = {
  data: PetType;
};

export default function PetCard({ data }: props) {
  const { mutate, isMutating } = useMutation({
    fetcher: AddToCard,
    options: {
      onSuccess: async () => {
        ToastAddToCart();
      },
      onError: (error) => {
        toastError(error.message);
      },
      onFinally: () => {},
    },
  });

  const handleAddToCart = async (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
  ) => {
    e.preventDefault();
    const token = await getAuthTokenFromInternalServer();
    if (!token) {
      window.location.href = "/login";
    } else {
      const cartData: AddToCartData = {
        productVariantId: data.variationsPets[0].productVariantId,
        category: "pets",
        quantity: 1,
      };
      mutate({ data: cartData });
    }
  };

  return (
    <div className="border-box flex min-w-[232px] flex-1 transform flex-col border border-solid border-light_gray_color_second bg-white small-screen:min-w-[25%] x-small-screen:min-w-[calc(100%/3)] x-smallest-screen:min-w-[50%]">
      <div className="relative w-full overflow-hidden pb-[85%]">
        <Link href={`/pets/${data.id}`} className="h-full w-full">
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
            value={data.description}
          />

          {data.rating && (
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
          )}
        </div>
        <div className="mt-[15px] flex flex-wrap items-center gap-[5px] text-[13px] font-normal leading-[16px] tracking-[0.02em] text-primary">
          <Link href="#">Husky</Link>
          <DotIcon size={3} className="fill-current text-dark_orange_color" />
          <Link href="#">Chó</Link>
        </div>
      </div>

      <form className="flex flex-col gap-[12.5px] px-[30px] pb-[30px] pt-[15px]">
        <div className="flex items-center justify-between xxx-smallest-screen:flex-col xxx-smallest-screen:gap-[10px]">
          <span className="pr-[5px] font-quicksand font-bold leading-[1] tracking-[-0.02em] text-secondary up-smallest-screen:text-[18px]">
            {data.variationsPets[0].price} VND
          </span>
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
        </div>
      </form>
    </div>
  );
}
