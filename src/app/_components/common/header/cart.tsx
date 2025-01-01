import CartIcon from "@/components/common/icons/cart-icon";
import useCartItems from "@/hooks/users/useCartItems";
import useCartTrigger from "@/store/use-cart-trigger";
import Link from "next/link";
import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";

export default function Cart() {
  const { cartItems, refresh } = useCartItems();

  const { triggerNumber } = useCartTrigger(
    useShallow((state) => ({
      triggerNumber: state.triggerNumber,
    })),
  );

  const cartItemNumber =
    cartItems &&
    cartItems.length > 0 &&
    cartItems.reduce((total, item) => {
      return total + item.quantity;
    }, 0);

  useEffect(() => {
    refresh();
  }, [triggerNumber]);

  return (
    <li className="group relative flex items-center justify-center p-[15px] hover:scale-110 hover:text-white small-screen:mx-[8px] small-screen:p-0">
      <Link
        href="/cart"
        className="relative flex h-[20px] w-[20px] items-center justify-center"
      >
        <CartIcon size={21} />
        {cartItems && cartItems.length > 0 && (
          <span className="absolute right-0 top-0 flex h-[16px] w-[16px] translate-x-[50%] translate-y-[-50%] items-center justify-center overflow-hidden whitespace-nowrap rounded-[50%] border border-solid border-tertiary bg-text_color_second text-[12px] font-bold leading-[16px] text-tertiary">
            {cartItemNumber}
          </span>
        )}
      </Link>
    </li>
  );
}
