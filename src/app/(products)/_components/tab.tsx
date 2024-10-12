import cn from "@/utils/style/cn";
import { Dispatch, SetStateAction } from "react";
import { TabsType } from "../_shared/tab";

type props = {
  name: string;
  order: TabsType;
  tab: TabsType;
  setTab: Dispatch<SetStateAction<TabsType>>;
};

export default function Tab({ name, order, tab, setTab }: props) {
  return (
    <div
      className={cn(
        "z-10 cursor-pointer border-b-[2px] border-solid pb-[23px] text-[22px] font-bold leading-[1.27] text-primary",
        {
          "border-b-primary opacity-100": order === tab,
          "opacity-70": order !== tab,
        },
      )}
    >
      <div
        onClick={() => {
          setTab(order);
        }}
        className="whitespace-nowrap"
      >
        {name}
      </div>
    </div>
  );
}
