"use client";

import BreadCrumb from "@/components/bread-crumb";
import Button from "@/components/common/button";
import CartIcon from "@/components/common/icons/cart-icon";
import useCartItems from "@/hooks/users/useCartItems";
import { useRouter, useSearchParams } from "next/navigation";
import OrderDetail from "./order-detail";

export default function PageContent() {
  const orderId = useSearchParams().get("id_order") ?? "";

  const { cartItems } = useCartItems();

  const router = useRouter();

  if (!orderId) {
    if (cartItems?.length === 0) {
      return (
        <div className="xx-x-small-screen:w-full mx-auto mb-[40px] mt-[30px] w-[1160px] min-w-[320px] rounded-[4px] border border-solid border-light_gray_color_second bg-white small-screen:mb-[30px] small-screen:mt-[15px] small-screen:w-[calc(100%-60px)] x-small-screen:mb-[20px] x-small-screen:mt-[10px]">
          <div className="flex h-full flex-col items-center px-[60px] py-[125px] small-screen:py-[85px]">
            <div>
              <CartIcon size={90} className="fill-current text-primary" />
            </div>
            <h2 className="xxx-x-small-screen:text-[22px] mt-[35px] max-w-[800px] text-center font-quicksand text-[27px] font-bold leading-[1.27] tracking-[-0.01em] text-primary">
              Giỏ hàng của bạn đang trống
            </h2>
            <div className="mt-[45px]">
              <Button
                onClick={() => {
                  router.push("/");
                }}
              >
                Trở về cửa hàng
              </Button>
            </div>
          </div>
        </div>
      );
    } else {
      window.location.href = "/cart";
      return;
    }
  }

  return (
    <>
      <BreadCrumb
        pathLink={["/cart", "/cart/order-success"]}
        pathName={["Giỏ hàng", "Đơn hàng thành công"]}
      />
      <OrderDetail />
    </>
  );
}
