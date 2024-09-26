"use client";

import { useState } from "react";
import TabItem from "./_components/tab-item";
import TabContent from "./_components/tab-content";

export default function ProductSuggestion() {
  const [tab, setTab] = useState(1);
  const tabContentNum = [1, 2, 3, 4].map((t) => {
    return tab === t;
  });

  return (
    <div className="xxs-smallest-screen:w-[calc(100%-40px)] mx-auto mb-[30px] mt-[20px] large-screen:max-w-[1160px] small-screen:w-[calc(100%-60px)]">
      <div className="mb-[25px] flex justify-center">
        <div className="relative mx-auto flex items-center gap-[40px] after:absolute after:bottom-0 after:h-[2px] after:w-full after:bg-light_gray_color_second after:content-['']">
          <TabItem
            name="Dogs"
            href="#suggest-1"
            order={1}
            tab={tab}
            setTab={setTab}
          />
          <TabItem
            name="Cats"
            href="#suggest-2"
            order={2}
            tab={tab}
            setTab={setTab}
          />
          <TabItem
            name="Foods"
            href="#suggest-3"
            order={3}
            tab={tab}
            setTab={setTab}
          />
          <TabItem
            name="Supplies"
            href="#suggest-4"
            order={4}
            tab={tab}
            setTab={setTab}
          />
        </div>
      </div>
      <div>
        <TabContent id="suggest-1" tab={tabContentNum[0]} />
        <TabContent id="suggest-2" tab={tabContentNum[1]} />
        <TabContent id="suggest-3" tab={tabContentNum[2]} />
        <TabContent id="suggest-4" tab={tabContentNum[3]} />
      </div>
    </div>
  );
}
