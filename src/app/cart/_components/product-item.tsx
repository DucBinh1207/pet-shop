import CancelIcon from "@/components/common/icons/cancel-icon";
import MinusIcon from "@/components/common/icons/minus-icon";
import PlusIcon from "@/components/common/icons/plus-icon";
import Button from "@/components/common/button";
import Input from "@/components/common/input";
import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, Dispatch, SetStateAction, useContext } from "react";
import { CartItemType } from "@/types/cart-item";
import { cartItemData } from "./list-item";
import cn from "@/utils/style/cn";
import { priceRender } from "@/utils/priceRender";
import { DeleteCartItemContext } from "./cart-content";

type props = {
  product: CartItemType;
  listItem: cartItemData[];
  setData: Dispatch<SetStateAction<cartItemData[]>>;
  isMutating: boolean;
};

export default function ProductItem({
  product,
  listItem,
  setData,
  isMutating,
}: props) {
  const { mutateDelete, isMutatingDelete } = useContext(DeleteCartItemContext);

  const quantity = listItem.find(
    (item) => item.productVariantId === product.productVariantId,
  )?.quantity;

  const setProductQuantity = (newQuantity: number) => {
    let newData = [...listItem];
    newData = newData.map((item) => {
      if (item.productVariantId === product.productVariantId) {
        return { ...item, quantity: newQuantity };
      } else return item;
    });

    setData(newData);
  };

  function handleChangeQuantity(e: ChangeEvent<HTMLInputElement>) {
    const productNum = e.target.value.replace(/[^0-9]/g, "");

    if (productNum !== "") {
      const newQuantity = Number(productNum);
      if (newQuantity > 100) {
        setProductQuantity(100);
      } else setProductQuantity(newQuantity);
    } else {
      setProductQuantity(0);
    }
  }

  function handleDecreaseQuantity() {
    if (quantity && quantity > 1) setProductQuantity(quantity - 1);
  }

  function handleIncreaseQuantity() {
    if (quantity && quantity < 100) setProductQuantity(quantity - 1);
    if (quantity) setProductQuantity(quantity + 1);
  }

  function handleBlurQuantity() {
    if (quantity === 0) {
      setProductQuantity(1);
    }
  }

  function handleDeleteCartItem() {
    mutateDelete(product.id);
  }

  return (
    <tr
      className={cn(
        "medium-screen:item-center group medium-screen:relative medium-screen:mb-[15px] medium-screen:flex medium-screen:w-full medium-screen:flex-wrap medium-screen:border-b medium-screen:border-solid medium-screen:border-light_gray_color_second medium-screen:pb-[20px] medium-screen:pl-[90px]",
        { "opacity-25": isMutating },
      )}
    >
      <td className="relative w-[90px] border-b border-solid border-light_gray_color_second py-[20px] pr-[20px] medium-screen:absolute medium-screen:left-0 medium-screen:top-0 medium-screen:h-full medium-screen:w-[70px] medium-screen:border-b-0 medium-screen:p-0">
        <div className="before:absolute before:bottom-0 before:left-[-40px] before:top-0 before:block before:w-[40px] before:content-[''] up-medium-screen:before:left-[-40px] medium-screen:before:content-none">
          <Button
            type="button"
            size="none"
            variant="none"
            className="hover_animate absolute left-[-25px] z-10 inline-flex translate-y-[-50%] opacity-0 hover:scale-150 group-hover:visible group-hover:opacity-100 up-medium-screen:top-[50%] medium-screen:bottom-[20px] medium-screen:left-[50%] medium-screen:translate-x-[-50%]"
            startIcon={
              <CancelIcon
                size={15}
                className="fill-current text-primary opacity-100"
              />
            }
            onClick={handleDeleteCartItem}
          />
        </div>
        <Link
          href={`/${product.category}/${product.idProduct}`}
          className="relative block h-[75px] w-[90px] medium-screen:h-[60px] medium-screen:w-[70px]"
        >
          <Image src={product.image} fill alt="dog food" />
        </Link>
      </td>

      <td className="border-b border-solid border-light_gray_color_second py-[20px] pr-[20px] up-medium-screen:w-[75%] medium-screen:mb-[20px] medium-screen:block medium-screen:w-full medium-screen:flex-1 medium-screen:basis-auto medium-screen:border-b-0 medium-screen:p-0">
        <div className="flex flex-col pr-[35px] text-[13px] font-normal leading-[16px] tracking-[0.005em] text-text_color">
          <Link
            href={`/${product.category}/${product.idProduct}`}
            className="hover_animate font-quicksand text-[16px] font-bold leading-[20px] tracking-[0.005em] text-primary hover:text-secondary"
          >
            {product.name}
          </Link>

          <span className="mt-[10px]">Thẻ : {product.category}</span>

          <ul className="mt-[10px] flex gap-[10px] small-screen:flex-col">
            {product.ingredient && (
              <li className="">
                <span className="capitalize">Nguyên liệu :&nbsp;</span>
                <span className="capitalize text-primary">
                  {product.ingredient}
                </span>
              </li>
            )}

            {product.size && (
              <li className="">
                <span className="capitalize">Kích cỡ :&nbsp;</span>
                <span className="capitalize text-primary">{product.size}</span>
              </li>
            )}

            {product.color && (
              <li className="">
                <span className="capitalize">Màu :&nbsp;</span>
                <span className="capitalize text-primary">{product.color}</span>
              </li>
            )}

            {product.weight && (
              <li className="">
                <span className="capitalize">Cân nặng :&nbsp;</span>
                <span className="capitalize text-primary">
                  {product.weight}
                </span>
              </li>
            )}
          </ul>

          <span className="mt-[10px] text-[14px] leading-[18px] tracking-[0.02em]">
            {priceRender(product.price)}đ
          </span>
        </div>
      </td>

      <td className="border-b border-solid border-light_gray_color_second py-[20px] pr-[20px] medium-screen:block medium-screen:border-b-0 medium-screen:p-0">
        {isMutating || isMutatingDelete ? (
          <div className="relative mb-[10px] mr-[5px] inline-flex h-[36px] flex-nowrap overflow-hidden rounded-[18px] border border-solid border-light_gray_color_second">
            <button
              type="button"
              className="flex w-[32px] items-center justify-end"
              disabled
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
              className="pointer-events-none"
            />
            <button
              type="button"
              className="flex w-[32px] items-center justify-start"
              disabled
            >
              <PlusIcon
                size={12}
                className="fill-current text-primary hover:text-secondary"
              />
            </button>
          </div>
        ) : (
          <div className="relative mb-[10px] mr-[5px] inline-flex h-[36px] flex-nowrap overflow-hidden rounded-[18px] border border-solid border-light_gray_color_second">
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
        )}
      </td>

      <td className="border-b border-solid border-light_gray_color_second py-[20px] text-right medium-screen:block medium-screen:flex-1 medium-screen:basis-auto medium-screen:border-b-0 medium-screen:p-0">
        <span className="flex h-full items-center justify-end text-[17px] font-bold leading-[21px] tracking-[-0.01em] text-primary">
          {quantity ? priceRender(product.price * quantity) + "đ" : ""}
        </span>
      </td>
    </tr>
  );
}
