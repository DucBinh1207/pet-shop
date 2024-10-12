import Button from "@/components/common/button";
import CartIcon from "@/components/common/icons/cart-icon";
import MinusIcon from "@/components/common/icons/minus-icon";
import PlusIcon from "@/components/common/icons/plus-icon";
import Input from "@/components/common/input";

export default function PurchaseActions() {
  return (
    <div className="mt-[20px] inline-flex">
      <div className="flex flex-col">
        <div className="flex gap-[20px]">
          <div className="relative inline-flex h-[50px] flex-nowrap overflow-hidden rounded-[18px] border border-solid border-light_gray_color_second">
            <button
              type="button"
              className="flex w-[32px] items-center justify-end"
            >
              <MinusIcon
                size={12}
                className="fill-current text-primary hover:text-secondary"
              />
            </button>
            <Input
              inputSize="quantity"
              variant="quantity"
              type="number"
              value={1}
            />
            <button
              type="button"
              className="flex w-[32px] items-center justify-start"
            >
              <PlusIcon
                size={12}
                className="fill-current text-primary hover:text-secondary"
              />
            </button>
          </div>

          <Button
            className="flex h-[50px] items-center gap-[10px]"
            variant="secondary"
            size="lg"
            startIcon={<CartIcon size={12} className="fill-current" />}
          >
            Add to cart
          </Button>
        </div>

        <Button className="mt-[10px] h-[50px] gap-[10px] text-center" size="lg">
          Buy Now
        </Button>
      </div>
    </div>
  );
}
