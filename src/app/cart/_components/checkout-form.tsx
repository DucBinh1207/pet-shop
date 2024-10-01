import Button from "@/components/common/button";
import AngleIcon from "@/components/common/icons/angle-icon";
import CircleInfoIcon from "@/components/common/icons/circle-info";
import Input from "@/components/common/input";
import cn from "@/utils/style/cn";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutForm() {
  const [isCouponOpen, setIsCouponOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="flex-0 m-[20px] ml-0 w-[400px] max-w-[100%] medium-screen:w-[339px]">
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
                  Coupon code
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
                  <Input
                    className="flex-1 basis-auto min-w-0"
                    placeholder="Input coupon code"
                  ></Input>
                  <Button>Apply</Button>
                </div>
              </div>
            </div>
          </div>

          <table className="w-full">
            <tbody>
              <tr>
                <th className="w-[50%] text-left text-[22px] font-medium leading-[1.27] text-primary">
                  Subtotal
                </th>
                <td className="w-[50%] whitespace-nowrap text-right text-[17px] font-bold leading-[21px] tracking-[-0.01em] text-secondary">
                  $100.00
                </td>
              </tr>

              <tr className="relative after:absolute after:left-0 after:right-0 after:top-[50%] after:h-[1px] after:bg-light_gray_color_second after:content-['']">
                <td className="py-[20px]" colSpan={2}></td>
              </tr>

              <tr>
                <th className="w-[50%] text-left text-[22px] font-medium leading-[1.27] text-primary">
                  Shipping
                </th>
                <td className="w-[50%] whitespace-nowrap text-right text-[17px] font-bold leading-[21px] tracking-[-0.01em] text-secondary">
                  $10.00
                </td>
              </tr>

              <tr>
                <td className="relative pt-[10px] text-left italic" colSpan={2}>
                  <div className="peer inline-flex cursor-pointer items-center gap-[5px]">
                    <CircleInfoIcon size={13} /> Flat rate rule
                  </div>

                  <div
                    className={cn(
                      "absolute left-[10px] flex max-h-0 flex-col overflow-hidden bg-white transition-max-height duration-100 ease-linear peer-hover:max-h-[200px]",
                    )}
                  >
                    <ul className="z-20 rounded-[4px] border border-solid border-light_gray_color_second p-[5px] text-[13px]">
                      <li>Order &gt; 5,000,000 VND: Free shipping</li>
                      <li>Order 2,000,000 - 5,000,000 VND: 200,000 VND</li>
                      <li>Order 500,000 - 2,000,000 VND: 100,000 VND</li>
                      <li>Order 200,000 - 500,000 VND: 80,000 VND</li>
                      <li>Order &lt; 200,000 VND: 50,000 VND</li>
                    </ul>
                  </div>
                </td>
              </tr>

              <tr className="relative z-[1] after:absolute after:left-0 after:right-0 after:top-[50%] after:h-[1px] after:bg-light_gray_color_second after:content-['']">
                <td className="py-[20px]" colSpan={2}></td>
              </tr>

              <tr>
                <th className="w-[50%] text-left text-[22px] font-medium leading-[1.27] text-primary">
                  Total
                </th>
                <td className="w-[50%] whitespace-nowrap text-right text-[24px] font-bold leading-[30px] tracking-[-0.02em] text-secondary">
                  $10.00
                </td>
              </tr>

              <tr>
                <td colSpan={2}>
                  <Button
                    variant="secondary"
                    size="xsm"
                    className="mt-[20px] w-full text-[13px] font-bold leading-[16px] tracking-[0.025em]"
                    onClick={() => {
                      router.push("/cart/checkout");
                    }}
                  >
                    Checkout
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
