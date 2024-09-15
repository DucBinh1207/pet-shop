"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import Logo from "/src/assets/icons/logo.svg";
import Shop from "/src/assets/icons/shop_icon.svg";
import Pet from "/src/assets/icons/dog_icon.svg";
import Food from "/src/assets/icons/food_icon.svg";
import Supplies from "/src/assets/icons/supplies_icon.svg";
import Guide from "/src/assets/icons/guide_icon.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import useSidebar from "@/store/useSidebar";
import Sidebar from "../Sidebar/page";
import { useEffect, useState } from "react";

export default function Header() {
  const { openSidebar } = useSidebar((state) => state);
  const [headerSticky, setHeaderSticky] = useState(false);
  const pathName = usePathname();

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
        className={`${headerSticky === true ? "fixed" : "large-screen:relative"} top-0 z-[100] flex min-h-[90px] w-full items-center justify-between bg-header_bg px-[50px] after:absolute after:top-full after:block after:h-[3px] after:w-full after:translate-x-[-50px] after:bg-header_img after:bg-repeat-x after:content-[''] small-screen:min-h-[60px] small-screen:justify-normal small-screen:p-0 small-screen:after:translate-x-0`}
      >
        <button
          className="hidden h-[60px] w-[86px] flex-col gap-[5px] text-white small-screen:block"
          onClick={openSidebar}
        >
          <FontAwesomeIcon icon={faBars} size="2x" />
        </button>

        <Sidebar />

        <Link
          href="/"
          className="flex items-center gap-[10px] text-[38px] font-semibold tracking-wider text-white small-screen:flex-1"
        >
          <Logo alt="pet shop logo" loading="lazy" />
          Whiskers
        </Link>

        <ul className="text-navbar-size flex text-header_text small-screen:hidden small-screen:opacity-0">
          <li className="relative mx-[27.5px] my-[15px] text-[18px]">
            <Link
              href="/"
              className={`text=[18px] group relative flex items-end leading-[1.47] hover:!text-header_text_third ${
                pathName === "/"
                  ? "after:absolute after:bottom-[-10px] after:left-0 after:h-[1px] after:w-full after:bg-header_text after:content-['']"
                  : ""
              }`}
            >
              <Shop
                alt="shop page"
                loading="lazy"
                className={`mr-[16px] brightness-100 group-hover:brightness-[1.5] ${pathName === "/" ? "brightness-[1.5]" : ""} `}
              />
              Shop
              <span
                className={`absolute bottom-[-10px] left-[50%] h-[1px] w-0 origin-center translate-x-[-50%] bg-header_text transition-all duration-300 group-hover:w-full`}
              ></span>
            </Link>
          </li>
          {/* <NavItem /> */}

          <li className="relative mx-[27.5px] my-[15px] text-[18px]">
            <Link
              href="/pets"
              className={`text=[18px] group relative flex items-end leading-[1.47] hover:!text-header_text_third ${
                pathName === "/pets"
                  ? "leading-[1.47] after:absolute after:bottom-[-10px] after:left-0 after:h-[1px] after:w-full after:bg-header_text after:content-['']"
                  : ""
              }`}
            >
              <Pet
                alt="pet page"
                loading="lazy"
                className={`mr-[16px] brightness-100 group-hover:brightness-[1.5] ${pathName === "/pets" ? "brightness-[1.5]" : ""} `}
              />
              Pets
              <span
                className={`absolute bottom-[-10px] left-[50%] h-[1px] w-0 origin-center translate-x-[-50%] bg-header_text transition-all duration-300 group-hover:w-full`}
              ></span>
            </Link>
          </li>

          <li className="relative mx-[27.5px] my-[15px] text-[18px]">
            <Link
              href="/foods"
              className={`text=[18px] group relative flex items-end leading-[1.47] hover:!text-header_text_third ${
                pathName === "/foods"
                  ? "leading-[1.47] after:absolute after:bottom-[-10px] after:left-0 after:h-[1px] after:w-full after:bg-header_text after:content-['']"
                  : ""
              }`}
            >
              <Food
                alt="food page"
                loading="lazy"
                className={`mr-[16px] brightness-100 group-hover:brightness-[1.5] ${pathName === "/foods" ? "brightness-[1.5]" : ""} `}
              />
              Foods
              <span
                className={`absolute bottom-[-10px] left-[50%] h-[1px] w-0 origin-center translate-x-[-50%] bg-header_text transition-all duration-300 group-hover:w-full`}
              ></span>
            </Link>
          </li>

          <li className="relative mx-[27.5px] my-[15px] text-[18px]">
            <Link
              href="/supplies"
              className={`text=[18px] group relative flex items-end leading-[1.47] hover:!text-header_text_third ${
                pathName === "/supplies"
                  ? "leading-[1.47] after:absolute after:bottom-[-10px] after:left-0 after:h-[1px] after:w-full after:bg-header_text after:content-['']"
                  : ""
              }`}
            >
              <Supplies
                alt="supplies page"
                loading="lazy"
                className={`mr-[16px] brightness-100 group-hover:brightness-[1.5] ${pathName === "/supplies" ? "brightness-[1.5]" : ""} `}
              />
              Supplies
              <span
                className={`absolute bottom-[-10px] left-[50%] h-[1px] w-0 origin-center translate-x-[-50%] bg-header_text transition-all duration-300 group-hover:w-full`}
              ></span>
            </Link>
          </li>

          <li className="relative mx-[27.5px] my-[15px] text-[18px]">
            <Link
              href="/guides"
              className={`text=[18px] group relative flex items-end leading-[1.47] hover:!text-header_text_third ${
                pathName === "/guides"
                  ? "leading-[1.47] after:absolute after:bottom-[-10px] after:left-0 after:h-[1px] after:w-full after:bg-header_text after:content-['']"
                  : ""
              }`}
            >
              <Guide
                alt="guide page"
                loading="lazy"
                className={`mr-[16px] brightness-100 group-hover:brightness-[1.5] ${pathName === "/guides" ? "brightness-[1.5]" : ""} `}
              />
              Guides
              <span
                className={`absolute bottom-[-10px] left-[50%] h-[1px] w-0 origin-center translate-x-[-50%] bg-header_text transition-all duration-300 group-hover:w-full`}
              ></span>
            </Link>
          </li>
        </ul>

        <ul className="flex text-base text-header_text small-screen:mx-[13px] small-screen:pt-[5px]">
          <li className="group relative flex items-center justify-center p-[15px] hover:scale-110 hover:text-white small-screen:mx-[8px] small-screen:p-0">
            <button className="flex h-[20px] w-[20px] items-center justify-center">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                transform="grow-4"
                className=""
              />
            </button>
          </li>

          <li className="group relative flex items-center justify-center p-[15px] hover:scale-110 hover:text-white small-screen:mx-[8px] small-screen:p-0">
            <Link
              href="/user"
              className="flex h-[20px] w-[20px] items-center justify-center"
            >
              <FontAwesomeIcon icon={faUser} transform="grow-4" />
            </Link>
          </li>

          <li className="group relative flex items-center justify-center p-[15px] hover:scale-110 hover:text-white small-screen:mx-[8px] small-screen:p-0">
            <Link
              href="/cart"
              className="flex h-[20px] w-[20px] items-center justify-center"
            >
              <FontAwesomeIcon icon={faCartShopping} transform="grow-4" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
