import { useShallow } from "zustand/react/shallow";
import { Tabs } from "@/constants/profile-tabs";
import { Dispatch, SetStateAction } from "react";
import OrderList from "./order-list";
import OrderDetail from "./order-detail";
import { TabsType } from "./page-content";
import useOrder from "../_shared/use-order";
import useOrderList from "@/hooks/users/useOrderList";
import { OrderType } from "@/types/order-item";

type props = {
  setTabActive: Dispatch<SetStateAction<TabsType>>;
};

export default function Order({ setTabActive }: props) {
  const { order, setOrder } = useOrder(
    useShallow((state) => ({
      order: state.order,
      setOrder: state.setOrder,
    })),
  );

  // This is where we will pass the order data that needs to be viewed in detail
  // and redirect the user to the orders page
  const RedirectOrderDetail = (order: OrderType) => {
    setTabActive(Tabs.ORDERS);
    setOrder(order);
  };

  const { orderList } = useOrderList();

  return (
    <div className="mt-[10px] flex flex-col">
      {/* 
            If there is an order to display, render the order details. 
            Otherwise, render the order table.
          */}
      {order ? (
        <OrderDetail order={order} />
      ) : (
        <>
          {orderList && (
            <OrderList
              RedirectOrderDetail={RedirectOrderDetail}
              orderList={orderList}
            />
          )}
        </>
      )}
    </div>
  );
}
