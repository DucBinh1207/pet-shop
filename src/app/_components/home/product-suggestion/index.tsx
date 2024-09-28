"use client";

import { useState } from "react";
import Tab from "./tab";
import Content from "./content";

export default function ProductSuggestion() {
  const [tab, setTab] = useState(1);
  const tabNum = [1, 2, 3, 4].map((t) => {
    return tab === t;
  });

  return (
    <div className="xx-smallest-screen:w-[calc(100%-40px)] mx-auto mb-[30px] mt-[20px] large-screen:max-w-[1160px] small-screen:w-[calc(100%-60px)]">
      <div className="mb-[25px] flex justify-center">
        <div className="relative mx-auto flex items-center gap-[40px] after:absolute after:bottom-0 after:h-[2px] after:w-full after:bg-light_gray_color_second after:content-['']">
          <Tab name="Dogs" order={1} tab={tab} setTab={setTab} />
          <Tab name="Cats" order={2} tab={tab} setTab={setTab} />
          <Tab name="Foods" order={3} tab={tab} setTab={setTab} />
          <Tab name="Supplies" order={4} tab={tab} setTab={setTab} />
        </div>
      </div>
      <div>
        <Content id="suggest-1" isSelected={tabNum[0]} />
        <Content id="suggest-2" isSelected={tabNum[1]} />
        <Content id="suggest-3" isSelected={tabNum[2]} />
        <Content id="suggest-4" isSelected={tabNum[3]} />
      </div>
    </div>
  );
}
