"use client";

import BreadCrumb from "@/components/bread-crumb";
import Sidebar from "./_components/sidebar";
import { useState } from "react";
import ContentArea from "./_components/content-area";
import { TABS } from "@/constants/profile-tabs";

export default function Profile() {
  //set default section and tab is Dashboard
  const [section, setSection] = useState<(typeof TABS)[number]>(TABS[0]);

  return (
    <>
      <BreadCrumb page="profile" />
      <div className="mx-auto mb-[40px] mt-[30px] min-w-[320px] large-screen:w-[1160px] small-screen:mb-[30px] small-screen:mt-[15px] small-screen:w-[calc(100%-60px)] smallest-screen:mb-[20px] smallest-screen:mt-[10px]">
        <div className="flex h-full w-full bg-white smallest-screen:block">
          <Sidebar section={section} setSection={setSection} />
          <ContentArea section={section} setSection={setSection} />
        </div>
      </div>
    </>
  );
}
