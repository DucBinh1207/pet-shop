import LogOutIcon from "@/components/common/icons/log-out-icon";
import { TABS } from "@/constants/profile-tabs";
import useOrder from "@/store/use-order";
import cn from "@/utils/style/cn";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { useShallow } from "zustand/react/shallow";

type props = {
  section: (typeof TABS)[number];
  setSection: Dispatch<SetStateAction<(typeof TABS)[number]>>;
};

export default function Sidebar({ section, setSection }: props) {
  const router = useRouter();

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
                "text-text_color": section === TABS[0],
              },
            )}
            onClick={() => {
              if (section !== TABS[0]) setSection(TABS[0]);
            }}
          >
            dashboard
          </li>
          <li
            className={cn(
              "cursor-pointer hover:text-secondary smallest-screen:text-center",
              {
                "text-text_color": section === TABS[1],
              },
            )}
            onClick={() => {
              if (section !== TABS[1]) setSection(TABS[1]);
              clearOrder();
            }}
          >
            orders
          </li>
          <li
            className={cn(
              "cursor-pointer hover:text-secondary smallest-screen:text-center",
              {
                "text-text_color": section === TABS[2],
              },
            )}
            onClick={() => {
              if (section !== TABS[2]) setSection(TABS[2]);
            }}
          >
            address
          </li>
          <li
            className={cn(
              "cursor-pointer hover:text-secondary smallest-screen:text-center",
              {
                "text-text_color": section === TABS[3],
              },
            )}
            onClick={() => {
              if (section !== TABS[3]) setSection(TABS[3]);
            }}
          >
            account details
          </li>
          <li
            className="flex cursor-pointer gap-[4px] hover:text-secondary smallest-screen:justify-center"
            onClick={() => {
              router.push("/");
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
