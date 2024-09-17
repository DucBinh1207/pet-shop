import { useRef } from "react";
import SidebarItem from "./_components/sidebar-item";
import SocialItem from "./_components/social-item";
import SidebarNoticeItem from "./_components/sidebar-notice-item";
import CancelIcon from "@/components/common/icons/cancel-icon";
import useClickOutside from "@/hooks/use-click-outside";
import useSidebar from "@/store/use-sidebar";
import cn from "@/utils/style/cn";

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

  return (
    <>
      <div
        ref={sidebarRef}
        className={cn(
          "fixed top-0 z-[1000] h-full w-full min-w-[320px] max-w-[415px] bg-header_bg_second text-header_text large-screen:hidden large-screen:opacity-0",
          {
            "translate-x-[0] opacity-100 duration-300 ease-in-out":
              isSideBarOpen === true,
            "translate-x-[-100%] opacity-0 duration-300 ease-in-out":
              isSideBarOpen === false,
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
            <ul className="flex flex-col text-header_text">
              <SidebarItem name="Shop" path="/" iconName="shop" />
              <SidebarItem name="Pets" path="/pets" iconName="pets" />
              <SidebarItem name="Foods" path="/foods" iconName="foods" />
              <SidebarItem
                name="Supplies"
                path="/supplies"
                iconName="supplies"
              />
              <SidebarItem name="Guides" path="/guides" iconName="guides" />

              <li className="mt-[22px]">
                <div className="overflow-hidden px-[50px] text-white">
                  <ul className="flex flex-col flex-nowrap justify-end gap-[15px] py-[15px] text-[13px] font-semibold leading-[1.23] tracking-[0.015em] text-header_text">
                    <SidebarNoticeItem
                      name="petshopdanang@gmail.com"
                      href="mailto:petshopdanang@gmail.com"
                      iconName="mail"
                    />

                    <SidebarNoticeItem
                      name="+84-857-123-987"
                      href="tel:+84857123987"
                      iconName="phone"
                    />

                    <SidebarNoticeItem
                      name=" 54 Nguyen Luong Bang, Hoa Khanh Bac, Lien Chieu, Da Nang"
                      href="https://maps.app.goo.gl/Q4P1AhYJGg1qP4Ez5"
                      iconName="locate"
                    />

                    <SidebarNoticeItem
                      name="Mon-Fri: 8:00 AM - 20:00 PM"
                      href="#"
                      iconName="businessTime"
                    />
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="absolute bottom-[40px] left-0 w-full">
          <ul className="flex h-full w-full items-center justify-around text-[125%] text-header_text">
            <SocialItem href="https://www.facebook.com" iconName="facebook" />
            <SocialItem href="https://www.instagram.com" iconName="instagram" />
            <SocialItem href="https://www.youtube.com" iconName="youtube" />
            <SocialItem href="https://www.tiktok.com" iconName="tiktok" />
          </ul>
        </div>
      </div>
      <div
        className={cn(
          "bg-overlay fixed inset-0 z-[999] h-[100vh] w-[100vw] transition-opacity",
          {
            "block opacity-100": isSideBarOpen,
            "hidden opacity-0": !isSideBarOpen,
          },
        )}
      ></div>
    </>
  );
}
