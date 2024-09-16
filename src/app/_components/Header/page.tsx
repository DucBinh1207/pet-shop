"use client";

import Link from "next/link";
import cn from "@/utils/style/cn";
import Sidebar from "../Sidebar/page";
import { useEffect, useState } from "react";
import useSidebar from "@/store/useSidebar";
import NavItem from "./_components/Nav-item/page";
import BarIcon from "@/components/common/Icons/bar-icon";
import ActionItem from "./_components/Action-item/page";
import LogoIcon from "@/components/common/Icons/logo-icon";

export default function Header() {
  const { openSidebar } = useSidebar((state) => state);
  const [headerSticky, setHeaderSticky] = useState(false);

  const scrollHandle = () => {
    if (window.scrollY >= 50) setHeaderSticky(true);
    else setHeaderSticky(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandle);
    return () => {
      window.addEventListener("scroll", scrollHandle);
    };
  }, []);

  return (
    <div className="relative">
      <div
        className={cn(
          "top-0 z-[100] flex min-h-[90px] w-full items-center justify-between bg-header_bg px-[50px] after:absolute after:top-full after:block after:h-[3px] after:w-full after:translate-x-[-50px] after:bg-header_img after:bg-repeat-x after:content-[''] small-screen:min-h-[60px] small-screen:justify-normal small-screen:p-0 small-screen:after:translate-x-0",
          {
            ["fixed"]: headerSticky === true,
            ["large-screen:relative"]: headerSticky === false,
          },
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

        <ul className="flex text-header_text small-screen:hidden small-screen:opacity-0">
          <NavItem name="Shop" path="/" iconName="shop" />
          <NavItem name="Pets" path="/pets" iconName="pets" />
          <NavItem name="Foods" path="/foods" iconName="foods" />
          <NavItem name="Supplies" path="/supplies" iconName="supplies" />
          <NavItem name="Guides" path="/guides" iconName="guides" />
        </ul>

        <ul className="flex text-base text-header_text small-screen:mx-[13px] small-screen:pt-[5px]">
          <ActionItem type="button" iconName="search" />
          <ActionItem type="link" iconName="user" href="/user" />
          <ActionItem type="link" iconName="cart" href="/cart" />
        </ul>
      </div>
    </div>
  );
}
