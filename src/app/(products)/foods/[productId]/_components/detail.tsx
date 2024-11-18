import ProductOverview from "./product-overview";
import ProductImage from "@/app/(products)/_components/product-image";
import Rating from "@/app/(products)/_components/rating";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "./page-content";
import { IngredientTypes } from "@/constants/ingredient-type";
import StoreBenefit from "@/app/(products)/_components/store-benefit";
import PurchaseActions from "@/app/(products)/_components/purchase-actions";
import ProductMeta from "@/app/(products)/_components/product-meta";
import WeightCheckbox from "@/components/weight-checkbox";
import IngredientCheckbox from "@/components/ingredient-checkbox";

export default function Detail() {
  const product = useContext(ProductContext);
  const [weight, setWeight] = useState([product.variationsFoods[0].weight]);
  const [ingredient, setIngredient] = useState<IngredientTypes[]>([
    product.variationsFoods[0].ingredient as IngredientTypes,
  ]);

  const [weightOption, setWeightOption] = useState<string[]>([]);
  const [ingredientOption, setIngredientOption] = useState<string[]>([]);

  const weightOptionFilter = () => {
    const newWeightOption = product.variationsFoods.reduce<string[]>(
      (acc, food) => {
        if (food.weight && !acc.includes(food.weight)) {
          acc.push(food.weight);
        }
        return acc;
      },
      [],
    );
    return newWeightOption;
  };

  const ingredientOptionFilter = () => {
    const newIngredientOption = product.variationsFoods.reduce<string[]>(
      (acc, food) => {
        if (food.ingredient && !acc.includes(food.ingredient)) {
          acc.push(food.ingredient);
        }
        return acc;
      },
      [],
    );
    return newIngredientOption;
  };

  function handleWeightFilter(weightCurrent: string) {
    if (!weight.includes(weightCurrent)) {
      const newIngredientOption = product.variationsFoods.reduce<string[]>(
        (acc, food) => {
          if (
            food.ingredient &&
            !acc.includes(food.ingredient) &&
            food.weight === weightCurrent
          ) {
            acc.push(food.ingredient);
          }
          return acc;
        },
        [],
      );

      if (!newIngredientOption.includes(ingredient[0])) {
        setIngredient([newIngredientOption[0] as IngredientTypes]);
      }

      setIngredientOption(newIngredientOption);
      setWeight([weightCurrent]);
    } else {
      setWeight([]);
      setIngredientOption(ingredientOptionFilter());
    }
  }

  function handleIngredientFilter(ingredientCurrent: IngredientTypes) {
    if (!ingredient.includes(ingredientCurrent)) {
      const newWeightOption = product.variationsFoods.reduce<string[]>(
        (acc, food) => {
          if (
            food.weight &&
            !acc.includes(food.weight) &&
            food.ingredient === ingredientCurrent
          ) {
            acc.push(food.weight);
          }
          return acc;
        },
        [],
      );

      if (!newWeightOption.includes(weight[0])) {
        setWeight([newWeightOption[0]]);
      }

      setWeightOption(newWeightOption);
      setIngredient([ingredientCurrent]);
    } else {
      setIngredient([]);
      setWeightOption(weightOptionFilter());
    }
  }

  const weightRender = weightOptionFilter();
  const ingredientRender = ingredientOptionFilter();

  const food = product.variationsFoods.find(
    (food) =>
      ingredient.includes(food.ingredient as IngredientTypes) &&
      weight.includes(food.weight as IngredientTypes),
  );

  const { minPrice, maxPrice } = product.variationsFoods.reduce(
    (num, option) => ({
      minPrice: Math.min(option.price, num.minPrice),
      maxPrice: Math.max(option.price, num.maxPrice),
    }),
    { minPrice: Infinity, maxPrice: -Infinity },
  );

  useEffect(() => {
    if (product.variationsFoods) {
      setWeightOption(weightOptionFilter());
      setIngredientOption(ingredientOptionFilter());
    }
  }, []);

  return (
    <div className="mx-auto mb-[40px] mt-[30px] min-w-[320px] rounded-[4px] border border-solid border-light_gray_color_second bg-white large-screen:w-[1160px] small-screen:mb-[30px] small-screen:mt-[15px] small-screen:w-[calc(100%-60px)] smallest-screen:mb-[20px] smallest-screen:mt-[10px] xx-smallest-screen:w-full">
      <div className="mb-[30px] flex text-text_color smallest-screen:flex-col">
        <div className="up-smallest-screen:w-[50%]">
          <ProductImage imageUrl={product.image} />

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
                {product.variationsFoods.length && (
                  <>
                    <div>
                      <label
                        htmlFor="weight"
                        className="px-[1px] font-quicksand text-[12px] font-bold leading-[15px] tracking-[-0.02em]"
                      >
                        Cân nặng :
                      </label>

                      <ul
                        className="flex flex-wrap"
                        role="radiogroup"
                        aria-label="color"
                      >
                        {weightRender.map((weightValue, index) => {
                          if (weightOption.includes(weightValue)) {
                            return (
                              <WeightCheckbox
                                key={index}
                                weight={weight}
                                weightValue={weightValue}
                                isAvailable={true}
                                handleWeightFilter={handleWeightFilter}
                              />
                            );
                          } else {
                            return (
                              <WeightCheckbox
                                key={index}
                                weight={weight}
                                isAvailable={false}
                                weightValue={weightValue}
                              />
                            );
                          }
                        })}
                      </ul>
                    </div>

                    <div className="relative mt-[15px] flex flex-col">
                      <label
                        htmlFor="ingredients"
                        className="px-[1px] font-quicksand text-[12px] font-bold leading-[15px] tracking-[-0.02em]"
                      >
                        Nguyên liệu :
                      </label>

                      <ul className="ml-[5px] mt-[15px] flex gap-[10px] text-[14px] leading-[1.23] tracking-[0.02em] text-text_color">
                        {ingredientRender.map((ingredientValue, index) => {
                          if (ingredientOption.includes(ingredientValue)) {
                            return (
                              <IngredientCheckbox
                                key={index}
                                ingredient={ingredient}
                                ingredientType={
                                  ingredientValue as IngredientTypes
                                }
                                isAvailable={true}
                                handleIngredientFilter={handleIngredientFilter}
                              />
                            );
                          } else {
                            return (
                              <IngredientCheckbox
                                key={index}
                                ingredient={ingredient}
                                isAvailable={false}
                                ingredientType={
                                  ingredientValue as IngredientTypes
                                }
                              />
                            );
                          }
                        })}
                      </ul>
                    </div>
                  </>
                )}
              </div>

              <div className="mt-[25px]">
                <span className="font-quicksand text-[25px] font-bold leading-[1.24] tracking-[-0.02em] text-secondary">
                  {food?.price ? (
                    `${food?.price}đ`
                  ) : (
                    <div className="flex items-center gap-[5px]">
                      {minPrice && <span>{minPrice}đ</span>}
                      {maxPrice && minPrice !== maxPrice && (
                        <>
                          <span> - </span>
                          <span>{maxPrice}đ</span>
                        </>
                      )}
                    </div>
                  )}
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
