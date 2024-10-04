"use client";

import Link from "next/link";
import cn from "@/utils/style/cn";
import Sidebar from "../sidebar/sidebar";
import Nav from "./nav";
import BarIcon from "@/components/common/icons/bar-icon";
import Action from "./action";
import LogoIcon from "@/components/common/icons/logo-icon";
import useSidebar from "@/store/use-sidebar";

export default function Header() {
  const { openSidebar } = useSidebar((state) => state);

  return (
    <div
      className={cn(
        "sticky top-0 z-[100] flex min-h-[90px] w-full items-center justify-between bg-header_bg_color px-[50px] after:absolute after:top-full after:block after:h-[3px] after:w-full after:translate-x-[-50px] after:translate-y-[-1px] after:bg-header_img after:bg-repeat-x after:content-[''] small-screen:min-h-[60px] small-screen:justify-normal small-screen:p-0 small-screen:after:translate-x-0",
      )}
    >
      <button
        className="hidden h-[60px] w-[86px] flex-col gap-[5px] text-text_color_second small-screen:block"
        onClick={openSidebar}
      >
        <BarIcon size={32} className="m-auto" />
      </button>

      <Sidebar />

      <Link
        href="/"
        className="flex items-center gap-[10px] font-quicksand text-[38px] font-bold tracking-wider text-white small-screen:flex-1"
      >
        <LogoIcon size={40} fill="#ffffff" />
        Whiskers
      </Link>

      <ul className="flex text-text_color_second small-screen:hidden small-screen:opacity-0">
        <Nav name="Shop" path="/" iconName="SHOP" />
        <Nav name="Pets" path="/pets" iconName="PETS" />
        <Nav name="Foods" path="/foods" iconName="FOODS" />
        <Nav name="Supplies" path="/supplies" iconName="SUPPLIES" />
        <Nav name="Guides" path="/guides" iconName="GUIDES" />
      </ul>

      <ul className="flex text-base text-text_color_second small-screen:mx-[13px] small-screen:pt-[5px]">
        <Action type="button" iconName="SEARCH" />
        <Action type="link" iconName="USER" href="/profile" />
        <Action type="link" iconName="CART" href="/cart" />
      </ul>
    </div>
  );
}
