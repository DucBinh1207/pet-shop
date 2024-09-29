import { Dispatch, SetStateAction } from "react";
import { Tabs } from "@/constants/profile-tabs";
import Dashboard from "./dashboard";
import Address from "./address";
import AccountDetail from "./account-detail";
import Order from "./orders";
import { TabsType } from "../page";

type props = {
  tabActive: TabsType;
  setTabActive: Dispatch<SetStateAction<TabsType>>;
};

export default function ContentArea({ tabActive, setTabActive }: props) {
  return (
    <div className="flex-1 px-[50px] py-[35px] text-[14px] leading-[1.5] tracking-[0.02em] text-text_color">
      {/* Dashboard Section */}
      {tabActive === Tabs.DASHBOARD && (
        <Dashboard setTabActive={setTabActive} />
      )}

      {/* Order Section */}
      {tabActive === Tabs.ORDERS && <Order setTabActive={setTabActive} />}

      {/* Address Section */}
      {tabActive === Tabs.ADDRESS && <Address />}

      {/* Account Details Section */}
      {tabActive === Tabs.ACCOUNT_DETAILS && <AccountDetail />}
    </div>
  );
}
