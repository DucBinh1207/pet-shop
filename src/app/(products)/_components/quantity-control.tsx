import MinusIcon from "@/components/common/icons/minus-icon";
import PlusIcon from "@/components/common/icons/plus-icon";
import Input from "@/components/common/input";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

type props = {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
};

export default function QuantityControl({ quantity = 1, setQuantity }: props) {
  function handleChangeQuantity(e: ChangeEvent<HTMLInputElement>) {
    const productNum = e.target.value.replace(/[^0-9]/g, "");

    if (productNum !== "") {
      const newQuantity = Number(productNum);
      if (newQuantity > 100) {
        setQuantity(100);
      } else setQuantity(newQuantity);
    } else {
      setQuantity(0);
    }
  }

  function handleDecreaseQuantity() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  function handleIncreaseQuantity() {
    if (quantity < 100) setQuantity(quantity + 1);
  }

  function handleBlurQuantity() {
    if (quantity === 0) {
      setQuantity(1);
    }
  }

  return (
    <div className="relative inline-flex h-[50px] flex-nowrap overflow-hidden rounded-[18px] border border-solid border-light_gray_color_second">
      <button
        type="button"
        className="flex w-[32px] items-center justify-end"
        onClick={handleDecreaseQuantity}
      >
        <MinusIcon
          size={12}
          className="fill-current text-primary hover:text-secondary"
        />
      </button>
      <Input
        value={quantity}
        inputSize="quantity"
        variant="quantity"
        type="text"
        onChange={handleChangeQuantity}
        onBlur={handleBlurQuantity}
      />
      <button
        type="button"
        className="flex w-[32px] items-center justify-start"
        onClick={handleIncreaseQuantity}
      >
        <PlusIcon
          size={12}
          className="fill-current text-primary hover:text-secondary"
        />
      </button>
    </div>
  );
}
