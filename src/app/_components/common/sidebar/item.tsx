import FoodIcon from "@/components/common/icons/food-icon";
import GuideIcon from "@/components/common/icons/guide-icon";
import PetIcon from "@/components/common/icons/pet-icon";
import ShopIcon from "@/components/common/icons/shop-icon";
import SupplyIcon from "@/components/common/icons/supply-icon";
import cn from "@/utils/style/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

type props = {
  name: string;
  path: string;
  iconName: "SHOP" | "PETS" | "FOODS" | "SUPPLIES" | "GUIDES";
};

const IconsMap = {
  SHOP: ShopIcon,
  PETS: PetIcon,
  FOODS: FoodIcon,
  SUPPLIES: SupplyIcon,
  GUIDES: GuideIcon,
};

export default function Item({ name, path, iconName }: props) {
  const pathName = usePathname();
  const Icon = IconsMap[iconName];

  return (
    <li className="py-[15px] text-[calc(18*100vw/1920)] text-base font-semibold uppercase leading-[1.23]">
      <Link
        href={path}
        className={cn("hover:!text-text_color_fourth group relative flex", {
          "after:absolute after:right-[30px] after:top-0 after:h-[20px] after:w-[20px] after:bg-arrow_img after:bg-no-repeat after:content-['']":
            pathName === path,
        })}
      >
        <Icon
          className={cn(
            "text-dark_purple_color mr-[16px] fill-current brightness-100 group-hover:brightness-[1.5]",
            { "brightness-[1.5]": pathName === path },
          )}
          size={26.4}
        />

        {name}

        <span
          className={cn(
            "bg-text_color_second absolute bottom-[-10px] left-0 h-[1px] w-0 transition-all duration-300 group-hover:w-[80%]",
          )}
        ></span>
      </Link>
    </li>
  );
}
