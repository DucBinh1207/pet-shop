import SearchIcon from "@/components/common/icons/search-icon";
import UserIcon from "@/components/common/icons/user-icon";
import CartIcon from "@/components/common/icons/cart-icon";
import Link from "next/link";

type props = {
  iconName: "SEARCH" | "USER" | "CART";
  href: string;
};

const IconsMap = {
  SEARCH: SearchIcon,
  USER: UserIcon,
  CART: CartIcon,
};

export default function Action({ iconName, href }: props) {
  const Icon = IconsMap[iconName];

  return (
    <li className="group relative flex items-center justify-center p-[15px] hover:scale-110 hover:text-white small-screen:mx-[8px] small-screen:p-0">
      <Link
        href={href}
        className="flex h-[20px] w-[20px] items-center justify-center"
      >
        <Icon size={21} />
      </Link>
    </li>
  );
}
