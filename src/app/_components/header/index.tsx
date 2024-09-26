"use client";

import Link from "next/link";
import cn from "@/utils/style/cn";
import Sidebar from "../sidebar";
import NavItem from "./_components/nav-item";
import BarIcon from "@/components/common/icons/bar-icon";
import ActionItem from "./_components/action-item";
import LogoIcon from "@/components/common/icons/logo-icon";
import useSidebar from "@/store/use-sidebar";

export default function Header() {
  const { openSidebar } = useSidebar((state) => state);

  return (
    <div
      className={cn(
        "bg-header_bg_color sticky top-0 z-[100] flex min-h-[90px] w-full items-center justify-between px-[50px] after:absolute after:top-full after:block after:h-[3px] after:w-full after:translate-x-[-50px] after:translate-y-[-1px] after:bg-header_img after:bg-repeat-x after:content-[''] small-screen:min-h-[60px] small-screen:justify-normal small-screen:p-0 small-screen:after:translate-x-0",
      )}
    >
      <button
        className="hidden h-[60px] w-[86px] flex-col gap-[5px] text-white small-screen:block"
        onClick={openSidebar}
      >
        <BarIcon size={32} className="m-auto" />
      </button>

      <Sidebar />

      <Link
        href="/"
        className="flex items-center gap-[10px] text-[38px] font-semibold tracking-wider text-white small-screen:flex-1"
      >
        <LogoIcon size={40} fill="#ffffff" />
        Whiskers
      </Link>

      <ul className="text-text_color_second flex small-screen:hidden small-screen:opacity-0">
        <NavItem name="Shop" path="/" iconName="SHOP" />
        <NavItem name="Pets" path="/pets" iconName="PETS" />
        <NavItem name="Foods" path="/foods" iconName="FOODS" />
        <NavItem name="Supplies" path="/supplies" iconName="SUPPLIES" />
        <NavItem name="Guides" path="/guides" iconName="GUIDES" />
      </ul>

      <ul className="text-text_color_second flex text-base small-screen:mx-[13px] small-screen:pt-[5px]">
        <ActionItem type="button" iconName="SEARCH" />
        <ActionItem type="link" iconName="USER" href="/user" />
        <ActionItem type="link" iconName="CART" href="/cart" />
      </ul>
    </div>
  );
}
