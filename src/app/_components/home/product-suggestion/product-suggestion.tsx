"use client";

import { useState } from "react";
import Tab from "./tab";
import Content from "./content";

export const TabType = {
  DOGS: "Chó",
  CATS: "Mèo",
  FOODS: "Thức ăn",
  SUPPLIES: "Vật dụng",
};

export type TabTypes = (typeof TabType)[keyof typeof TabType];

export default function ProductSuggestion() {
  const [tab, setTab] = useState<TabTypes>(TabType.DOGS);

  return (
    <div className="mx-auto mb-[30px] mt-[20px] large-screen:max-w-[1160px] small-screen:w-[calc(100%-60px)] xx-smallest-screen:mx-0 xx-smallest-screen:w-[calc(100%-40px)] xx-smallest-screen:min-w-full">
      <div className="mb-[25px] flex justify-center">
        <div className="relative mx-auto flex items-center gap-[40px] after:absolute after:bottom-0 after:h-[2px] after:w-full after:bg-light_gray_color_second after:content-['']">
          <Tab name={TabType.DOGS} tab={tab} setTab={setTab} />
          <Tab name={TabType.CATS} tab={tab} setTab={setTab} />
          <Tab name={TabType.FOODS} tab={tab} setTab={setTab} />
          <Tab name={TabType.SUPPLIES} tab={tab} setTab={setTab} />
        </div>
      </div>
      <div>
        <Content id={TabType.DOGS} isSelected={TabType.DOGS === tab} />
        <Content id={TabType.CATS} isSelected={TabType.CATS === tab} />
        <Content id={TabType.FOODS} isSelected={TabType.FOODS === tab} />
        <Content id={TabType.SUPPLIES} isSelected={TabType.SUPPLIES === tab} />
      </div>
    </div>
  );
}
