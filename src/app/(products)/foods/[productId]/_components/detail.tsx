import Button from "@/components/common/button";
import CarIcon from "@/components/common/icons/car-icon";
import CartIcon from "@/components/common/icons/cart-icon";
import CheckIcon from "@/components/common/icons/check-icon";
import MinusIcon from "@/components/common/icons/minus-icon";
import PlusIcon from "@/components/common/icons/plus-icon";
import Input from "@/components/common/input";
import Link from "next/link";
import ProductOverview from "./product-overview";
import ProductImage from "@/app/(products)/_components/image";
import Rating from "@/app/(products)/_components/rating";
import { useContext, useState } from "react";
import { ProductContext } from "./page-content";
import cn from "@/utils/style/cn";
import IngredientCheckbox from "./ingredient-checkbox";
import { IngredientType, IngredientTypes } from "@/constants/ingredient-type";

export default function Detail() {
  const product = useContext(ProductContext);
  const [ingredient, setIngredient] = useState<IngredientTypes>(
    IngredientType.BEEF,
  );

  if (!product) return null;

  return (
    <div className="mx-auto mb-[40px] mt-[30px] min-w-[320px] rounded-[4px] border border-solid border-light_gray_color_second bg-white large-screen:w-[1160px] small-screen:mb-[30px] small-screen:mt-[15px] small-screen:w-[calc(100%-60px)] smallest-screen:mb-[20px] smallest-screen:mt-[10px] xx-smallest-screen:w-full">
      <div className="mb-[30px] flex text-text_color smallest-screen:flex-col">
        <div className="up-smallest-screen:w-[50%]">
          <ProductImage />

          <ul className="mt-[25px] columns-2 gap-x-[30px] space-y-[10px] text-[12px] font-semibold leading-[1.25] tracking-[0.02em] large-screen:ml-[45px] between-small-smallest:ml-[35px] smallest-screen:mx-[35px]">
            <li>
              SKU:&nbsp;<span className="font-normal">F1141410</span>
            </li>
            <li>
              Category:&nbsp;
              <span className="font-normal text-primary">
                <Link href="/pets" className="hover:text-secondary">
                  Dog
                </Link>
              </span>
            </li>
            <li>
              Tags:&nbsp;
              <span className="font-normal text-primary">
                <Link href="/pets" className="hover:text-secondary">
                  Dog
                </Link>
                ,&nbsp;
                <Link href="/pets" className="hover:text-secondary">
                  Husky
                </Link>
              </span>
            </li>
            <li>
              Brand:&nbsp;
              <span className="font-normal text-text_color">
                {product.brand}
              </span>
            </li>
          </ul>
        </div>

        <div className="large-screen:px-[50px] large-screen:pt-[30px] between-small-smallest:px-[35px] between-small-smallest:pt-[35px] up-smallest-screen:w-[50%] smallest-screen:mx-[35px] smallest-screen:mt-[20px]">
          <h1 className="mt-[15px] font-quicksand font-bold capitalize leading-[1.15] text-primary large-screen:text-[40px] large-screen:tracking-[-0.02em]">
            {product.name}
          </h1>

          <Rating />

          <span className="mt-[20px] block text-[12px] font-semibold leading-[1.25] tracking-[0.02em]">
            SKU:&nbsp;<span className="font-normal">F1141410</span>
          </span>

          <form action="">
            <div className="flex flex-col">
              <div className="mt-[25px]">
                <label
                  htmlFor="weight"
                  className="px-[1px] font-quicksand text-[12px] font-bold leading-[15px] tracking-[-0.02em]"
                >
                  Weight :
                </label>

                <ul
                  id="weight"
                  className="mt-[10px] flex flex-wrap"
                  role="radiogroup"
                  aria-label="color"
                >
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

              <div className="relative mt-[15px] flex flex-col">
                <label
                  htmlFor="ingredients"
                  className="px-[1px] font-quicksand text-[12px] font-bold leading-[15px] tracking-[-0.02em]"
                >
                  Ingredients :
                </label>
                <div>
                  <ul className="ml-[5px] mt-[15px] flex gap-[10px] text-[14px] leading-[1.23] tracking-[0.02em] text-text_color">
                    <IngredientCheckbox
                      ingredient={ingredient}
                      ingredientType={IngredientType.BEEF}
                      handleIngredientFilter={setIngredient}
                    />

                    <IngredientCheckbox
                      ingredient={ingredient}
                      ingredientType={IngredientType.CHICKEN}
                      handleIngredientFilter={setIngredient}
                    />
                  </ul>
                </div>
              </div>

              <div className="relative mt-[15px] flex flex-col">
                <label
                  htmlFor="size"
                  className="px-[1px] font-quicksand text-[12px] font-bold leading-[15px] tracking-[-0.02em]"
                >
                  Size :
                </label>
                <div>
                  <select
                    id="size"
                    className="relative mt-[10px] h-auto rounded-[3px] border border-solid border-input_border_color bg-form_color py-[8px] pl-[9px] pr-[28px] text-[13px] font-medium leading-[16px] tracking-[0.01em] text-primary outline-none"
                  >
                    <option value="1">Choose your size</option>
                    <option value="2">Small</option>
                    <option value="3">Medium</option>
                    <option value="4">Big</option>
                  </select>
                </div>
              </div>

              <div className="mt-[25px]">
                <span className="font-quicksand text-[25px] font-bold leading-[1.24] tracking-[-0.02em] text-secondary">
                  50.000.000 VND
                </span>
              </div>

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
                      startIcon={
                        <CartIcon size={12} className="fill-current" />
                      }
                    >
                      Add to cart
                    </Button>
                  </div>

                  <Button
                    className="mt-[10px] h-[50px] gap-[10px] text-center"
                    size="lg"
                  >
                    Buy Now
                  </Button>
                </div>
              </div>

              <div className="flex">
                <ul className="mt-[25px] inline-flex flex-col rounded-[4px] border border-dashed border-light_gray_color_second bg-background_color py-[8px]">
                  <li className="mx-[20px] my-[8px] flex gap-[15px] text-center text-primary">
                    <CarIcon
                      size={24}
                      className="fill-current text-dark_orange_color"
                    />
                    <span className="min-w-[100px] font-quicksand text-[14px] font-semibold leading-[1.4] tracking-[-0.02em]">
                      Miễn phí vẫn chuyển cho đơn có giá trị hơn 5 triệu đồng
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-[20px]">
                <ul className="columns-2 space-y-[5px] text-[14px] font-normal leading-[1.5] tracking-[0.02em]">
                  <li className="flex items-center gap-[10px]">
                    <CheckIcon
                      size={13}
                      className="fill-current text-dark_orange_color"
                    />
                    Hỗ trợ hoàn tiền
                  </li>
                  <li className="flex items-center gap-[10px]">
                    <CheckIcon
                      size={13}
                      className="fill-current text-dark_orange_color"
                    />
                    Sản phẩm chất lượng
                  </li>
                  <li className="flex items-center gap-[10px]">
                    <CheckIcon
                      size={13}
                      className="fill-current text-dark_orange_color"
                    />
                    Giao hàng nhanh chóng
                  </li>
                  <li className="flex items-center gap-[10px]">
                    <CheckIcon
                      size={13}
                      className="fill-current text-dark_orange_color"
                    />
                    Hỗ trợ 24/7
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>

      <ProductOverview />
    </div>
  );
}
