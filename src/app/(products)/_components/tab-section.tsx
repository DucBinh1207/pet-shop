import Tab from "./tab";
import { Tabs, TabsType } from "../_shared/tab";
import { Dispatch, SetStateAction } from "react";

type props = {
  tab: TabsType;
  setTab: Dispatch<SetStateAction<TabsType>>;
};

export default function TabSection({ tab, setTab }: props) {
  return (
    <div className="mx-[35px] mb-[35px]">
      <div className="flex items-center justify-center">
        <div className="relative flex gap-[40px] overflow-x-auto after:absolute after:bottom-0 after:h-[2px] after:w-full after:bg-light_gray_color_second after:content-['']">
          <Tab
            name="Description"
            order={Tabs.DESCRIPTION}
            tab={tab}
            setTab={setTab}
          />
          <Tab
            name="Additional information"
            order={Tabs.ADDITIONAL_INFO}
            tab={tab}
            setTab={setTab}
          />
          <Tab name="Reviews" order={Tabs.REVIEWS} tab={tab} setTab={setTab} />
        </div>
      </div>
    </div>
  );
}
