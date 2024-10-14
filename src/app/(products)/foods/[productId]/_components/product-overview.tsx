"use client";

import { useState } from "react";
import Content from "./content";
import { Tabs, TabsType } from "@/app/(products)/_shared/tab";
import TabSection from "@/app/(products)/_components/tab-section";

export default function ProductOverview() {
  const [tab, setTab] = useState<TabsType>(Tabs.DESCRIPTION);

  return (
    <div className="mt-[45px] flex flex-col font-quicksand up-smallest-screen:mb-[70px] smallest-screen:mb-[40px] smallest-screen:mt-[30px]">
      <TabSection tab={tab} setTab={setTab} />

      <Content tab={tab} />
    </div>
  );
}
