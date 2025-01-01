import CartIcon from "@/components/common/icons/cart-icon";
import { getAuthTokenFromInternalServer } from "@/services/api/internal-auth-api";
import Link from "next/link";
import Cart from "./cart";
import { useEffect, useState } from "react";

export default function CartButton() {
  const [isUserExist, setIsUserExist] = useState(false);

  useEffect(() => {
    async function renderAvatar() {
      const token = await getAuthTokenFromInternalServer();

      if (token) {
        setIsUserExist(true);
      }
    }
    renderAvatar();
  }, []);

  if (isUserExist) {
    return <Cart />;
  }

  return (
    <li className="group relative flex items-center justify-center p-[15px] hover:scale-110 hover:text-white small-screen:mx-[8px] small-screen:p-0">
      <Link
        href="/cart"
        className="relative flex h-[20px] w-[20px] items-center justify-center"
      >
        <CartIcon size={21} />
      </Link>
    </li>
  );
}
