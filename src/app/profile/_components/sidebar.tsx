import LogOutIcon from "@/components/common/icons/log-out-icon";
import useOrder from "@/store/use-order";
import cn from "@/utils/style/cn";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

type props = {
  section: number;
  setSection: Dispatch<SetStateAction<number>>;
};

export default function Sidebar({ section, setSection }: props) {
  const router = useRouter();
  const { clearOrder } = useOrder((state) => ({
    order: state.order,
    clearOrder: state.clearOrder,
  }));

  return (
    <div className="flex basis-[260px] flex-col border-r border-solid border-light_gray_color_second p-[40px] smallest-screen:border-r-0 smallest-screen:border-b">
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
                "text-text_color": section === 1,
              },
            )}
            onClick={() => {
              if (section !== 1) setSection(1);
            }}
          >
            dashboard
          </li>
          <li
            className={cn(
              "cursor-pointer hover:text-secondary smallest-screen:text-center",
              {
                "text-text_color": section === 2,
              },
            )}
            onClick={() => {
              if (section !== 2) setSection(2);
              clearOrder();
            }}
          >
            orders
          </li>
          <li
            className={cn(
              "cursor-pointer hover:text-secondary smallest-screen:text-center",
              {
                "text-text_color": section === 3,
              },
            )}
            onClick={() => {
              if (section !== 3) setSection(3);
            }}
          >
            address
          </li>
          <li
            className={cn(
              "cursor-pointer hover:text-secondary smallest-screen:text-center",
              {
                "text-text_color": section === 4,
              },
            )}
            onClick={() => {
              if (section !== 4) setSection(4);
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
