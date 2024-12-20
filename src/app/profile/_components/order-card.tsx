import Button from "@/components/common/button";
import EyeIcon from "@/components/common/icons/eye-icon";
import ToolTip from "@/components/common/tooltip";
import { OrderType } from "@/types/order-item";
import convertDate from "@/utils/convert-date";
import { priceRender } from "@/utils/priceRender";
import { RenderOrderStatus } from "@/utils/renderOrderStatus";

type props = {
  RedirectOrderDetail: (order: OrderType) => void;
  order: OrderType;
};

export default function OrderCard({ RedirectOrderDetail, order }: props) {
  return (
    <tr className="mb-[10px] xx-smallest-screen:block">
      <td className="py-[7px] pr-[15px] xx-smallest-screen:flex xx-smallest-screen:justify-center">
        <div
          onClick={() => RedirectOrderDetail(order)}
          className="cursor-pointer font-bold text-primary hover:text-secondary"
        >
          {order.id}
        </div>
      </td>

      <td className="py-[7px] pr-[15px] xx-smallest-screen:flex xx-smallest-screen:justify-center">
        3 sản phẩm
      </td>
      <td className="py-[7px] pr-[15px] text-center xx-smallest-screen:flex xx-smallest-screen:justify-center">
        {convertDate(order.dateCreated)}
      </td>
      <td className="py-[7px] pr-[15px] xx-smallest-screen:flex xx-smallest-screen:justify-center">
        {priceRender(Number(order.totalPrice)) + "đ"}
      </td>
      <td className="py-[7px] pr-[15px] xx-smallest-screen:flex xx-smallest-screen:justify-center">
        {RenderOrderStatus(order.status)}
      </td>
      <td className="py-[7px] text-center xx-smallest-screen:flex xx-smallest-screen:justify-center">
        <ToolTip
          value="Xem đơn hàng"
          element={
            <Button
              size="none"
              variant="none"
              onClick={() => RedirectOrderDetail(order)}
              startIcon={
                <EyeIcon
                  size={18}
                  className="fill-current text-primary hover:text-secondary"
                />
              }
            />
          }
        />
      </td>
    </tr>
  );
}
