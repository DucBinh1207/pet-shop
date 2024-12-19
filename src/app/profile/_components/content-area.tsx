import { Dispatch, SetStateAction } from "react";
import { Tabs } from "@/constants/profile-tabs";
import Dashboard from "./dashboard";
import Address from "./address";
import AccountDetail from "./account-detail";
import Order from "./orders";
import { TabsType } from "./page-content";

type props = {
  tabActive: TabsType;
  setTabActive: Dispatch<SetStateAction<TabsType>>;
};

export default function ContentArea({ tabActive, setTabActive }: props) {
  return (
    <div className="flex-1 px-[50px] py-[35px] text-[14px] leading-[1.5] tracking-[0.02em] text-text_color">
      {tabActive === Tabs.DASHBOARD && (
        <Dashboard setTabActive={setTabActive} />
      )}

      {tabActive === Tabs.ORDERS && <Order setTabActive={setTabActive} />}

      {tabActive === Tabs.ADDRESS && <Address />}

      {tabActive === Tabs.ACCOUNT_DETAILS && <AccountDetail />}
    </div>
  );
}
