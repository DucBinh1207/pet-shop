import cn from "@/utils/style/cn";
import { Dispatch, SetStateAction } from "react";
import { TabTypes } from "./product-suggestion";

type props = {
  name: TabTypes;
  tab: TabTypes;
  setTab: Dispatch<SetStateAction<TabTypes>>;
};

export default function Tab({ name, tab, setTab }: props) {
  return (
    <div
      className={cn(
        "z-10 cursor-pointer border-b-[2px] border-solid pb-[23px] text-[22px] font-bold leading-[1.27] text-primary xxx-smallest-screen:text-[20px]",
        {
          "border-b-primary": name === tab,
        },
      )}
    >
      <div
        onClick={() => {
          setTab(name);
        }}
      >
        {name}
      </div>
    </div>
  );
}
