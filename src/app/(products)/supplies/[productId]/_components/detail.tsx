import ProductOverview from "./product-overview";
import ProductImage from "@/app/(products)/_components/product-image";
import Rating from "@/app/(products)/_components/rating";
import { useContext, useState } from "react";
import { ProductContext } from "./page-content";
import { ColorType, ColorTypes } from "@/constants/color-type";
import PurchaseActions from "@/app/(products)/_components/purchase-actions";
import StoreBenefit from "@/app/(products)/_components/store-benefit";
import ProductMeta from "@/app/(products)/_components/product-meta";
import ColorCheckbox from "@/components/color-checkbox";

export default function Detail() {
  const product = useContext(ProductContext);
  const [color, setColor] = useState<ColorTypes>(ColorType.LIGHT);
  function handleColorFilter(colorCurrent: ColorTypes) {
    setColor(colorCurrent);
  }

  return (
    <div className="mx-auto mb-[40px] mt-[30px] min-w-[320px] rounded-[4px] border border-solid border-light_gray_color_second bg-white large-screen:w-[1160px] small-screen:mb-[30px] small-screen:mt-[15px] small-screen:w-[calc(100%-60px)] smallest-screen:mb-[20px] smallest-screen:mt-[10px] xx-smallest-screen:w-full">
      <div className="mb-[30px] flex text-text_color smallest-screen:flex-col">
        <div className="up-smallest-screen:w-[50%]">
          <ProductImage />

          <ProductMeta
            type="supplies"
            category={"hygiene"}
            sku={product.id}
            tags={["supplies", "cat"]}
            brand={product.brand}
          />
        </div>

        <div className="large-screen:px-[50px] large-screen:pt-[30px] between-small-smallest:px-[35px] between-small-smallest:pt-[35px] up-smallest-screen:w-[50%] smallest-screen:mx-[35px] smallest-screen:mt-[20px]">
          <h1 className="mt-[15px] font-quicksand font-bold capitalize leading-[1.15] text-primary large-screen:text-[40px] large-screen:tracking-[-0.02em]">
            {product.name}
          </h1>

          <Rating />

          <span className="mt-[20px] block text-[12px] font-semibold leading-[1.25] tracking-[0.02em]">
            SKU:&nbsp;<span className="font-normal"> {product.id}</span>
          </span>

          <form action="">
            <div className="flex flex-col">
              <div className="relative mt-[25px] flex flex-col">
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

              <div className="relative mt-[25px] flex flex-col">
                <label
                  htmlFor="size"
                  className="px-[1px] font-quicksand text-[12px] font-bold leading-[15px] tracking-[-0.02em]"
                >
                  Color :
                </label>

                <ul className="mt-[15px] flex gap-[15px] text-[14px] leading-[1.23] tracking-[0.02em] text-text_color">
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

              <div className="mt-[25px]">
                <span className="font-quicksand text-[25px] font-bold leading-[1.24] tracking-[-0.02em] text-secondary">
                  {product.price}
                </span>
              </div>

              <PurchaseActions />

              <StoreBenefit />
            </div>
          </form>
        </div>
      </div>

      <ProductOverview />
    </div>
  );
}
