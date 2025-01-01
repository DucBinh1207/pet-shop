import ProductOverview from "./product-overview";
import ProductImage from "@/app/(products)/_components/product-image";
import Rating from "@/app/(products)/_components/rating";
import { useContext } from "react";
import { ProductContext } from "./page-content";
import ProductMeta from "@/app/(products)/_components/product-meta";
import PurchaseActions from "@/app/(products)/_components/purchase-actions";
import StoreBenefit from "@/app/(products)/_components/store-benefit";
import useMutation from "@/hooks/use-mutation";
import { toastError } from "@/utils/toast";
import { AddToCart } from "@/services/api/cart-api";
import { getAuthTokenFromInternalServer } from "@/services/api/internal-auth-api";
import {
  PurchaseDataType,
  ResponseBuyNowApi,
} from "@/types/purchase-data-type";
import { BuyNow } from "@/services/api/order-api";
import { useRouter } from "next/navigation";
import useProductBuyNow, {
  ProductBuyNowType,
} from "@/store/use-product-buy-now";
import { useShallow } from "zustand/react/shallow";
import ToastAddToCart from "@/components/toast-add-to-cart";
import { priceRender } from "@/utils/priceRender";

export default function Detail() {
  const product = useContext(ProductContext);
  const router = useRouter();

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
        const productData: ProductBuyNowType = {
          id: product.id,
          idProduct: product.id,
          productVariantId: product.variationsPets[0].productVariantId,
          category: "pets",
          name: product.name,
          quantity: data.quantity,
          ingredient: "",
          weight: "",
          size: "",
          color: "",
          price: product.variationsPets[0].price,
          image: product.image,
          status: 1,
        };
        setProductBuyNow(productData);
        router.push("/cart/checkout");
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
      const cartData: PurchaseDataType = {
        productVariantId: product.variationsPets[0].productVariantId,
        category: "pets",
        quantity: quantity,
      };
      mutate({ data: cartData });
    }
  };

  const handleBuyNow = async (quantity: number) => {
    const token = await getAuthTokenFromInternalServer();
    if (!token) {
      window.location.href = "/login";
    } else {
      const productData: PurchaseDataType = {
        productVariantId: product.variationsPets[0].productVariantId,
        category: "pets",
        quantity: quantity,
      };
      mutateBuyNow({ data: productData });
    }
  };

  return (
    <div className="mx-auto mb-[40px] mt-[30px] min-w-[320px] rounded-[4px] border border-solid border-light_gray_color_second bg-white large-screen:w-[1160px] small-screen:mb-[30px] small-screen:mt-[15px] small-screen:w-[calc(100%-60px)] smallest-screen:mb-[20px] smallest-screen:mt-[10px] xx-smallest-screen:w-full">
      <div className="mb-[30px] flex text-text_color smallest-screen:flex-col">
        <div className="up-smallest-screen:w-[50%]">
          <ProductImage imageUrl={product.image} />

          <ProductMeta
            category={"Thú cưng"}
            sku={product.id}
            tags={["Thú cưng", "chó"]}
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
              <div className="mt-[25px]">
                <span className="font-quicksand text-[25px] font-bold leading-[1.24] tracking-[-0.02em] text-secondary">
                  {priceRender(product.variationsPets[0].price)}
                </span>
              </div>

              <PurchaseActions
                isOptionChosen={true}
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
