"use client";

import CartIcon from "@/components/common/icons/cart-icon";
import { useRouter } from "next/navigation";
import ProductItem from "./product-item";
import CheckoutForm from "./checkout-form";
import Button from "@/components/common/button";

export default function CartContent() {
  const router = useRouter();

  //Handle fetching order data
  const orderList = new Array(3);
  const orderNum = orderList.length;

  if (orderNum === 0) {
    return (
      <div className="mx-auto mb-[40px] mt-[30px] w-[1160px] min-w-[320px] rounded-[4px] border border-solid border-light_gray_color_second bg-white small-screen:mb-[30px] small-screen:mt-[15px] small-screen:w-[calc(100%-60px)] x-small-screen:mb-[20px] x-small-screen:mt-[10px] xx-x-small-screen:w-full">
        <div className="flex h-full flex-col items-center px-[60px] py-[125px] small-screen:py-[85px]">
          <div>
            <CartIcon size={90} className="fill-current text-primary" />
          </div>
          <h2 className="mt-[35px] max-w-[800px] text-center font-quicksand text-[27px] font-bold leading-[1.27] tracking-[-0.01em] text-primary xxx-x-small-screen:text-[22px]">
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
  }

  return (
    <div className="mx-auto mb-[40px] mt-[30px] w-[1160px] min-w-[320px] rounded-[4px] border border-solid border-light_gray_color_second bg-white small-screen:mb-[30px] small-screen:mt-[15px] small-screen:w-[calc(100%-60px)] x-small-screen:mb-[20px] x-small-screen:mt-[10px] xx-x-small-screen:w-full">
      <div className="flex h-full text-text_color small-screen:items-center small-screen:px-[20px] small-screen:pb-[20px] x-small-screen:flex-col">
        <div className="flex-1 px-[40px] py-[20px] medium-screen:px-[30px]">
          <form action="" className="py-[15px]">
            <table className="w-full medium-screen:block">
              <thead className="medium-screen:block medium-screen:w-full">
                <tr className="text-[13px] uppercase leading-[18px] tracking-[0.02em] medium-screen:flex">
                  <th
                    className="text-left font-normal medium-screen:flex-1"
                    colSpan={2}
                  >
                    sản phẩm
                  </th>
                  <th className="pr-[25px] text-center font-normal medium-screen:hidden">
                    số lượng
                  </th>
                  <th className="text-right font-normal">tổng </th>
                </tr>
              </thead>

              <tbody className="medium-screen:block medium-screen:w-full">
                <ProductItem />

                <tr>
                  <td colSpan={5} className="pt-[25px]">
                    <div className="flex justify-end">
                      <Button
                        type="submit"
                        className="pointer-events-none cursor-not-allowed opacity-20"
                        disabled
                      >
                        Cật nhật giỏ hàng
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>

        <CheckoutForm />
      </div>
    </div>
  );
}
