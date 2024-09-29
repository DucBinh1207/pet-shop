import { Order } from "@/types/order";
import OrderCard from "./order-card";
import Button from "@/components/common/button";
import { useRouter } from "next/navigation";

type props = {
  orderList: Order[];
  RedirectOrderDetail: () => void;
};

export default function OrderList({ RedirectOrderDetail, orderList }: props) {
  const orderNum = orderList.length;
  const router = useRouter();

  if (orderNum === 0) {
    return (
      <div className="flex flex-col gap-[20px]">
        <h3 className="mb-[10px]">No order has been made yet.</h3>
        <div>
          <Button
            variant={"primary"}
            size="sm"
            onClick={() => {
              router.push("/");
            }}
          >
            browser products
          </Button>
        </div>
      </div>
    );
  }

  return (
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

        <OrderCard RedirectOrderDetail={RedirectOrderDetail} />

        <OrderCard RedirectOrderDetail={RedirectOrderDetail} />
      </tbody>
    </table>
  );
}
