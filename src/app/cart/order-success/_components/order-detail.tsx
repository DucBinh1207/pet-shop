"use client";

import Loading from "@/app/loading";
import CartIcon from "@/components/common/icons/cart-icon";
import useOrderDetail from "@/hooks/products/userOrderDetail";
import formatDate from "@/utils/convert-date";
import { useSearchParams } from "next/navigation";
import SuccessOrderItem from "./success-order-item";

export default function OrderDetail() {
  const orderId = useSearchParams().get("id_order") ?? "";

  const { order, isLoading, isError } = useOrderDetail({ orderId });

  if (isError) window.location.href = "/error";

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="mx-auto mb-[40px] mt-[30px] w-[1160px] min-w-[320px] rounded-[4px] border border-solid border-light_gray_color_second bg-white small-screen:mb-[30px] small-screen:mt-[15px] small-screen:w-[calc(100%-60px)] smallest-screen:mb-[20px] smallest-screen:mt-[10px] xx-smallest-screen:w-full">
        <div className="flex flex-col px-[45px] py-[65px] text-[13px] font-normal leading-[1] tracking-[0.02em] text-text_color">
          <div className="flex flex-col items-center">
            <CartIcon
              size={60}
              className="fill-current text-dark_orange_color"
            />
            <h2 className="mt-[25px] text-center font-quicksand text-[32px] font-bold leading-[1.125] tracking-[-0.015em] text-primary down-medium-screen:text-[26px] smallest-screen:text-[26px]">
              Cảm ơn bạn. Đơn hàng của bạn đã được tiếp nhận.
            </h2>
          </div>

          <ul className="mt-[50px] flex justify-between text-left smallest-screen:flex-wrap xxx-smallest-screen:flex-col">
            <li className="mb-[35px] flex-1 smallest-screen:min-w-[50%] smallest-screen:max-w-[100%] xxx-smallest-screen:w-full">
              <span className="block pb-[15px] pr-[15px] uppercase">
                Mã đơn hàng :
              </span>
              <span className="mt-[20px] block pr-[15px] text-[15px] tracking-[0.01em] text-primary">
                {order?.id}
              </span>
            </li>

            <li className="mb-[35px] flex-1 smallest-screen:min-w-[50%] smallest-screen:max-w-[100%] xxx-smallest-screen:w-full">
              <span className="block pb-[15px] pr-[15px] uppercase">
                Ngày :
              </span>
              <span className="mt-[20px] block pr-[15px] text-[15px] tracking-[0.01em] text-primary">
                {order && formatDate(order?.dateCreated)}
              </span>
            </li>

            <li className="mb-[35px] flex-1 smallest-screen:min-w-[50%] smallest-screen:max-w-[100%] xxx-smallest-screen:w-full">
              <span className="block pb-[15px] pr-[15px] uppercase">
                Phương thức thanh toán:
              </span>
              <span className="mt-[20px] block pr-[15px] text-[15px] tracking-[0.01em] text-primary">
                {order?.paymentMethod}
              </span>
            </li>

            <li className="mb-[35px] up-smallest-screen:shrink-[1] up-smallest-screen:text-right smallest-screen:min-w-[50%] smallest-screen:max-w-[100%] xxx-smallest-screen:w-full">
              <span className="block pb-[15px] pr-[15px] uppercase">
                Tổng :
              </span>
              <span className="mt-[20px] block pr-[15px] text-[15px] tracking-[0.01em] text-primary">
                {order?.totalPrice}
              </span>
            </li>
          </ul>

          <div className="mx-auto max-w-[530px]">
            <div className="mb-[45px] mt-[30px] flex flex-col">
              <h2 className="mb-[35px] text-[22px] font-medium leading-[28px] text-primary">
                Chi tiết đơn hàng
              </h2>

              <table className="xxx-smallest-screen:block">
                <thead className="xxx-smallest-screen:hidden">
                  <tr className="uppercase xxx-smallest-screen:flex">
                    <th className="w-[70%] border-b border-solid border-light_gray_color_second pb-[15px] text-left text-[13px] font-normal leading-[1]">
                      sản phẩm
                    </th>
                    <th className="border-b border-solid border-light_gray_color_second pb-[15px] text-right text-[13px] font-normal leading-[1]">
                      tổng
                    </th>
                  </tr>
                </thead>

                <tbody className="xxx-smallest-screen:block">
                  {order?.orderItems && (
                    <>
                      {order.orderItems.map((orderItem, id) => {
                        return (
                          <SuccessOrderItem key={id} product={orderItem} />
                        );
                      })}
                    </>
                  )}
                </tbody>

                <tfoot className="xxx-smallest-screen:block">
                  <tr className="uppercase xxx-smallest-screen:flex">
                    <th className="w-[70%] border-b border-solid border-light_gray_color_second text-left text-[13px] font-normal leading-[1]">
                      Tổng phụ :
                    </th>

                    <td className="w-auto border-b border-solid border-light_gray_color_second py-[15px] text-right text-[17px] font-bold leading-[1] tracking-[0.01em] text-primary">
                      <span>{order?.subtotalPrice}đ</span>
                    </td>
                  </tr>

                  <tr className="uppercase xxx-smallest-screen:flex">
                    <th className="w-[70%] border-b border-solid border-light_gray_color_second text-left text-[13px] font-normal leading-[1]">
                      Vận chuyện :
                    </th>

                    <td className="w-[30%] border-b border-solid border-light_gray_color_second py-[15px] text-right text-[17px] font-bold leading-[1] tracking-[0.01em] text-primary">
                      <span>{order?.shippingPrice}đ</span>
                    </td>
                  </tr>

                  <tr className="xxx-smallest-screen:block">
                    <th className="w-[70%] border-b border-solid border-light_gray_color_second text-left text-[13px] font-normal uppercase leading-[1]">
                      Phương thức thanh toán :
                    </th>
                    <td className="border-b border-solid border-light_gray_color_second py-[15px] text-right text-[15px] font-normal leading-[1.5] tracking-[0.01em] text-primary">
                      {order?.paymentMethod}
                    </td>
                  </tr>

                  <tr className="xxx-smallest-screen:block">
                    <th className="w-[70%] border-b border-solid border-light_gray_color_second text-left text-[13px] font-normal uppercase leading-[1]">
                      Tổng :
                    </th>
                    <td className="border-b border-solid border-light_gray_color_second py-[15px] text-right font-quicksand text-[24px] font-bold leading-[23px] tracking-[-0.02em] text-secondary">
                      <span> {order?.totalPrice}đ</span>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div className="mb-[40px] flex flex-wrap">
              <div className="flex w-[220px] flex-col">
                <h2 className="mb-[35px] text-[22px] font-medium leading-[28px] text-primary">
                  Chi tiết hóa đơn
                </h2>
                <ul className="flex flex-col">
                  <li>{order?.name}</li>
                  <li>{order?.telephoneNumber}</li>
                  <li>{order?.email}</li>
                </ul>
              </div>

              <div className="flex w-[220px] flex-col">
                <h2 className="mb-[35px] text-[22px] font-medium leading-[28px] text-primary">
                  Địa chỉ
                </h2>
                <ul className="flex flex-col">
                  <li>{order?.province}</li>
                  <li>{order?.district}</li>
                  <li>{order?.ward}</li>
                  <li>{order?.street}</li>
                </ul>
              </div>
            </div>

            <div>
              <p>
                <i className="font-bold">Ghi chú</i> : {order?.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
