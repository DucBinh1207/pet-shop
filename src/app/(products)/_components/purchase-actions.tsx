import Button from "@/components/common/button";
import CartIcon from "@/components/common/icons/cart-icon";
import QuantityControl from "@/app/(products)/_components/quantity-control";
import { useState } from "react";

type props = {
  isOptionChosen: boolean;
  isMutating: boolean;
  isMutatingBuyNow: boolean;
  handleAddToCart: (quantity: number) => void;
  handleBuyNow: (quantity: number) => void;
};

export default function PurchaseActions({
  isOptionChosen,
  isMutating,
  isMutatingBuyNow,
  handleAddToCart,
  handleBuyNow,
}: props) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="mt-[20px] inline-flex">
      <div className="flex flex-col">
        <div className="flex gap-[20px]">
          <QuantityControl quantity={quantity} setQuantity={setQuantity} />
          {isMutating ? (
            <div className="hover_animate flex h-[50px] cursor-pointer items-center gap-[10px] rounded-[25px] border-[2px] border-solid border-primary bg-primary px-[34px] py-[15.5px] text-center text-[12px] font-bold uppercase leading-[15px] tracking-[0.03em] text-white outline-none">
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-t-2 border-transparent border-t-white"></div>
              Thêm vào giỏ hàng
            </div>
          ) : (
            <>
              {isOptionChosen ? (
                <Button
                  type="button"
                  className="flex h-[50px] items-center gap-[10px]"
                  variant="secondary"
                  size="lg"
                  startIcon={<CartIcon size={12} className="fill-current" />}
                  onClick={() => handleAddToCart(quantity)}
                >
                  Thêm vào giỏ hàng
                </Button>
              ) : (
                <div className="hover_animate flex h-[50px] cursor-pointer items-center gap-[10px] rounded-[25px] border-[2px] border-solid border-primary bg-primary px-[34px] py-[15.5px] text-center text-[12px] font-bold uppercase leading-[15px] tracking-[0.03em] text-white opacity-30 outline-none">
                  <CartIcon size={12} className="fill-current" />
                  Thêm vào giỏ hàng
                </div>
              )}
            </>
          )}
        </div>

        {isMutatingBuyNow ? (
          <div className="hover_animate mt-[10px] flex h-[50px] cursor-pointer justify-center gap-[10px] rounded-[25px] border-[2px] border-solid border-primary bg-white px-[34px] py-[15.5px] text-center text-[12px] font-bold uppercase leading-[15px] tracking-[0.03em] text-primary outline-none">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-t-2 border-transparent border-t-primary"></div>
            Mua ngay
          </div>
        ) : (
          <>
            {isOptionChosen ? (
              <Button
                type="button"
                className="mt-[10px] h-[50px] gap-[10px] text-center"
                size="lg"
                onClick={() => {
                  handleBuyNow(quantity);
                }}
              >
                Mua ngay
              </Button>
            ) : (
              <>
                <div className="hover_animate mt-[10px] flex h-[50px] cursor-pointer justify-center gap-[10px] rounded-[25px] border-[2px] border-solid border-primary bg-white px-[34px] py-[15.5px] text-center text-[12px] font-bold uppercase leading-[15px] tracking-[0.03em] text-primary opacity-30 outline-none">
                  Mua ngay
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
