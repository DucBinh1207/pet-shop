import FoodIcon from "@/components/common/icons/food-icon";
import GuideIcon from "@/components/common/icons/guide-icon";
import PetIcon from "@/components/common/icons/pet-icon";
import ShopIcon from "@/components/common/icons/shop-icon";
import SupplyIcon from "@/components/common/icons/supply-icon";
import useSidebar from "@/store/use-sidebar";
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

  const { closeSidebar } = useSidebar((state) => ({
    closeSidebar: state.closeSidebar,
  }));

  return (
    <li className="py-[15px] text-[calc(18*100vw/1920)] text-base font-semibold uppercase leading-[1.23]">
      <button onClick={closeSidebar} className="w-full">
        <Link
          href={path}
          className={cn("group relative flex hover:!text-text_color_fourth", {
            "after:absolute after:right-[30px] after:top-0 after:h-[20px] after:w-[20px] after:bg-arrow_img after:bg-no-repeat after:content-['']":
              pathName === path,
          })}
        >
          <Icon
            className={cn(
              "mr-[16px] fill-current text-dark_purple_color brightness-100 group-hover:brightness-[1.5]",
              { "brightness-[1.5]": pathName === path },
            )}
            size={26.4}
          />

          {name}

          <span
            className={cn(
              "absolute bottom-[-10px] left-0 h-[1px] w-0 bg-text_color_second transition-all duration-300 group-hover:w-[80%]",
            )}
          ></span>
        </Link>
      </button>
    </li>
  );
}
