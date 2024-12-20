"use client";

import Button from "@/components/common/button";
import AngleIcon from "@/components/common/icons/angle-icon";
import Input from "@/components/common/input";
import { PaymentMethod, PaymentType } from "@/constants/payment-method";
import useCartItems from "@/hooks/users/useCartItems";
import { applyCoupon } from "@/services/api/cart-api";
import useCoupon from "@/store/use-coupon";
import { CouponType } from "@/types/coupon";
import { shippingPrice } from "@/utils/shipping-price";
import cn from "@/utils/style/cn";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
import OrderItem from "./order-item";
import { priceRender } from "@/utils/priceRender";
import { UseFormRegister } from "react-hook-form";
import { BillFormType } from "./bill-details";
import useProductBuyNow from "@/store/use-product-buy-now";
import { useShallow } from "zustand/react/shallow";

type props = {
  register: UseFormRegister<BillFormType>;
};

export default function OrderSummary({ register }: props) {
  const [paymentMethod, setPaymentMethod] = useState<PaymentType>(
    PaymentMethod.COD,
  );
  const [isTermChecked, setIsTermChecked] = useState(false);
  const [isCouponOpen, setIsCouponOpen] = useState(false);
  const {
    coupon: couponValue,
    setCoupon: setCouponValue,
    clearCoupon,
  } = useCoupon(
    useShallow((state) => ({
      coupon: state.coupon,
      setCoupon: state.setCoupon,
      clearCoupon: state.clearCoupon,
    })),
  );

  const { cartItems } = useCartItems();

  const { productBuyNow, clearProductBuyNow } = useProductBuyNow(
    useShallow((state) => ({
      productBuyNow: state.productBuyNow,
      clearProductBuyNow: state.clearProductBuyNow,
    })),
  );

  const [coupon, setCoupon] = useState(couponValue?.code);
  const [couponData, setCouponData] = useState<CouponType | undefined>(
    couponValue,
  );

  const subTotal =
    cartItems &&
    cartItems?.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

  const shipping = subTotal ? shippingPrice(subTotal) : 0;

  let total = subTotal && subTotal + shipping;

  let discountAmount = 0;

  if (couponData && total) {
    discountAmount = (total * couponData.percent) / 100;
    total = total - discountAmount;
  }

  function handleInputCoupon(e: ChangeEvent<HTMLInputElement>) {
    setCoupon(e.target.value);
  }

  async function handleApplyCoupon() {
    if (coupon) {
      try {
        const couponResponse = await applyCoupon(coupon);
        if (couponResponse) {
          setCouponData(couponResponse);
          setCouponValue(couponResponse);
        }
      } catch (error) {}
    }
  }

  function handleDeleteCoupon() {
    clearCoupon();
    setCouponData(undefined);
    setCoupon("");
  }

  useEffect(() => {
    return () => {
      clearProductBuyNow();
    };
  }, []);

  if (productBuyNow) {
    const subTotal = productBuyNow.price * productBuyNow.quantity;

    const shipping = subTotal ? shippingPrice(subTotal) : 0;

    let total = subTotal + shipping;

    let discountAmount = 0;

    if (couponData && total) {
      discountAmount = (total * couponData.percent) / 100;
      total = total - discountAmount;
    }

    return (
      <div className="flex-0 m-[20px] ml-0 w-[400px] max-w-[100%] down-medium-screen:w-[339px] smallest-screen:w-full smallest-screen:max-w-full">
        <div className="rounded-[4px] border border-solid border-primary px-[35px] pb-[30px] pt-[25px] medium-screen:px-[25px] medium-screen:pb-[25px] medium-screen:pt-[20px]">
          <div className="flex flex-col">
            <div className="relative mb-[21px] pb-[25px] after:absolute after:bottom-0 after:h-[1px] after:w-full after:bg-light_gray_color_second after:content-['']">
              <div className="flex flex-col">
                <div
                  className="flex cursor-pointer items-center justify-between"
                  onClick={() => {
                    setIsCouponOpen(!isCouponOpen);
                  }}
                >
                  <span className="text-left text-[22px] font-medium leading-[1.27] text-primary">
                    Mã giảm giá
                  </span>
                  <AngleIcon
                    size={13}
                    className={cn(
                      "transform fill-current text-primary duration-300 ease-linear",
                      {
                        "rotate-[180deg]": !isCouponOpen,
                        "rotate-0": isCouponOpen,
                      },
                    )}
                  />
                </div>

                <div
                  className={cn(
                    "overflow-hidden transition-max-height duration-300 ease-linear",
                    {
                      "max-h-[150px]": isCouponOpen,
                      "max-h-0": !isCouponOpen,
                    },
                  )}
                >
                  <div className="flex gap-[10px] pt-[25px]">
                    {couponData?.code ? (
                      <input
                        value={coupon}
                        className="h-auto w-full min-w-0 rounded-[3px] border p-[9px_12px] text-[13px] font-medium leading-[16px] tracking-[0.01em]"
                        disabled
                      />
                    ) : (
                      <Input
                        value={coupon}
                        placeholder="Mã giảm giá"
                        className="w-full"
                        onChange={handleInputCoupon}
                      />
                    )}

                    {couponData?.code ? (
                      <Button
                        type="button"
                        className="whitespace-nowrap"
                        onClick={handleDeleteCoupon}
                      >
                        Hủy
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        className="whitespace-nowrap"
                        onClick={handleApplyCoupon}
                      >
                        Áp dụng
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-[22px] font-medium leading-[1.27] text-primary">
              Đơn hàng của bạn
            </h2>

            <div className="mt-[12px]">
              <table className="w-full">
                <tbody className="w-full medium-screen:block">
                  <OrderItem key={productBuyNow.id} product={productBuyNow} />
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
                      {subTotal && priceRender(subTotal)}
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
                      {shipping ? priceRender(shipping) + "đ" : "Miễn phí"}
                    </td>
                  </tr>

                  <tr className="medium-screen:flex">
                    <td
                      colSpan={2}
                      className="relative w-full py-[20px] after:absolute after:left-0 after:right-0 after:top-[50%] after:h-[1px] after:bg-light_gray_color_second after:content-['']"
                    />
                  </tr>

                  {couponData?.code && (
                    <>
                      <tr>
                        <th className="w-[50%] text-left text-[22px] font-medium leading-[1.27] text-primary">
                          Giảm giá
                        </th>
                        <td className="w-[50%] whitespace-nowrap text-right text-[17px] font-bold leading-[21px] tracking-[-0.01em] text-secondary">
                          {couponData && discountAmount}
                        </td>
                      </tr>

                      <tr>
                        <th colSpan={2}>
                          <div className="text-end italic">
                            {"(" + couponData.percent + "% đơn hàng)"}
                          </div>
                        </th>
                      </tr>

                      <tr className="relative z-[1] after:absolute after:left-0 after:right-0 after:top-[50%] after:h-[1px] after:bg-light_gray_color_second after:content-['']">
                        <td className="py-[20px]" colSpan={2} />
                      </tr>
                    </>
                  )}

                  <tr className="medium-screen:flex medium-screen:justify-between">
                    <th className="text-left text-[22px] font-medium leading-[1.27] text-primary">
                      Tổng
                    </th>
                    <td className="whitespace-wrap text-right text-[24px] font-bold leading-[30px] tracking-[-0.02em] text-secondary">
                      {subTotal && total && priceRender(total) + "đ"}
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
                    {...register("paymentMethod")}
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
                    {...register("paymentMethod")}
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
                      Hãy chuyển khoản trực tiếp vào tài khoản ngân hàng của
                      chúng tôi. Vui lòng sử dụng mã đơn hàng của bạn làm tham
                      chiếu thanh toán. Đơn hàng của bạn sẽ không được giao cho
                      đến khi số tiền đã được xác nhận trong tài khoản của chúng
                      tôi.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-[10px]">
              <div className="flex flex-col">
                <div className="mt-[20px]">
                  <p>
                    Dữ liệu cá nhân của bạn sẽ được sử dụng để xử lý đơn hàng
                    của bạn, hỗ trợ trải nghiệm của bạn trên toàn bộ trang web
                    này, và cho các mục đích khác được mô tả trong
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

            {isTermChecked ? (
              <Button
                type="submit"
                variant="secondary"
                size="xsm"
                className="mt-[37px] text-[13px] font-bold leading-[16px] tracking-wider"
              >
                Đặt hàng
              </Button>
            ) : (
              <button
                className="mt-[37px] inline-block cursor-pointer rounded-[25px] border-[2px] border-solid border-primary bg-primary px-[25px] py-[15px] text-center text-[13px] font-bold uppercase leading-[16px] tracking-wider text-white opacity-30 outline-none"
                type="submit"
                disabled
              >
                Đặt hàng
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex-0 m-[20px] ml-0 w-[400px] max-w-[100%] down-medium-screen:w-[339px] smallest-screen:w-full smallest-screen:max-w-full">
      <div className="rounded-[4px] border border-solid border-primary px-[35px] pb-[30px] pt-[25px] medium-screen:px-[25px] medium-screen:pb-[25px] medium-screen:pt-[20px]">
        <div className="flex flex-col">
          <div className="relative mb-[21px] pb-[25px] after:absolute after:bottom-0 after:h-[1px] after:w-full after:bg-light_gray_color_second after:content-['']">
            <div className="flex flex-col">
              <div
                className="flex cursor-pointer items-center justify-between"
                onClick={() => {
                  setIsCouponOpen(!isCouponOpen);
                }}
              >
                <span className="text-left text-[22px] font-medium leading-[1.27] text-primary">
                  Mã giảm giá
                </span>
                <AngleIcon
                  size={13}
                  className={cn(
                    "transform fill-current text-primary duration-300 ease-linear",
                    {
                      "rotate-[180deg]": !isCouponOpen,
                      "rotate-0": isCouponOpen,
                    },
                  )}
                />
              </div>

              <div
                className={cn(
                  "overflow-hidden transition-max-height duration-300 ease-linear",
                  {
                    "max-h-[150px]": isCouponOpen,
                    "max-h-0": !isCouponOpen,
                  },
                )}
              >
                <div className="flex gap-[10px] pt-[25px]">
                  {couponData?.code ? (
                    <input
                      value={coupon}
                      className="h-auto w-full min-w-0 rounded-[3px] border p-[9px_12px] text-[13px] font-medium leading-[16px] tracking-[0.01em]"
                      disabled
                    />
                  ) : (
                    <Input
                      value={coupon}
                      placeholder="Mã giảm giá"
                      className="w-full"
                      onChange={handleInputCoupon}
                    />
                  )}

                  {couponData?.code ? (
                    <Button
                      type="button"
                      className="whitespace-nowrap"
                      onClick={handleDeleteCoupon}
                    >
                      Hủy
                    </Button>
                  ) : (
                    <Button
                      type="button"
                      className="whitespace-nowrap"
                      onClick={handleApplyCoupon}
                    >
                      Áp dụng
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-[22px] font-medium leading-[1.27] text-primary">
            Đơn hàng của bạn
          </h2>

          <div className="mt-[12px]">
            <table className="w-full">
              <tbody className="w-full medium-screen:block">
                {cartItems &&
                  cartItems?.map((item) => {
                    return (
                      <OrderItem key={item.productVariantId} product={item} />
                    );
                  })}
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
                    {subTotal && priceRender(subTotal)}
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
                    {shipping ? priceRender(shipping) + "đ" : "Miễn phí"}
                  </td>
                </tr>

                <tr className="medium-screen:flex">
                  <td
                    colSpan={2}
                    className="relative w-full py-[20px] after:absolute after:left-0 after:right-0 after:top-[50%] after:h-[1px] after:bg-light_gray_color_second after:content-['']"
                  />
                </tr>

                {couponData?.code && (
                  <>
                    <tr>
                      <th className="w-[50%] text-left text-[22px] font-medium leading-[1.27] text-primary">
                        Giảm giá
                      </th>
                      <td className="w-[50%] whitespace-nowrap text-right text-[17px] font-bold leading-[21px] tracking-[-0.01em] text-secondary">
                        {couponData && discountAmount}
                      </td>
                    </tr>

                    <tr>
                      <th colSpan={2}>
                        <div className="text-end italic">
                          {"(" + couponData.percent + "% đơn hàng)"}
                        </div>
                      </th>
                    </tr>

                    <tr className="relative z-[1] after:absolute after:left-0 after:right-0 after:top-[50%] after:h-[1px] after:bg-light_gray_color_second after:content-['']">
                      <td className="py-[20px]" colSpan={2} />
                    </tr>
                  </>
                )}

                <tr className="medium-screen:flex medium-screen:justify-between">
                  <th className="text-left text-[22px] font-medium leading-[1.27] text-primary">
                    Tổng
                  </th>
                  <td className="whitespace-wrap text-right text-[24px] font-bold leading-[30px] tracking-[-0.02em] text-secondary">
                    {subTotal && total && priceRender(total) + "đ"}
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
                  {...register("paymentMethod")}
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
                  {...register("paymentMethod")}
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

          {isTermChecked ? (
            <Button
              type="submit"
              variant="secondary"
              size="xsm"
              className="mt-[37px] text-[13px] font-bold leading-[16px] tracking-wider"
            >
              Đặt hàng
            </Button>
          ) : (
            <button
              className="mt-[37px] inline-block cursor-pointer rounded-[25px] border-[2px] border-solid border-primary bg-primary px-[25px] py-[15px] text-center text-[13px] font-bold uppercase leading-[16px] tracking-wider text-white opacity-30 outline-none"
              type="submit"
              disabled
            >
              Đặt hàng
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
