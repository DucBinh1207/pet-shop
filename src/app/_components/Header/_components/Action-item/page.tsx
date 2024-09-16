import SearchIcon from "@/components/common/Icons/search-icon";
import UserIcon from "@/components/common/Icons/user-icon";
import CartIcon from "@/components/common/Icons/cart-icon";
import Link from "next/link";

type ActionProps = {
  type: "button" | "link";
  iconName: "search" | "user" | "cart";
  href?: string;
};

const IconsMap = {
  search: SearchIcon,
  user: UserIcon,
  cart: CartIcon,
};

export default function ActionItem({ type, iconName, href }: ActionProps) {
  const Icon = IconsMap[iconName];
  href = href !== undefined ? href : "";

  const btn = (
    <button className="flex h-[20px] w-[20px] items-center justify-center">
      <Icon size={21} />
    </button>
  );

  const link = (
    <Link
      href={href}
      className="flex h-[20px] w-[20px] items-center justify-center"
    >
      <Icon size={21} />
    </Link>
  );

  return (
    <li className="group relative flex items-center justify-center p-[15px] hover:scale-110 hover:text-white small-screen:mx-[8px] small-screen:p-0">
      {type === "button" ? btn : link}
    </li>
  );
}
