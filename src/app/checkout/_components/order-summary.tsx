"use client";

import Button from "@/components/common/button";
import Input from "@/components/common/input";
import { Payment_Method } from "@/constants/payment-method";
import cn from "@/utils/style/cn";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type PaymentType = (typeof Payment_Method)[keyof typeof Payment_Method];

export default function OrderSummary() {
  const [paymentMethod, setPaymentMethod] = useState<PaymentType>(
    Payment_Method.COD,
  );
  const [isTermChecked, setIsTermChecked] = useState(false);
  const router = useRouter();

  return (
    <div className="flex-0 m-[20px] ml-0 w-[400px] max-w-[100%] down-medium-screen:w-[339px]">
      <div className="rounded-[4px] border border-solid border-primary px-[35px] pb-[30px] pt-[25px] medium-screen:px-[25px] medium-screen:pb-[25px] medium-screen:pt-[20px]">
        <div className="flex flex-col">
          <h2 className="text-[22px] font-medium leading-[1.27] text-primary">
            Your order
          </h2>

          <div className="mt-[12px]">
            <table className="w-full">
              <tbody className="w-full medium-screen:block">
                <tr className="mb-[10px] medium-screen:block">
                  <td className="flex flex-col pb-[12px]">
                    <span className="w-full text-[14px] font-normal leading-[1.27] tracking-[0.02em] text-primary">
                      True Acre Foods Grain
                      <strong className="whitespace-nowrap font-normal">
                        ×&nbsp;1
                      </strong>
                    </span>
                    <ul className="font-text mt-[10px] flex gap-[10px] p-0 text-[13px] font-normal leading-[16px] tracking-[0.005em]">
                      <li className="flex items-center whitespace-nowrap">
                        <span className="capitalize">Weight :&nbsp;</span>
                        <span className="capitalize text-primary">8lbs</span>
                      </li>

                      <li className="flex items-center whitespace-nowrap">
                        <span className="capitalize">Color :&nbsp;</span>
                        <span className="capitalize text-primary">blue</span>
                      </li>

                      <li className="flex items-center whitespace-nowrap">
                        <span className="capitalize">Size :&nbsp;</span>
                        <span className="capitalize text-primary"> big </span>
                      </li>
                    </ul>
                  </td>

                  <td className="whitespace-nowrap pb-[12px] text-right text-[17px] font-bold leading-[21px] tracking-[-0.01em] text-primary medium-screen:flex medium-screen:justify-between">
                    <div className="hidden font-medium medium-screen:block">
                      Subtotal
                    </div>
                    <div>
                      100
                      <span className="text-[22px] text-primary">&#8363;</span>
                    </div>
                  </td>
                </tr>

                <tr className="mb-[10px] medium-screen:block">
                  <td className="flex flex-col pb-[12px]">
                    <span className="w-full text-[14px] font-normal leading-[1.27] tracking-[0.02em] text-primary">
                      True Acre Foods Grain
                      <strong className="whitespace-nowrap font-normal">
                        ×&nbsp;1
                      </strong>
                    </span>
                    <ul className="font-text mt-[10px] flex gap-[10px] p-0 text-[13px] font-normal leading-[16px] tracking-[0.005em]">
                      <li className="flex items-center whitespace-nowrap">
                        <span className="capitalize">Weight :&nbsp;</span>
                        <span className="capitalize text-primary">8lbs</span>
                      </li>

                      <li className="flex items-center whitespace-nowrap">
                        <span className="capitalize">Color :&nbsp;</span>
                        <span className="capitalize text-primary">blue</span>
                      </li>

                      <li className="flex items-center whitespace-nowrap">
                        <span className="capitalize">Size :&nbsp;</span>
                        <span className="capitalize text-primary"> big </span>
                      </li>
                    </ul>
                  </td>

                  <td className="whitespace-nowrap pb-[12px] text-right text-[17px] font-bold leading-[21px] tracking-[-0.01em] text-primary medium-screen:flex medium-screen:justify-between">
                    <div className="hidden font-medium medium-screen:block">
                      Subtotal
                    </div>
                    <div>
                      100
                      <span className="text-[22px] text-primary">&#8363;</span>
                    </div>
                  </td>
                </tr>

                <tr className="mb-[10px] medium-screen:block">
                  <td className="flex flex-col pb-[12px]">
                    <span className="w-full text-[14px] font-normal leading-[1.27] tracking-[0.02em] text-primary">
                      True Acre Foods Grain
                      <strong className="whitespace-nowrap font-normal">
                        ×&nbsp;1
                      </strong>
                    </span>
                    <ul className="font-text mt-[10px] flex gap-[10px] p-0 text-[13px] font-normal leading-[16px] tracking-[0.005em]">
                      <li className="flex items-center whitespace-nowrap">
                        <span className="capitalize">Weight :&nbsp;</span>
                        <span className="capitalize text-primary">8lbs</span>
                      </li>

                      <li className="flex items-center whitespace-nowrap">
                        <span className="capitalize">Color :&nbsp;</span>
                        <span className="capitalize text-primary">blue</span>
                      </li>

                      <li className="flex items-center whitespace-nowrap">
                        <span className="capitalize">Size :&nbsp;</span>
                        <span className="capitalize text-primary"> big </span>
                      </li>
                    </ul>
                  </td>

                  <td className="whitespace-nowrap pb-[12px] text-right text-[17px] font-bold leading-[21px] tracking-[-0.01em] text-primary medium-screen:flex medium-screen:justify-between">
                    <div className="hidden font-medium medium-screen:block">
                      Subtotal
                    </div>
                    <div>
                      100
                      <span className="text-[22px] text-primary">&#8363;</span>
                    </div>
                  </td>
                </tr>
              </tbody>

              <tfoot className="w-full medium-screen:block">
                <tr className="medium-screen:flex">
                  <td
                    colSpan={2}
                    className="relative w-full py-[20px] after:absolute after:left-0 after:right-0 after:top-[50%] after:h-[1px] after:bg-light_gray_color_second after:content-['']"
                  ></td>
                </tr>

                <tr className="medium-screen:flex medium-screen:justify-between">
                  <th className="text-left text-[22px] font-medium leading-[1.27] text-primary">
                    Subtotal
                  </th>
                  <td className="whitespace-nowrap pb-[12px] text-right text-[17px] font-bold leading-[21px] tracking-[-0.01em] text-secondary">
                    300
                    <span className="text-[22px] text-secondary">&#8363;</span>
                  </td>
                </tr>

                <tr className="medium-screen:flex">
                  <td
                    colSpan={2}
                    className="relative w-full py-[20px] after:absolute after:left-0 after:right-0 after:top-[50%] after:h-[1px] after:bg-light_gray_color_second after:content-['']"
                  ></td>
                </tr>

                <tr className="medium-screen:flex medium-screen:justify-between">
                  <th className="text-left text-[22px] font-medium leading-[1.27] text-primary">
                    Shipping
                  </th>
                  <td className="leading-[21px]text-secondary whitespace-nowrap text-right text-[17px] font-bold tracking-[-0.01em] text-secondary">
                    50
                    <span className="text-[22px] text-secondary">&#8363;</span>
                  </td>
                </tr>

                <tr className="medium-screen:flex">
                  <td
                    colSpan={2}
                    className="relative w-full py-[20px] after:absolute after:left-0 after:right-0 after:top-[50%] after:h-[1px] after:bg-light_gray_color_second after:content-['']"
                  ></td>
                </tr>

                <tr className="medium-screen:flex medium-screen:justify-between">
                  <th className="w-[50%] text-left text-[22px] font-medium leading-[1.27] text-primary">
                    Total
                  </th>
                  <td className="w-[50%] whitespace-nowrap text-right text-[24px] font-bold leading-[30px] tracking-[-0.02em] text-secondary">
                    350
                    <span className="text-[26px] text-secondary">&#8363;</span>
                  </td>
                </tr>

                <tr className="medium-screen:flex">
                  <td
                    colSpan={2}
                    className="relative w-full py-[20px] after:absolute after:left-0 after:right-0 after:top-[50%] after:h-[1px] after:bg-light_gray_color_second after:content-['']"
                  ></td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div>
            <h2 className="text-[22px] font-medium leading-[1.27] text-primary">
              Payment Method
            </h2>

            <ul>
              <li className="mt-[15px] flex flex-wrap">
                <Input
                  id="cod"
                  type="radio"
                  value={Payment_Method.COD}
                  inputSize="form_controls"
                  checked={paymentMethod === Payment_Method.COD}
                  name="payment_method"
                  className={cn(
                    "relative mr-[14px] cursor-pointer appearance-none rounded-[50%] after:absolute after:left-[50%] after:top-[50%] after:block after:h-[10px] after:w-[10px] after:translate-x-[-50%] after:translate-y-[-50%] after:rounded-[50%] after:bg-primary after:content-['']",
                    {
                      "after:hidden after:opacity-0":
                        paymentMethod !== Payment_Method.COD,
                    },
                  )}
                  onClick={() => {
                    setPaymentMethod(Payment_Method.COD);
                  }}
                />
                <label
                  htmlFor="cod"
                  className="flex w-[calc(100%-32px)] flex-1 basis-auto flex-col items-start text-primary"
                >
                  Cash on delivery
                </label>

                <div
                  className={cn(
                    "mt-[5px] max-h-0 max-w-full flex-1 overflow-hidden pl-[32px] text-[13px] font-normal leading-[18px] tracking-[0.02] transition-max-height duration-300 ease-linear",
                    {
                      "max-h-[150px]": paymentMethod === Payment_Method.COD,
                    },
                  )}
                >
                  Pay with cash upon delivery.
                </div>
              </li>

              <li className="mt-[15px] flex flex-wrap">
                <Input
                  id="online"
                  type="radio"
                  value={Payment_Method.ONLINE}
                  inputSize="form_controls"
                  checked={paymentMethod === Payment_Method.ONLINE}
                  name="payment_method"
                  className={cn(
                    "relative mr-[14px] cursor-pointer appearance-none rounded-[50%] after:absolute after:left-[50%] after:top-[50%] after:block after:h-[10px] after:w-[10px] after:translate-x-[-50%] after:translate-y-[-50%] after:rounded-[50%] after:bg-primary after:content-['']",
                    {
                      "after:hidden after:opacity-0":
                        paymentMethod !== Payment_Method.ONLINE,
                    },
                  )}
                  onClick={() => {
                    setPaymentMethod(Payment_Method.ONLINE);
                  }}
                />
                <label
                  htmlFor="online"
                  className="flex w-[calc(100%-32px)] flex-1 basis-auto flex-col items-start text-primary"
                >
                  Direct bank transfer
                </label>

                <div
                  className={cn(
                    "mt-[5px] max-h-0 max-w-full flex-1 overflow-hidden pl-[32px] text-[13px] font-normal leading-[18px] tracking-[0.02] transition-max-height duration-300 ease-linear",
                    {
                      "max-h-[50px]": paymentMethod === Payment_Method.ONLINE,
                    },
                  )}
                >
                  <p>
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-[10px]">
            <div className="flex flex-col">
              <div className="mt-[20px]">
                <p>
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our{" "}
                  <Link
                    href="/privacy-policy"
                    className="underline decoration-light_gray_color_second hover:text-secondary"
                    target="_blank"
                  >
                    privacy policy
                  </Link>
                  .
                </p>
              </div>

              <div className="mt-[27px]">
                <label htmlFor="term" className="cursor-pointer">
                  <Input
                    type="checkbox"
                    id="term"
                    inputSize="form_controls"
                    className={cn(
                      "relative mr-[7px] appearance-none rounded-[3px] align-middle after:absolute after:bottom-[1px] after:left-[1px] after:right-[1px] after:top-0",
                      {
                        "after:bg-term_checked": isTermChecked,
                      },
                    )}
                    name="terms"
                    value="1"
                    onClick={() => {
                      setIsTermChecked(!isTermChecked);
                    }}
                  />
                  <span className="text-[14px] leading-[1.5] tracking-[0.02em] text-text_color">
                    I have read and agree to the website
                    <Link
                      href="/refund"
                      className="rounded-[3px]"
                      target="_blank"
                    >
                      terms and conditions
                    </Link>
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
              router.push("/order-success");
            }}
          >
            Place Order
          </Button>
        </div>
      </div>
    </div>
  );
}
