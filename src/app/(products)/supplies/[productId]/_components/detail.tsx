import ProductOverview from "./product-overview";
import ProductImage from "@/app/(products)/_components/product-image";
import Rating from "@/app/(products)/_components/rating";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { ProductContext } from "./page-content";
import { ColorTypes } from "@/constants/color-type";
import PurchaseActions from "@/app/(products)/_components/purchase-actions";
import StoreBenefit from "@/app/(products)/_components/store-benefit";
import ProductMeta from "@/app/(products)/_components/product-meta";
import ColorCheckbox from "@/components/color-checkbox";
import { getAuthTokenFromInternalServer } from "@/services/api/internal-auth-api";
import useProductBuyNow, {
  ProductBuyNowType,
} from "@/store/use-product-buy-now";
import { useShallow } from "zustand/react/shallow";
import useMutation from "@/hooks/use-mutation";
import { AddToCart } from "@/services/api/cart-api";
import { toastError } from "@/utils/toast";
import { BuyNow } from "@/services/api/order-api";
import {
  PurchaseDataType,
  ResponseBuyNowApi,
} from "@/types/purchase-data-type";
import { useRouter } from "next/navigation";
import ToastAddToCart from "@/components/toast-add-to-cart";
import { priceRender } from "@/utils/priceRender";

