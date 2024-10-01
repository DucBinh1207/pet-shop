"use client";

import BreadCrumb from "@/components/bread-crumb";
import { useState } from "react";
import { Tabs } from "@/constants/profile-tabs";
import Sidebar from "./sidebar";
import ContentArea from "./content-area";

export type TabsType = (typeof Tabs)[keyof typeof Tabs];

export default function PageContent() {
  //set default section and tab is DASHBOARD
  const [tabActive, setTabActive] = useState<TabsType>(Tabs.DASHBOARD);

  return (
    <>
      <BreadCrumb pathLink={["profile"]} pathName={["Profile"]} />
      <div className="mx-auto mb-[40px] mt-[30px] min-w-[320px] large-screen:w-[1160px] small-screen:mb-[30px] small-screen:mt-[15px] small-screen:w-[calc(100%-60px)] smallest-screen:mb-[20px] smallest-screen:mt-[10px]">
        <div className="flex h-full w-full bg-white smallest-screen:block">
          <Sidebar tabActive={tabActive} setTabActive={setTabActive} />
          <ContentArea tabActive={tabActive} setTabActive={setTabActive} />
        </div>
      </div>
    </>
  );
}
