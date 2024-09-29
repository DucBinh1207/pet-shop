import useOrder from "@/store/use-order";
import { useShallow } from "zustand/react/shallow";
import { Tabs } from "@/constants/profile-tabs";
import { Dispatch, SetStateAction } from "react";
import OrderList from "./order-list";
import OrderDetail from "./order-detail";
import { Order as OrderType } from "@/types/order";
import { TabsType } from "../page";

type props = {
  setTabActive: Dispatch<SetStateAction<TabsType>>;
};

export default function Order({ setTabActive }: props) {
  const initialOrder: OrderType = {
    id: "",
    product: "",
    quantity: "",
    name: "",
    telephone: null,
    total: null,
  };

  const { order, setOrder } = useOrder(
    useShallow((state) => ({
      order: state.order,
      setOrder: state.setOrder,
    })),
  );

  // This is where we will pass the order data that needs to be viewed in detail
  // and redirect the user to the orders page
  const RedirectOrderDetail = () => {
    setTabActive(Tabs.ORDERS);
    setOrder(initialOrder);
  };

  return (
    <div className="mt-[10px] flex flex-col">
      {/* 
            If there is an order to display, render the order details. 
            Otherwise, render the order table.
          */}
      {order ? (
        <OrderDetail />
      ) : (
        <OrderList
          RedirectOrderDetail={RedirectOrderDetail}
          orderList={[initialOrder]}
        />
      )}
    </div>
  );
}
