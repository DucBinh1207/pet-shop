import OrderCard from "./order-card";
import { useRouter } from "next/navigation";
import Button from "@/components/common/button";
import { OrderType } from "@/types/order-item";

type props = {
  orderList: OrderType[];
  RedirectOrderDetail: (order: OrderType) => void;
};

export default function OrderList({ RedirectOrderDetail, orderList }: props) {
  const orderNum = orderList.length;
  const router = useRouter();

  if (orderNum === 0) {
    return (
      <div className="flex flex-col gap-[20px]">
        <h3 className="mb-[10px]">Không có đơn hàng nào được tạo.</h3>
        <div>
          <Button
            variant={"primary"}
            size="sm"
            onClick={() => {
              router.push("/");
            }}
          >
            Tìm sản phẩm
          </Button>
        </div>
      </div>
    );
  }

  return (
    <table className="mt-[20px] w-full xx-smallest-screen:block">
      <thead className="w-full border-b border-solid border-light_gray_color_second xx-smallest-screen:hidden">
        <tr className="w-full text-left text-[13px] uppercase leading-[1] tracking-[0.02em] text-text_color xx-smallest-screen:block">
          <th className="w-[15%] pb-[15px] font-normal">Đơn hàng</th>
          <th className="w-[15%] pb-[15px] font-normal">Sản phẩm</th>
          <th className="w-[35%] pb-[15px] text-center font-normal">
            Ngày đặt hàng
          </th>
          <th className="w-[15%] pb-[15px] font-normal">Tổng</th>
          <th className="w-[25%] pb-[15px] font-normal">Trạng thái</th>
          <th className="w-[10%] pb-[15px] font-normal">Xem</th>
        </tr>
      </thead>
      <tbody className="w-full text-left xx-smallest-screen:block">
        {orderList.map((orderItem, id) => {
          return (
            <OrderCard
              order={orderItem}
              key={id}
              RedirectOrderDetail={RedirectOrderDetail}
            />
          );
        })}
      </tbody>
    </table>
  );
}
