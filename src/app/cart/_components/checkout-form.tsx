import AngleIcon from "@/components/common/icons/angle-icon";
import CircleInfoIcon from "@/components/common/icons/circle-info";
import cn from "@/utils/style/cn";
import { useRouter } from "next/navigation";
import { ChangeEvent, useContext, useState } from "react";
import Button from "@/components/common/button";
import Input from "@/components/common/input";
import { CartItemType } from "@/types/cart-item";
import { shippingPrice } from "@/utils/shipping-price";
import { priceRender } from "@/utils/priceRender";
import { DeleteCartItemContext } from "./cart-content";
import { applyCoupon, verifyCart } from "@/services/api/cart-api";
import { CouponType } from "@/types/coupon";
import useCoupon from "@/store/use-coupon";

type props = {
  cartItems: CartItemType[];
  isMutating: boolean;
};

export default function CheckoutForm({
  cartItems,

  isMutating,
}: props) {
  const [isCouponOpen, setIsCouponOpen] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [couponData, setCouponData] = useState<CouponType | undefined>(
    undefined,
  );
  const router = useRouter();
  const { isMutatingDelete } = useContext(DeleteCartItemContext);
  const { clearCoupon, setCoupon: setCouponValue } = useCoupon((state) => ({
    clearCoupon: state.clearCoupon,
    setCoupon: state.setCoupon,
  }));

  const subTotal = cartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const shipping = shippingPrice(subTotal);

  let total = subTotal + shipping;

  let discountAmount = 0;

  if (couponData) {
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
        }
      } catch (error) {}
    }
  }

  function handleDeleteCoupon() {
    setCouponData(undefined);
    setCoupon("");
  }

  async function handleCheckout() {
    try {
      await verifyCart();
      clearCoupon();

      if (couponData) {
        setCouponValue(couponData);
      }
      router.push("/cart/checkout");
    } catch (error) {
      console.log(error);
    }
  }

  if (isMutating || isMutatingDelete) {
    return (
      <div className="flex-0 m-[20px] ml-0 w-[400px] max-w-[100%] opacity-25 medium-screen:w-[339px] x-small-screen:m-0 x-small-screen:w-[800px]">
        <div className="rounded-[4px] border border-solid border-primary px-[35px] pb-[30px] pt-[25px] medium-screen:px-[25px] medium-screen:pb-[25px] medium-screen:pt-[20px]">
          <div className="flex flex-col">
            <div className="relative mb-[21px] pb-[25px] after:absolute after:bottom-0 after:h-[1px] after:w-full after:bg-light_gray_color_second after:content-['']">
              <div className="flex flex-col">
                <div className="flex cursor-pointer items-center justify-between">
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
                    <Input placeholder="Mã giảm giá" className="w-full" />
                    <Button className="whitespace-nowrap">Áp dụng</Button>
                  </div>
                </div>
              </div>
            </div>

            <table className="w-full">
              <tbody>
                <tr>
                  <th className="w-[50%] text-left text-[22px] font-medium leading-[1.27] text-primary">
                    Tổng phụ
                  </th>
                  <td className="w-[50%] whitespace-nowrap text-right text-[17px] font-bold leading-[21px] tracking-[-0.01em] text-secondary">
                    {subTotal && priceRender(subTotal) + "đ"}
                  </td>
                </tr>

                <tr className="relative after:absolute after:left-0 after:right-0 after:top-[50%] after:h-[1px] after:bg-light_gray_color_second after:content-['']">
                  <td className="py-[20px]" colSpan={2} />
                </tr>

                <tr>
                  <th className="w-[50%] text-left text-[22px] font-medium leading-[1.27] text-primary">
                    Vận chuyển
                  </th>
                  <td className="w-[50%] whitespace-nowrap text-right text-[17px] font-bold leading-[21px] tracking-[-0.01em] text-secondary">
                    {shipping ? priceRender(shipping) + "đ" : "Miễn phí"}
                  </td>
                </tr>

                <tr>
                  <td
                    className="relative pt-[10px] text-left italic"
                    colSpan={2}
                  >
                    <div className="peer inline-flex cursor-pointer items-center gap-[5px]">
                      <CircleInfoIcon size={13} /> Quy định giá vận chuyển
                    </div>
                  </td>
                </tr>

                <tr className="relative z-[1] after:absolute after:left-0 after:right-0 after:top-[50%] after:h-[1px] after:bg-light_gray_color_second after:content-['']">
                  <td className="py-[20px]" colSpan={2} />
                </tr>

                <tr>
                  <th className="w-[50%] text-left text-[22px] font-medium leading-[1.27] text-primary">
                    Tổng
                  </th>
                  <td className="w-[50%] whitespace-nowrap text-right text-[24px] font-bold leading-[30px] tracking-[-0.02em] text-secondary">
                    {subTotal && priceRender(subTotal + shipping) + "đ"}
                  </td>
                </tr>

                <tr>
                  <td colSpan={2}>
                    <Button
                      variant="secondary"
                      size="xsm"
                      className="pointer-events-none mt-[20px] w-full text-[13px] font-bold leading-[16px] tracking-[0.025em] hover:bg-transparent hover:text-inherit"
                    >
                      Thanh toán
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-0 m-[20px] ml-0 w-[400px] max-w-[100%] medium-screen:w-[339px] x-small-screen:m-0 x-small-screen:w-[800px]">
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
                  {couponData ? (
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

                  {couponData ? (
                    <Button
                      className="whitespace-nowrap"
                      onClick={handleDeleteCoupon}
                    >
                      Hủy
                    </Button>
                  ) : (
                    <Button
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

          <table className="w-full">
            <tbody>
              <tr>
                <th className="w-[50%] text-left text-[22px] font-medium leading-[1.27] text-primary">
                  Tổng phụ
                </th>
                <td className="w-[50%] whitespace-nowrap text-right text-[17px] font-bold leading-[21px] tracking-[-0.01em] text-secondary">
                  {subTotal && priceRender(subTotal) + "đ"}
                </td>
              </tr>

              <tr className="relative after:absolute after:left-0 after:right-0 after:top-[50%] after:h-[1px] after:bg-light_gray_color_second after:content-['']">
                <td className="py-[20px]" colSpan={2} />
              </tr>

              <tr>
                <th className="w-[50%] text-left text-[22px] font-medium leading-[1.27] text-primary">
                  Vận chuyển
                </th>
                <td className="w-[50%] whitespace-nowrap text-right text-[17px] font-bold leading-[21px] tracking-[-0.01em] text-secondary">
                  {shipping ? priceRender(shipping) + "đ" : "Miễn phí"}
                </td>
              </tr>

              <tr>
                <td className="relative pt-[10px] text-left italic" colSpan={2}>
                  <div className="peer inline-flex cursor-pointer items-center gap-[5px]">
                    <CircleInfoIcon size={13} /> Quy định giá vận chuyển
                  </div>

                  <div
                    className={cn(
                      "absolute left-[10px] flex max-h-0 flex-col overflow-hidden bg-white transition-max-height duration-100 ease-linear peer-hover:max-h-[200px]",
                    )}
                  >
                    <ul className="z-20 rounded-[4px] border-[2px] border-solid border-light_gray_color_second bg-white p-[5px] text-[13px]">
                      <li>
                        Đơn hàng &gt; 5,000,000 VND: <b> Miễn phí</b>
                      </li>
                      <li>Đơn hàng 2,000,000 - 5,000,000 VND: 200,000 VND</li>
                      <li>Đơn hàng 500,000 - 2,000,000 VND: 100,000 VND</li>
                      <li>Đơn hàng 200,000 - 500,000 VND: 80,000 VND</li>
                      <li>Đơn hàng &lt; 200,000 VND: 50,000 VND</li>
                    </ul>
                  </div>
                </td>
              </tr>

              <tr className="relative z-[1] after:absolute after:left-0 after:right-0 after:top-[50%] after:h-[1px] after:bg-light_gray_color_second after:content-['']">
                <td className="py-[20px]" colSpan={2} />
              </tr>

              {couponData && (
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

              <tr>
                <th className="w-[50%] text-left text-[22px] font-medium leading-[1.27] text-primary">
                  Tổng
                </th>
                <td className="w-[50%] whitespace-nowrap text-right text-[24px] font-bold leading-[30px] tracking-[-0.02em] text-secondary">
                  {subTotal && priceRender(total) + "đ"}
                </td>
              </tr>

              <tr>
                <td colSpan={2}>
                  <Button
                    variant="secondary"
                    size="xsm"
                    className="mt-[20px] w-full text-[13px] font-bold leading-[16px] tracking-[0.025em]"
                    onClick={handleCheckout}
                  >
                    Thanh toán
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
