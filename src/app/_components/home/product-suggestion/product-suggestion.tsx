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
    <div className="xx-smallest-screen:w-[calc(100%-40px)] xx-smallest-screen:mx-0 xx-smallest-screen:min-w-full mx-auto mb-[30px] mt-[20px] large-screen:max-w-[1160px] small-screen:w-[calc(100%-60px)]">
      <div className="mb-[25px] flex justify-center">
        <div className="relative mx-auto flex items-center gap-[40px] after:absolute after:bottom-0 after:h-[2px] after:w-full after:bg-light_gray_color_second after:content-['']">
          <Tab name="Chó" order={1} tab={tab} setTab={setTab} />
          <Tab name="Mèo" order={2} tab={tab} setTab={setTab} />
          <Tab name="Thức ăn" order={3} tab={tab} setTab={setTab} />
          <Tab name="Vật dụng" order={4} tab={tab} setTab={setTab} />
        </div>
      </div>
      <div>
        <Content id="Chó" isSelected={tabNum[0]} />
        <Content id="Mèo" isSelected={tabNum[1]} />
        <Content id="Thức ăn" isSelected={tabNum[2]} />
        <Content id="Vật dụng" isSelected={tabNum[3]} />
      </div>
    </div>
  );
}
