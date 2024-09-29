"use client";

import Button from "@/components/common/button";
import CartIcon from "@/components/common/icons/cart-icon";
import { useRouter } from "next/navigation";

export default function CartContent() {
  const router = useRouter();

  return (
    <div className="mx-auto mb-[40px] mt-[30px] w-[1160px] min-w-[320px] rounded-[4px] border border-solid border-light_gray_color_second bg-white small-screen:mb-[30px] small-screen:mt-[15px] small-screen:w-[calc(100%-60px)] smallest-screen:mb-[20px] smallest-screen:mt-[10px] xx-smallest-screen:w-full">
      <div className="flex h-full flex-col items-center px-[60px] py-[125px] small-screen:py-[85px]">
        <div>
          <CartIcon size={90} className="fill-current text-primary" />
        </div>
        <h2 className="mt-[35px] max-w-[800px] text-center font-quicksand text-[27px] font-bold leading-[1.27] tracking-[-0.01em] text-primary xxx-smallest-screen:text-[22px]">
          Your cart is currently empty
        </h2>
        <div className="mt-[45px]">
          <Button
            onClick={() => {
              router.push("/");
            }}
          >
            return to home
          </Button>
        </div>
      </div>
    </div>
  );
}