export default function Detail() {
  const product = useContext(ProductContext);
  const router = useRouter();
  const [color, setColor] = useState<ColorTypes[]>([
    product.variationsSupplies[0].color as ColorTypes,
  ]);
  const [size, setSize] = useState("");

  const [colorOption, setColorOption] = useState<string[]>([]);
  const [sizeOption, setSizeOption] = useState<string[]>([]);

  const colorOptionFilter = () => {
    const newColorOption = product.variationsSupplies.reduce<string[]>(
      (acc, supply) => {
        if (supply.color && !acc.includes(supply.color)) {
          acc.push(supply.color);
        }
        return acc;
      },
      [],
    );
    return newColorOption;
  };

  const sizeOptionFilter = () => {
    const newSizeOption = product.variationsSupplies.reduce<string[]>(
      (acc, supply) => {
        if (supply.size && !acc.includes(supply.size)) {
          acc.push(supply.size);
        }
        return acc;
      },
      [],
    );
    return newSizeOption;
  };

  function handleColorFilter(colorCurrent: ColorTypes) {
    if (!color.includes(colorCurrent)) {
      const newSizeOption = product.variationsSupplies.reduce<string[]>(
        (acc, supply) => {
          if (
            supply.size &&
            !acc.includes(supply.size) &&
            supply.color === colorCurrent
          ) {
            acc.push(supply.size);
          }
          return acc;
        },
        [],
      );

      setSizeOption(newSizeOption);
      setColor([colorCurrent]);
      setSize("");
    } else {
      setColor([]);
      setSizeOption(sizeOptionFilter());
    }
  }

  function handleSizeFilter(event: ChangeEvent<HTMLSelectElement>) {
    const sizeSelected = event.target.value;
    if (sizeSelected !== size) {
      const newColorOption = product.variationsSupplies.reduce<string[]>(
        (acc, supply) => {
          if (
            supply.color &&
            !acc.includes(supply.color) &&
            supply.size === sizeSelected
          ) {
            acc.push(supply.color);
          }
          return acc;
        },
        [],
      );

      if (!newColorOption.includes(color[0])) {
        setColor([newColorOption[0] as ColorTypes]);
      }

      setColorOption(newColorOption);
      setSize(sizeSelected);
    } else {
      setSize("");
      setColorOption(colorOptionFilter());
    }
  }

  const colorRender = colorOptionFilter();

  const supply = product.variationsSupplies.find(
    (supply) =>
      size === supply.size && color.includes(supply.color as ColorTypes),
  );

  const { minPrice, maxPrice } = product.variationsSupplies.reduce(
    (num, option) => ({
      minPrice: Math.min(option.price, num.minPrice),
      maxPrice: Math.max(option.price, num.maxPrice),
    }),
    { minPrice: Infinity, maxPrice: -Infinity },
  );

  const { setProductBuyNow } = useProductBuyNow(
    useShallow((state) => ({
      setProductBuyNow: state.setProductBuyNow,
    })),
  );

  const { mutate, isMutating } = useMutation({
    fetcher: AddToCart,
    options: {
      onSuccess: async () => {
        ToastAddToCart();
      },
      onError: (error) => {
        toastError(error.message);
      },
      onFinally: () => {},
    },
  });

  const { mutate: mutateBuyNow, isMutating: isMutatingBuyNow } = useMutation({
    fetcher: BuyNow,
    options: {
      onSuccess: async (data: ResponseBuyNowApi) => {
        if (supply) {
          const productData: ProductBuyNowType = {
            id: product.id,
            idProduct: product.id,
            productVariantId: supply.productVariantId,
            category: "supplies",
            name: product.name,
            quantity: data.quantity,
            ingredient: "",
            weight: "",
            size: supply.size,
            color: supply.color,
            price: supply.price,
            image: product.image,
            status: 1,
          };
          setProductBuyNow(productData);
          router.push("/cart/checkout");
        }
      },
      onError: (error) => {
        toastError(error.message);
      },
      onFinally: () => {},
    },
  });

  const handleAddToCart = async (quantity: number) => {
    const token = await getAuthTokenFromInternalServer();
    if (!token) {
      window.location.href = "/login";
    } else {
      if (supply) {
        const cartData: PurchaseDataType = {
          productVariantId: supply.productVariantId,
          category: "supplies",
          quantity: quantity,
        };
        mutate({ data: cartData });
      }
    }
  };

  const handleBuyNow = async (quantity: number) => {
    const token = await getAuthTokenFromInternalServer();
    if (!token) {
      window.location.href = "/login";
    } else {
      if (supply) {
        const productData: PurchaseDataType = {
          productVariantId: supply.productVariantId,
          category: "supplies",
          quantity: quantity,
        };
        mutateBuyNow({ data: productData });
      }
    }
  };

  useEffect(() => {
    if (product.variationsSupplies) {
      setColorOption(colorOptionFilter());
      setSizeOption(sizeOptionFilter());
    }
  }, []);

  return (
    <div className="mx-auto mb-[40px] mt-[30px] min-w-[320px] rounded-[4px] border border-solid border-light_gray_color_second bg-white large-screen:w-[1160px] small-screen:mb-[30px] small-screen:mt-[15px] small-screen:w-[calc(100%-60px)] smallest-screen:mb-[20px] smallest-screen:mt-[10px] xx-smallest-screen:w-full">
      <div className="mb-[30px] flex text-text_color smallest-screen:flex-col">
        <div className="up-smallest-screen:w-[50%]">
          <ProductImage imageUrl={product.image} />

          <ProductMeta
            category={"Đồ dùng khác"}
            sku={product.id}
            tags={["Đồ dùng khác", "Đồ dùng cho chó và mèo"]}
            brand={product.brand}
          />
        </div>

        <div className="large-screen:px-[50px] large-screen:pt-[30px] between-small-smallest:px-[35px] between-small-smallest:pt-[35px] up-smallest-screen:w-[50%] smallest-screen:mx-[35px] smallest-screen:mt-[20px]">
          <h1 className="mt-[15px] font-quicksand font-bold capitalize leading-[1.15] text-primary large-screen:text-[40px] large-screen:tracking-[-0.02em]">
            {product.name}
          </h1>

          {product.rating && product.rating !== 0 ? (
            <Rating rating={product.rating} review={product.totalReview} />
          ) : (
            <></>
          )}
          <span className="mt-[20px] block text-[12px] font-semibold leading-[1.25] tracking-[0.02em]">
            SKU:&nbsp;<span className="font-normal"> {product.id}</span>
          </span>

          <form action="">
            <div className="flex flex-col">
              {product.variationsSupplies.length && (
                <>
                  <div className="relative mt-[25px] flex flex-col">
                    <label
                      htmlFor="color"
                      className="px-[1px] font-quicksand text-[12px] font-bold leading-[15px] tracking-[-0.02em]"
                    >
                      Màu :
                    </label>

                    <ul
                      className="mt-[15px] flex gap-[15px] text-[14px] leading-[1.23] tracking-[0.02em] text-text_color"
                      role="radiogroup"
                      aria-label="weight"
                      id="color"
                    >
                      {colorRender.map((colorValue, index) => {
                        if (colorOption.includes(colorValue)) {
                          return (
                            <ColorCheckbox
                              key={index}
                              color={color}
                              colorType={colorValue as ColorTypes}
                              handleColorFilter={handleColorFilter}
                            />
                          );
                        } else {
                          return (
                            <ColorCheckbox
                              key={index}
                              color={color}
                              colorType={colorValue as ColorTypes}
                              handleColorFilter={handleColorFilter}
                            />
                          );
                        }
                      })}
                    </ul>
                  </div>

                  <div className="relative flex flex-col">
                    <label
                      htmlFor="size"
                      className="px-[1px] font-quicksand text-[12px] font-bold leading-[15px] tracking-[-0.02em]"
                    >
                      Kích cỡ :
                    </label>
                    <div>
                      <select
                        id="size"
                        className="relative mt-[10px] h-auto rounded-[3px] border border-solid border-input_border_color bg-form_color py-[8px] pl-[9px] pr-[28px] text-[13px] font-medium leading-[16px] tracking-[0.01em] text-primary outline-none"
                        value={size}
                        onChange={handleSizeFilter}
                      >
                        <option value="" hidden disabled>
                          Chọn kích cỡ
                        </option>

                        {sizeOption.map((sizeValue, index) => {
                          return (
                            <option key={index} value={sizeValue}>
                              {sizeValue}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </>
              )}

              <div className="mt-[25px]">
                <span className="font-quicksand text-[25px] font-bold leading-[1.24] tracking-[-0.02em] text-secondary">
                  {supply?.price ? (
                    `${priceRender(supply.price)}đ`
                  ) : (
                    <div className="flex items-center gap-[5px]">
                      {minPrice && <span>{priceRender(minPrice)}đ</span>}
                      {maxPrice && (
                        <>
                          <span> - </span>
                          <span>{priceRender(maxPrice)}đ</span>
                        </>
                      )}
                    </div>
                  )}
                </span>
              </div>

              <PurchaseActions
                isOptionChosen={supply !== undefined}
                isMutating={isMutating}
                isMutatingBuyNow={isMutatingBuyNow}
                handleAddToCart={handleAddToCart}
                handleBuyNow={handleBuyNow}
              />

              <StoreBenefit />
            </div>
          </form>
        </div>
      </div>

      <ProductOverview />
    </div>
  );
}
