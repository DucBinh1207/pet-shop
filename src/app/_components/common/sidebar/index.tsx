"use client";
import { useRef } from "react";
import Item from "./item";
import Notice from "./notice";
import Social from "./social";
import CancelIcon from "@/components/common/icons/cancel-icon";
import useSidebar from "@/store/use-sidebar";
import cn from "@/utils/style/cn";
import useBlockScroll from "@/hooks/use-block-scroll";
import useClickOutside from "@/hooks/use-click-outside";

export default function Sidebar() {
  const { isSideBarOpen, closeSidebar } = useSidebar((state) => ({
    isSideBarOpen: state.isSideBarOpen,
    closeSidebar: state.closeSidebar,
  }));

  const sidebarRef = useRef<HTMLDivElement>(null);

  useClickOutside({
    ref: sidebarRef,
    enabled: isSideBarOpen,
    callback: closeSidebar,
  });

  useBlockScroll(isSideBarOpen);

  return (
    <>
      <div
        ref={sidebarRef}
        className={cn(
          "fixed top-0 z-[1000] h-full max-h-full w-full min-w-[320px] max-w-[415px] bg-header_bg_color_second text-text_color_second large-screen:hidden large-screen:opacity-0",
          {
            "translate-x-[0] opacity-100 duration-300 ease-in-out":
              isSideBarOpen,
            "translate-x-[-100%] opacity-0 duration-300 ease-in-out":
              !isSideBarOpen,
          },
        )}
      >
        <div className="absolute left-0 top-0 flex h-[60px] w-full items-center justify-end px-[25px]">
          <button>
            <CancelIcon onClick={closeSidebar} size={32} />
          </button>
        </div>

        <div className="absolute bottom-[100px] left-0 right-0 top-[60px] overflow-hidden">
          <div className="hidden_scrollbar h-full w-[100vw] min-w-[320px] max-w-[415px] snap-none overflow-auto px-[25px]">
            <ul className="flex flex-col font-quicksand text-text_color_second">
              <Item name="Cửa hàng" path="/" iconName="SHOP" />
              <Item name="Thú cưng" path="/pets" iconName="PETS" />
              <Item name="Thức ăn" path="/foods" iconName="FOODS" />
              <Item name="Vật dụng khác" path="/supplies" iconName="SUPPLIES" />

              <li className="mt-[22px]">
                <div className="overflow-hidden px-[50px] text-white">
                  <ul className="flex flex-col flex-nowrap justify-end gap-[15px] py-[15px] text-[13px] font-semibold leading-[1.23] tracking-[0.015em] text-text_color_second">
                    <Notice
                      name="whiskersshop@gmail.com"
                      href="mailto:whiskersshop@gmail.com"
                      iconName="MAIL"
                    />

                    <Notice
                      name="+84-857-123-987"
                      href="tel:+84857123987"
                      iconName="PHONE"
                    />

                    <Notice
                      name=" 54 Nguyen Luong Bang, Hoa Khanh Bac, Lien Chieu, Da Nang"
                      href="https://maps.app.goo.gl/Q4P1AhYJGg1qP4Ez5"
                      iconName="LOCATE"
                    />

                    <Notice
                      name="T2-T6 : 8:00 AM - 20:00 PM"
                      href="#"
                      iconName="BUSINESS_TIME"
                    />
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="absolute bottom-[40px] left-0 w-full">
          <ul className="flex h-full w-full items-center justify-around text-[125%] text-text_color_second">
            <Social href="https://www.facebook.com" iconName="FACEBOOK" />
            <Social href="https://www.instagram.com" iconName="INSTAGRAM" />
            <Social href="https://www.youtube.com" iconName="YOUTUBE" />
            <Social href="https://www.tiktok.com" iconName="TIKTOK" />
          </ul>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 z-[999] h-[100vh] w-[100vw] bg-overlay_color transition-opacity",
          {
            "block opacity-100": isSideBarOpen,
            "hidden opacity-0": !isSideBarOpen,
          },
        )}
      />
    </>
  );
}
