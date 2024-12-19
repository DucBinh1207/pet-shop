"use client";

import FoodIcon from "@/components/common/icons/food-icon";
import PetIcon from "@/components/common/icons/pet-icon";
import ShopIcon from "@/components/common/icons/shop-icon";
import SupplyIcon from "@/components/common/icons/supply-icon";
import cn from "@/utils/style/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

type props = {
  name: string;
  path: string;
  iconName: "SHOP" | "PETS" | "FOODS" | "SUPPLIES";
};

const IconsMap = {
  SHOP: ShopIcon,
  PETS: PetIcon,
  FOODS: FoodIcon,
  SUPPLIES: SupplyIcon,
};

export default function Nav({ name, path, iconName }: props) {
  const pathName = usePathname();
  const Icon = IconsMap[iconName];

  return (
    <li className="relative mx-[calc((27.5*(100vw-900px))/(1920-900))] my-[15px] text-[18px]">
      <Link
        href={path}
        className={cn(
          "group relative flex items-end text-end text-base font-bold leading-[1] hover:!text-text_color_fourth max-large-screen:!text-[calc(22*100vw/1920)] large-screen:text-[18px]",
          {
            "after:absolute after:bottom-[-10px] after:left-0 after:h-[1px] after:w-full after:bg-text_color_second after:content-['']":
              pathName === path,
          },
        )}
      >
        <Icon
          className={cn(
            "mr-[10px] fill-current text-dark_purple_color brightness-100 group-hover:brightness-[1.5]",
            {
              "brightness-[1.5]": pathName === path,
            },
          )}
          size={24}
        />

        {name}

        <span
          className={
            "absolute bottom-[-10px] left-[50%] h-[1px] w-0 origin-center translate-x-[-50%] bg-text_color_second transition-all duration-300 group-hover:w-full"
          }
        ></span>
      </Link>
    </li>
  );
}
