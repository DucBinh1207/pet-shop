import UserIcon from "@/components/common/icons/user-icon";
import CartIcon from "@/components/common/icons/cart-icon";
import Link from "next/link";
import Image from "next/image";
import useUser from "@/hooks/users/useUser";

type props = {
  iconName: "USER" | "CART";
  href: string;
};

const IconsMap = {
  USER: UserIcon,
  CART: CartIcon,
};

export default function Action({ iconName, href }: props) {
  const Icon = IconsMap[iconName];
  const { user } = useUser();

  if (iconName === "USER") {
    return (
      <li className="group relative flex items-center justify-center p-[15px] hover:scale-110 hover:text-white small-screen:mx-[8px] small-screen:p-0">
        <Link
          href={href}
          className="flex h-[20px] w-[20px] items-center justify-center"
        >
          <div className="relative h-[21px] w-[21px] overflow-clip rounded-[50%] object-cover hover:cursor-pointer hover:opacity-70">
            <Image src={user?.image ?? "#"} fill alt="avatar" />
          </div>
        </Link>
      </li>
    );
  }

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
