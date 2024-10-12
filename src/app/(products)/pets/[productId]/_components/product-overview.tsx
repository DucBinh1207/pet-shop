"use client";

import { useState } from "react";
import Content from "./content";
import Tab from "@/app/(products)/_components/tab";
import { Tabs, TabsType } from "@/app/(products)/_shared/tab";

export default function ProductOverview() {
  const [tab, setTab] = useState<TabsType>(Tabs.DESCRIPTION);

  return (
    <div className="mt-[45px] flex flex-col font-quicksand up-smallest-screen:mb-[70px] smallest-screen:mb-[40px] smallest-screen:mt-[30px]">
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
            <Tab
              name="Reviews"
              order={Tabs.REVIEWS}
              tab={tab}
              setTab={setTab}
            />
          </div>
        </div>
      </div>

      <Content tab={tab} />
    </div>
  );
}
