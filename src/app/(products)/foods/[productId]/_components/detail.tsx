import ProductOverview from "./product-overview";
import ProductImage from "@/app/(products)/_components/product-image";
import Rating from "@/app/(products)/_components/rating";
import { useContext, useState } from "react";
import { ProductContext } from "./page-content";
import IngredientCheckbox from "./ingredient-checkbox";
import { IngredientType, IngredientTypes } from "@/constants/ingredient-type";
import StoreBenefit from "@/app/(products)/_components/store-benefit";
import PurchaseActions from "@/app/(products)/_components/purchase-actions";
import ProductMeta from "@/app/(products)/_components/product-meta";
import WeightCheckbox from "@/components/weight-checkbox";

export default function Detail() {
  const product = useContext(ProductContext);
  const [ingredient, setIngredient] = useState<IngredientTypes>(
    IngredientType.BEEF,
  );

  return (
    <div className="mx-auto mb-[40px] mt-[30px] min-w-[320px] rounded-[4px] border border-solid border-light_gray_color_second bg-white large-screen:w-[1160px] small-screen:mb-[30px] small-screen:mt-[15px] small-screen:w-[calc(100%-60px)] smallest-screen:mb-[20px] smallest-screen:mt-[10px] xx-smallest-screen:w-full">
      <div className="mb-[30px] flex text-text_color smallest-screen:flex-col">
        <div className="up-smallest-screen:w-[50%]">
          <ProductImage />

          <ProductMeta
            type="foods"
            category={"dry-food"}
            sku={product.id}
            tags={["foods", "dog", "cat"]}
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
                  <WeightCheckbox weight="1kg" />
                  <WeightCheckbox weight="5kg" />
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
