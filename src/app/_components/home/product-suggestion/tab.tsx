import cn from "@/utils/style/cn";
import { Dispatch, SetStateAction } from "react";

type props = {
  name: string;
  order: number;
  tab: number;
  setTab: Dispatch<SetStateAction<number>>;
};

export default function Tab({ name, order, tab, setTab }: props) {
  return (
    <div
      className={cn(
        "z-10 cursor-pointer border-b-[2px] border-solid pb-[23px] text-[22px] font-bold leading-[1.27] text-primary xxx-smallest-screen:text-[20px]",
        {
          "border-b-primary": order === tab,
        },
      )}
    >
      <div
        onClick={() => {
          setTab(order);
        }}
      >
        {name}
      </div>
    </div>
  );
}
