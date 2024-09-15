import classNameComp from "@/components/common/Class";
import { ShopIcon } from "@/components/common/Icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItem() {
  const pathName = usePathname();

  return (
    <>
      <li className="relative mx-[27.5px] my-[15px] text-[18px]">
        <Link
          href="/"
          className={classNameComp(
            "text=[18px] group relative flex items-end leading-[1.47] hover:!text-header_text_third",
            {
              "after:absolute after:bottom-[-10px] after:left-0 after:h-[1px] after:w-full after:bg-header_text after:content-['']":
                pathName === "/",
            },
          )}
        >
          <div className="bg-header_bg inline">
            <ShopIcon
              className={classNameComp(
                "mr-[16px] brightness-100 group-hover:brightness-[1.5]",
                {
                  "brightness-[1.5]": pathName === "/",
                },
              )}
              size={26.4}
            />
          </div>
          {/* <Shop
            alt="shop page"
            loading="lazy"
            className={classNameComp(
              "mr-[16px] brightness-100 group-hover:brightness-[1.5]",
              {
                "brightness-[1.5]": pathName === "/",
              },
            )}
          /> */}
          Svg Shop
          <span
            className={`absolute bottom-[-10px] left-[50%] h-[1px] w-0 origin-center translate-x-[-50%] bg-header_text transition-all duration-300 group-hover:w-full`}
          ></span>
        </Link>
      </li>
    </>
  );
}
