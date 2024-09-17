import FoodIcon from "@/components/common/icons/food-icon";
import GuideIcon from "@/components/common/icons/guide-icon";
import PetIcon from "@/components/common/icons/pet-icon";
import ShopIcon from "@/components/common/icons/shop-icon";
import SupplyIcon from "@/components/common/icons/supply-icon";
import cn from "@/utils/style/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

type navItemProps = {
  name: string;
  path: string;
  iconName: "shop" | "pets" | "foods" | "supplies" | "guides";
};

const IconsMap = {
  shop: ShopIcon,
  pets: PetIcon,
  foods: FoodIcon,
  supplies: SupplyIcon,
  guides: GuideIcon,
};

export default function SidebarItem({ name, path, iconName }: navItemProps) {
  const pathName = usePathname();
  const Icon = IconsMap[iconName];

  return (
    <li className="py-[15px] text-[calc(18*100vw/1920)] text-base font-semibold uppercase leading-[1.23]">
      <Link
        href={path}
        className={cn("group relative flex hover:!text-header_text_third", {
          "after:absolute after:right-[30px] after:top-0 after:h-[20px] after:w-[20px] after:bg-arrow_img after:bg-no-repeat after:content-['']":
            pathName === path,
        })}
      >
        <Icon
          className={cn(
            "mr-[16px] fill-current text-header_icon brightness-100 group-hover:brightness-[1.5]",
            { "brightness-[1.5]": pathName === path },
          )}
          size={26.4}
        />

        {name}

        <span
          className={cn(
            "absolute bottom-[-10px] left-0 h-[1px] w-0 bg-header_text transition-all duration-300 group-hover:w-[80%]",
          )}
        ></span>
      </Link>
    </li>
  );
}
