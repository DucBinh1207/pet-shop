import LogOutIcon from "@/components/common/icons/log-out-icon";
import { Tabs } from "@/constants/profile-tabs";
import cn from "@/utils/style/cn";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import { useShallow } from "zustand/react/shallow";
import { TabsType } from "./page-content";
import useOrder from "../_shared/use-order";
import { LogOut } from "@/services/api/auth-api";
import { deleteAuthTokenFromInternalServer } from "@/services/api/internal-auth-api";

type props = {
  tabActive: TabsType;
  setTabActive: Dispatch<SetStateAction<TabsType>>;
};

export default function Sidebar({ tabActive, setTabActive }: props) {
  const { clearOrder } = useOrder(
    useShallow((state) => ({
      clearOrder: state.clearOrder,
    })),
  );

  return (
    <div className="flex basis-[260px] flex-col border-r border-solid border-light_gray_color_second p-[40px] smallest-screen:border-b smallest-screen:border-r-0">
      <div className="mb-[25px] flex items-center gap-[20px] text-start smallest-screen:flex-col">
        <div className="relative h-[70px] w-[70px] overflow-clip object-cover">
          <Image src="/assets/images/avatar.jpg" fill alt="avatar" />
        </div>

        <div className="flex flex-col text-[14px] leading-[1.5] tracking-[0.02] smallest-screen:flex-row">
          <span className="text-text_color">Hello,&nbsp;</span>
          <span className="font-medium text-primary">Tran Binh</span>
        </div>
      </div>

      <div className="h-full w-full flex-1">
        <ul className="flex flex-col gap-[25px] text-[14px] font-medium uppercase leading-[1] tracking-[0.025em] text-primary">
          <li
            className={cn(
              "cursor-pointer hover:text-secondary smallest-screen:text-center",
              {
                "text-text_color": tabActive === Tabs.DASHBOARD,
              },
            )}
            onClick={() => {
              if (tabActive !== Tabs.DASHBOARD) setTabActive(Tabs.DASHBOARD);
            }}
          >
            dashboard
          </li>
          <li
            className={cn(
              "cursor-pointer hover:text-secondary smallest-screen:text-center",
              {
                "text-text_color": tabActive === Tabs.ORDERS,
              },
            )}
            onClick={() => {
              if (tabActive !== Tabs.ORDERS) setTabActive(Tabs.ORDERS);
              clearOrder();
            }}
          >
            orders
          </li>
          <li
            className={cn(
              "cursor-pointer hover:text-secondary smallest-screen:text-center",
              {
                "text-text_color": tabActive === Tabs.ADDRESS,
              },
            )}
            onClick={() => {
              if (tabActive !== Tabs.ADDRESS) setTabActive(Tabs.ADDRESS);
            }}
          >
            address
          </li>
          <li
            className={cn(
              "cursor-pointer hover:text-secondary smallest-screen:text-center",
              {
                "text-text_color": tabActive === Tabs.ACCOUNT_DETAILS,
              },
            )}
            onClick={() => {
              if (tabActive !== Tabs.ACCOUNT_DETAILS)
                setTabActive(Tabs.ACCOUNT_DETAILS);
            }}
          >
            account details
          </li>
          <li
            className="flex cursor-pointer gap-[4px] hover:text-secondary smallest-screen:justify-center"
            onClick={async () => {
              await LogOut();
              await deleteAuthTokenFromInternalServer();
              window.location.href = "/";
            }}
          >
            <LogOutIcon size={14} className="fill-current" />
            log out
          </li>
        </ul>
      </div>
    </div>
  );
}
