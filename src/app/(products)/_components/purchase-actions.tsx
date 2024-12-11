import Button from "@/components/common/button";
import CartIcon from "@/components/common/icons/cart-icon";
import QuantityControl from "@/app/(products)/_components/quantity-control";
import { useState } from "react";

type props = {
  isMutating: boolean;
  handleAddToCart: (quantity: number) => void;
};

export default function PurchaseActions({
  isMutating,
  handleAddToCart,
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
          )}
        </div>

        <Button
          type="button"
          className="mt-[10px] h-[50px] gap-[10px] text-center"
          size="lg"
          onClick={() => handleAddToCart(quantity)}
        >
          Mua ngay
        </Button>
      </div>
    </div>
  );
}
