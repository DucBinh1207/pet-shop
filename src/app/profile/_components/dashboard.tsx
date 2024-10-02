import Button from "@/components/common/button";
import { OrderType } from "@/types/order";
import OrderCard from "./order-card";
import { useShallow } from "zustand/react/shallow";
import PenIcon from "@/components/common/icons/pen-icon";
import { Tabs } from "@/constants/profile-tabs";
import LocateIcon from "@/components/common/icons/locate-icon";
import { Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import { TabsType } from "./page-content";
import ToolTip from "@/components/common/tooltip";
import useOrder from "../_shared/use-order";

type props = {
  setTabActive: Dispatch<SetStateAction<TabsType>>;
};

export default function Dashboard({ setTabActive }: props) {
  const initialOrder: OrderType = {
    id: "",
    product: "",
    quantity: "",
    name: "",
    telephone: null,
    total: null,
  };

  const router = useRouter();
  const { setOrder, clearOrder } = useOrder(
    useShallow((state) => ({
      setOrder: state.setOrder,
      clearOrder: state.clearOrder,
    })),
  );

  // This will be the place to fetch order data
  const orderList: OrderType[] = [initialOrder];
  const orderNum = orderList.length;

  // This is where we will pass the order data that needs to be viewed in detail
  // and redirect the user to the orders page
  const RedirectOrderDetail = () => {
    setTabActive(Tabs.ORDERS);
    setOrder(initialOrder);
  };

  return (
    <>
      <div className="mb-[25px] mt-[10px] flex flex-col xxx-smallest-screen:text-center">
        <h2 className="text-[22px] font-medium leading-[28px] text-primary">
          Recent Orders
        </h2>

        {/*If the number of orders is greater than 0, render the order table; otherwise, render the "browse products" button.*/}
        {orderNum > 0 ? (
          <>
            <table className="mt-[20px] w-full xxx-smallest-screen:block">
              <thead className="w-full border-b border-solid border-light_gray_color_second xxx-smallest-screen:hidden">
                <tr className="w-full text-left text-[13px] uppercase leading-[1] tracking-[0.02em] text-text_color xxx-smallest-screen:block">
                  <th className="w-[20%] pb-[15px] font-normal">Order</th>
                  <th className="w-[10%] pb-[15px] font-normal">Items</th>
                  <th className="w-[40%] pb-[15px] font-normal">Date</th>
                  <th className="w-[15%] pb-[15px] font-normal">Total</th>
                  <th className="w-[15%] pb-[15px] font-normal">Status</th>
                  <th className="w-[10%] pb-[15px] font-normal">Action</th>
                </tr>
              </thead>

              <tbody className="w-full text-left xxx-smallest-screen:block">
                <OrderCard RedirectOrderDetail={RedirectOrderDetail} />

                <OrderCard RedirectOrderDetail={RedirectOrderDetail} />

                <OrderCard RedirectOrderDetail={RedirectOrderDetail} />
              </tbody>
            </table>

            <div className="mt-[20px] flex justify-center">
              <Button
                variant="primary"
                size="xsm"
                className="text-center text-[13px] font-bold uppercase leading-[16px] tracking-[0.05em]"
                onClick={() => {
                  setTabActive(Tabs.ORDERS);
                  clearOrder();
                }}
              >
                View All
              </Button>
            </div>
          </>
        ) : (
          <div className="mt-[20px] flex flex-col items-center gap-[20px]">
            <h3 className="mb-[10px]">No order has been made yet.</h3>
            <div>
              <Button
                variant="primary"
                size="xsm"
                className="text-center text-[13px] font-bold uppercase leading-[16px] tracking-[0.05em]"
                onClick={() => {
                  router.push("/");
                }}
              >
                browser products
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className="mb-[25px] flex flex-col xxx-smallest-screen:text-center">
        <h2 className="text-[22px] font-medium leading-[28px] text-primary">
          Your Shipping Address
        </h2>

        <div className="mt-[20px] flex items-center gap-[10px]">
          <LocateIcon size={20} className="fill-current text-primary" />

          <span className="text-[16px] leading-[1.5] tracking-[0.02em] text-text_color">
            54 Nguyen Luong Bang, Hoa Khanh Bac, Lien Chieu, Da Nang
          </span>

          <ToolTip
            value="Edit"
            element={
              <Button
                size="none"
                variant="icon"
                startIcon={
                  <PenIcon size={20} className="ml-[5px] fill-current" />
                }
                onClick={() => {
                  setTabActive(Tabs.ADDRESS);
                }}
              ></Button>
            }
          />
        </div>
      </div>

      <div className="flex flex-col xxx-smallest-screen:text-center">
        <h2 className="text-[22px] font-medium leading-[28px] text-primary">
          Account Details
        </h2>

        <div className="mt-[20px] flex items-center justify-center gap-[10px]">
          <table className="min-w-[50%] xxx-smallest-screen:block">
            <tbody className="flex w-full flex-col items-center xxx-smallest-screen:block">
              <tr className="flex w-full border-b border-solid border-light_gray_color_second text-left xxx-smallest-screen:block">
                <th className="min-w-[50%] py-[14px] font-medium text-primary">
                  Name :
                </th>
                <td className="min-w-[50%] py-[14px]">Tran Duc Binh</td>
              </tr>

              <tr className="flex w-full border-b border-solid border-light_gray_color_second text-left xxx-smallest-screen:block">
                <th className="min-w-[50%] py-[14px] font-medium text-primary">
                  Telephone :
                </th>
                <td className="min-w-[50%] py-[14px]">0123 987 456</td>
              </tr>

              <tr className="flex w-full border-b border-solid border-light_gray_color_second text-left xxx-smallest-screen:block">
                <th className="min-w-[50%] py-[14px] font-medium text-primary">
                  Email :
                </th>
                <td className="min-w-[50%] py-[14px]">example@gmail.com</td>
              </tr>

              <tr className="flex w-full border-b border-solid border-light_gray_color_second text-left xxx-smallest-screen:block">
                <th className="min-w-[50%] py-[14px] font-medium text-primary">
                  Nationality :
                </th>
                <td className="min-w-[50%] py-[14px]">Viet Nam</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-[20px] flex justify-center">
          <Button
            variant="primary"
            size="xsm"
            className="text-center text-[13px] font-bold uppercase leading-[16px] tracking-[0.05em]"
            onClick={() => {
              setTabActive(Tabs.ACCOUNT_DETAILS);
            }}
          >
            Edit
          </Button>
        </div>
      </div>
    </>
  );
}
