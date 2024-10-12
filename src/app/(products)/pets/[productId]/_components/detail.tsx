import ProductOverview from "./product-overview";
import ProductImage from "@/app/(products)/_components/image";
import Rating from "@/app/(products)/_components/rating";
import { useContext } from "react";
import { ProductContext } from "./page-content";
import ProductMeta from "@/app/(products)/_components/product-meta";
import PurchaseActions from "@/app/(products)/_components/purchase-actions";
import StoreBenefit from "@/app/(products)/_components/store-benefit";

export default function Detail() {
  const product = useContext(ProductContext);

  if (!product) return null;

  return (
    <div className="mx-auto mb-[40px] mt-[30px] min-w-[320px] rounded-[4px] border border-solid border-light_gray_color_second bg-white large-screen:w-[1160px] small-screen:mb-[30px] small-screen:mt-[15px] small-screen:w-[calc(100%-60px)] smallest-screen:mb-[20px] smallest-screen:mt-[10px] xx-smallest-screen:w-full">
      <div className="mb-[30px] flex text-text_color smallest-screen:flex-col">
        <div className="up-smallest-screen:w-[50%]">
          <ProductImage />

          <ProductMeta
            type="pets"
            category={"dogs"}
            sku={product.id}
            tags={["pets", "dog", "husky"]}
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
