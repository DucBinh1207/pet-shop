"use client";

import Button from "@/components/common/button";
import Input from "@/components/common/input";
import { PaymentMethod } from "@/constants/payment-method";
import cn from "@/utils/style/cn";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type PaymentType = (typeof PaymentMethod)[keyof typeof PaymentMethod];

export default function OrderSummary() {
  const [paymentMethod, setPaymentMethod] = useState<PaymentType>(
    PaymentMethod.COD,
  );
  const [isTermChecked, setIsTermChecked] = useState(false);
  const router = useRouter();

  return (
    <div className="flex-0 m-[20px] ml-0 w-[400px] max-w-[100%] down-medium-screen:w-[339px]">
      <div className="rounded-[4px] border border-solid border-primary px-[35px] pb-[30px] pt-[25px] medium-screen:px-[25px] medium-screen:pb-[25px] medium-screen:pt-[20px]">
        <div className="flex flex-col">
          <h2 className="text-[22px] font-medium leading-[1.27] text-primary">
            Đơn hàng của bạn
          </h2>

          <div className="mt-[12px]">
            <table className="w-full">
              <tbody className="w-full medium-screen:block">
                <tr className="mb-[10px] medium-screen:block">
                  <td className="flex flex-col pb-[12px]">
                    <span className="w-full text-[14px] font-normal leading-[1.27] tracking-[0.02em] text-primary">
                      Thức ăn đông lạnh cho chó
                      <strong className="whitespace-nowrap font-normal">
                        ×&nbsp;1
                      </strong>
                    </span>
                    <ul className="font-text mt-[10px] flex gap-[10px] p-0 text-[13px] font-normal leading-[16px] tracking-[0.005em]">
                      <li className="flex items-center whitespace-nowrap">
                        <span className="capitalize">Cân nặng :&nbsp;</span>
                        <span className="capitalize text-primary">5 kg</span>
                      </li>

                      <li className="flex items-center whitespace-nowrap">
                        <span className="capitalize">Nguyên liệu :&nbsp;</span>
                        <span className="capitalize text-primary"> Bò </span>
                      </li>
                    </ul>
                  </td>

                  <td className="whitespace-wrap pb-[12px] text-right text-[17px] font-bold leading-[21px] tracking-[-0.01em] text-primary medium-screen:flex medium-screen:justify-between">
                    100.000.000 VND
                  </td>
                </tr>

                <tr className="mb-[10px] medium-screen:block">
                  <td className="flex flex-col pb-[12px]">
                    <span className="w-full text-[14px] font-normal leading-[1.27] tracking-[0.02em] text-primary">
                      Khay vệ sinh cho mèo
                      <strong className="whitespace-nowrap font-normal">
                        ×&nbsp;1
                      </strong>
                    </span>
                    <ul className="font-text mt-[10px] flex gap-[10px] p-0 text-[13px] font-normal leading-[16px] tracking-[0.005em]">
                      <li className="flex items-center whitespace-nowrap">
                        <span className="capitalize">Color :&nbsp;</span>
                        <span className="capitalize text-primary">Light</span>
                      </li>

                      <li className="flex items-center whitespace-nowrap">
                        <span className="capitalize">Size :&nbsp;</span>
                        <span className="capitalize text-primary"> Lớn </span>
                      </li>
                    </ul>
                  </td>

                  <td className="whitespace-wrap pb-[12px] text-right text-[17px] font-bold leading-[21px] tracking-[-0.01em] text-primary medium-screen:flex medium-screen:justify-between">
                    200.000.000 VND
                  </td>
                </tr>

                <tr className="mb-[10px] medium-screen:block">
                  <td className="flex flex-col pb-[12px]">
                    <span className="w-full text-[14px] font-normal leading-[1.27] tracking-[0.02em] text-primary">
                      Thức ăn đông lạnh cho mèo
                      <strong className="whitespace-nowrap font-normal">
                        ×&nbsp;1
                      </strong>
                    </span>
                    <ul className="font-text mt-[10px] flex gap-[10px] p-0 text-[13px] font-normal leading-[16px] tracking-[0.005em]">
                      <li className="flex items-center whitespace-nowrap">
                        <span className="capitalize">Cân nặng :&nbsp;</span>
                        <span className="capitalize text-primary">10 kg</span>
                      </li>

                      <li className="flex items-center whitespace-nowrap">
                        <span className="capitalize">Nguyên liệu :&nbsp;</span>
                        <span className="capitalize text-primary"> Gà </span>
                      </li>
                    </ul>
                  </td>

                  <td className="whitespace-wrap pb-[12px] text-right text-[17px] font-bold leading-[21px] tracking-[-0.01em] text-primary medium-screen:flex medium-screen:justify-between">
                    500.000.000 VND
                  </td>
                </tr>
              </tbody>

              <tfoot className="w-full medium-screen:block">
                <tr className="medium-screen:flex">
                  <td
                    colSpan={2}
                    className="relative w-full py-[20px] after:absolute after:left-0 after:right-0 after:top-[50%] after:h-[1px] after:bg-light_gray_color_second after:content-['']"
                  />
                </tr>

                <tr className="medium-screen:flex medium-screen:justify-between">
                  <th className="text-left text-[22px] font-medium leading-[1.27] text-primary">
                    Tổng phụ
                  </th>
                  <td className="whitespace-wrap pb-[12px] text-right text-[17px] font-bold leading-[21px] tracking-[-0.01em] text-secondary">
                    1.000.000.000 VND
                  </td>
                </tr>

                <tr className="medium-screen:flex">
                  <td
                    colSpan={2}
                    className="relative w-full py-[20px] after:absolute after:left-0 after:right-0 after:top-[50%] after:h-[1px] after:bg-light_gray_color_second after:content-['']"
                  />
                </tr>

                <tr className="medium-screen:flex medium-screen:justify-between">
                  <th className="text-left text-[22px] font-medium leading-[1.27] text-primary">
                    Vận chuyển
                  </th>
                  <td className="leading-[21px]text-secondary whitespace-nowrap text-right text-[17px] font-bold tracking-[-0.01em] text-secondary">
                    Miễn phí
                  </td>
                </tr>

                <tr className="medium-screen:flex">
                  <td
                    colSpan={2}
                    className="relative w-full py-[20px] after:absolute after:left-0 after:right-0 after:top-[50%] after:h-[1px] after:bg-light_gray_color_second after:content-['']"
                  />
                </tr>

                <tr className="medium-screen:flex medium-screen:justify-between">
                  <th className="text-left text-[22px] font-medium leading-[1.27] text-primary">
                    Tổng
                  </th>
                  <td className="whitespace-wrap text-right text-[24px] font-bold leading-[30px] tracking-[-0.02em] text-secondary">
                    1.000.000.000 VND
                  </td>
                </tr>

                <tr className="medium-screen:flex">
                  <td
                    colSpan={2}
                    className="relative w-full py-[20px] after:absolute after:left-0 after:right-0 after:top-[50%] after:h-[1px] after:bg-light_gray_color_second after:content-['']"
                  />
                </tr>
              </tfoot>
            </table>
          </div>

          <div>
            <h2 className="text-[22px] font-medium leading-[1.27] text-primary">
              Phương thức thanh toán
            </h2>

            <ul>
              <li className="mt-[15px] flex flex-wrap">
                <Input
                  id="cod"
                  type="radio"
                  value={PaymentMethod.COD}
                  inputSize="form_controls"
                  // checked={paymentMethod === PaymentMethod.COD}
                  name="payment_method"
                  className={cn(
                    "relative mr-[14px] cursor-pointer appearance-none rounded-[50%] after:absolute after:left-[50%] after:top-[50%] after:block after:h-[10px] after:w-[10px] after:translate-x-[-50%] after:translate-y-[-50%] after:rounded-[50%] after:bg-primary after:content-['']",
                    {
                      "after:hidden after:opacity-0":
                        paymentMethod !== PaymentMethod.COD,
                    },
                  )}
                  onClick={() => {
                    setPaymentMethod(PaymentMethod.COD);
                  }}
                />
                <label
                  htmlFor="cod"
                  className="flex w-[calc(100%-32px)] flex-1 basis-auto flex-col items-start text-primary"
                >
                  Thanh toán khi nhận hàng
                </label>

                <div
                  className={cn(
                    "mt-[5px] max-h-0 max-w-full flex-1 overflow-hidden pl-[32px] text-[13px] font-normal leading-[18px] tracking-[0.02] transition-max-height duration-300 ease-linear",
                    {
                      "max-h-[150px]": paymentMethod === PaymentMethod.COD,
                    },
                  )}
                >
                  Thanh toán cho bên vận chuyển khi nhận được hàng
                </div>
              </li>

              <li className="mt-[15px] flex flex-wrap">
                <Input
                  id="online"
                  type="radio"
                  value={PaymentMethod.ONLINE}
                  inputSize="form_controls"
                  // checked={paymentMethod === PaymentMethod.ONLINE}
                  name="payment_method"
                  className={cn(
                    "relative mr-[14px] cursor-pointer appearance-none rounded-[50%] after:absolute after:left-[50%] after:top-[50%] after:block after:h-[10px] after:w-[10px] after:translate-x-[-50%] after:translate-y-[-50%] after:rounded-[50%] after:bg-primary after:content-['']",
                    {
                      "after:hidden after:opacity-0":
                        paymentMethod !== PaymentMethod.ONLINE,
                    },
                  )}
                  onClick={() => {
                    setPaymentMethod(PaymentMethod.ONLINE);
                  }}
                />
                <label
                  htmlFor="online"
                  className="flex w-[calc(100%-32px)] flex-1 basis-auto flex-col items-start text-primary"
                >
                  Chuyển khoản online
                </label>

                <div
                  className={cn(
                    "mt-[5px] max-h-0 max-w-full flex-1 overflow-hidden pl-[32px] text-[13px] font-normal leading-[18px] tracking-[0.02] transition-max-height duration-300 ease-linear",
                    {
                      "max-h-[150px]": paymentMethod === PaymentMethod.ONLINE,
                    },
                  )}
                >
                  <p>
                    Hãy chuyển khoản trực tiếp vào tài khoản ngân hàng của chúng
                    tôi. Vui lòng sử dụng mã đơn hàng của bạn làm tham chiếu
                    thanh toán. Đơn hàng của bạn sẽ không được giao cho đến khi
                    số tiền đã được xác nhận trong tài khoản của chúng tôi.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-[10px]">
            <div className="flex flex-col">
              <div className="mt-[20px]">
                <p>
                  Dữ liệu cá nhân của bạn sẽ được sử dụng để xử lý đơn hàng của
                  bạn, hỗ trợ trải nghiệm của bạn trên toàn bộ trang web này, và
                  cho các mục đích khác được mô tả trong
                  <Link
                    href="/privacy-policy"
                    className="underline decoration-light_gray_color_second hover:text-secondary"
                    target="_blank"
                  >
                    &nbsp;chính sách bảo mật&nbsp;
                  </Link>
                  của chúng tôi.
                </p>
              </div>

              <div className="mt-[27px]">
                <label htmlFor="term" className="cursor-pointer">
                  <Input
                    type="checkbox"
                    id="term"
                    inputSize="form_controls"
                    className={cn(
                      "relative mr-[7px] cursor-pointer appearance-none rounded-[3px] align-middle after:absolute after:bottom-[1px] after:left-[1px] after:right-[1px] after:top-0",
                      {
                        "after:bg-checked": isTermChecked,
                      },
                    )}
                    name="terms"
                    value="1"
                    onClick={() => {
                      setIsTermChecked(!isTermChecked);
                    }}
                  />
                  <span className="text-[14px] leading-[1.5] tracking-[0.02em] text-text_color">
                    Tôi đã đọc và đồng ý với các
                    <Link
                      href="/refund"
                      className="underline decoration-light_gray_color_second hover:text-secondary"
                      target="_blank"
                    >
                      &nbsp;điều khoản và điều kiện&nbsp;
                    </Link>
                    của trang web.
                  </span>
                  &nbsp;*
                </label>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            variant="secondary"
            size="xsm"
            className="mt-[37px] text-[13px] font-bold leading-[16px] tracking-wider"
            onClick={() => {
              router.push("/cart/order-success");
            }}
          >
            Đặt hàng
          </Button>
        </div>
      </div>
    </div>
  );
}
