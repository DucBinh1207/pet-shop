import Loading from "@/app/loading";
import useOrderDetail from "@/hooks/users/userOrderDetail";
import { OrderType } from "@/types/order-item";
import convertDate from "@/utils/convert-date";
import OrderProduct from "./order-product";
type props = {
  order: OrderType;
};

export default function OrderDetail({ order: orderData }: props) {
  const orderId = orderData.id;

  const { order, isLoading, isError } = useOrderDetail({ orderId });

  if (isError) window.location.href = "/error";

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex flex-col">
      <h3 className="mb-[10px]">
        Đơn hàng
        <span className="font-bold uppercase text-black"> {order?.id} </span>
        &nbsp;được đặt vào&nbsp;
        <span className="font-bold capitalize text-black">
          {order && convertDate(order?.dateCreated)}
        </span>
        &nbsp;và đang&nbsp;
        <span className="font-bold capitalize text-black">{order?.status}</span>
        .
      </h3>

      <div className="mb-[45px] mt-[30px] flex flex-col">
        <h2 className="mb-[35px] text-[22px] font-medium leading-[28px] text-primary">
          Chi tiết đơn hàng
        </h2>

        <table className="xxx-smallest-screen:block">
          <thead className="xxx-smallest-screen:hidden">
            <tr className="uppercase xxx-smallest-screen:block">
              <th className="w-[70%] border-b border-solid border-light_gray_color_second pb-[15px] text-left text-[13px] font-normal leading-[1]">
                sản phẩm
              </th>
              <th className="border-b border-solid border-light_gray_color_second pb-[15px] text-right text-[13px] font-normal leading-[1]">
                tổng cổng
              </th>
            </tr>
          </thead>

          <tbody>
            {order?.orderItems && (
              <>
                {order.orderItems.map((orderItem, id) => {
                  return <OrderProduct key={id} product={orderItem} />;
                })}
              </>
            )}
          </tbody>

          <tfoot>
            <tr className="uppercase xxx-smallest-screen:block">
              <th className="w-[70%] border-b border-solid border-light_gray_color_second text-left text-[13px] font-normal leading-[1]">
                Tổng phụ :
              </th>
              <td className="border-b border-solid border-light_gray_color_second py-[15px] text-right text-[17px] font-bold leading-[1] tracking-[0.01em] text-primary">
                <span>{order?.subtotalPrice}đ</span>
              </td>
            </tr>

            <tr className="uppercase xxx-smallest-screen:block">
              <th className="w-[70%] border-b border-solid border-light_gray_color_second text-left text-[13px] font-normal leading-[1]">
                Vận chuyện :
              </th>
              <td className="border-b border-solid border-light_gray_color_second py-[15px] text-right text-[17px] font-bold leading-[1] tracking-[0.01em] text-primary">
                <span>{order?.shippingPrice}đ</span>
              </td>
            </tr>

            <tr className="xxx-smallest-screen:block">
              <th className="w-[70%] border-b border-solid border-light_gray_color_second text-left text-[13px] font-normal uppercase leading-[1]">
                Phương thức thanh toán :
              </th>
              <td className="border-b border-solid border-light_gray_color_second py-[15px] text-right text-[15px] font-normal leading-[1.5] tracking-[0.01em] text-primary">
                {order?.paymentMethod}
              </td>
            </tr>

            <tr className="xxx-smallest-screen:block">
              <th className="w-[70%] border-b border-solid border-light_gray_color_second text-left text-[13px] font-normal uppercase leading-[1]">
                Tổng :
              </th>
              <td className="border-b border-solid border-light_gray_color_second py-[15px] text-right font-quicksand text-[24px] font-bold leading-[23px] tracking-[-0.02em] text-secondary">
                <span> {order?.totalPrice}đ</span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="mb-[40px] flex flex-wrap">
        <div className="flex w-[220px] flex-col">
          <h2 className="mb-[35px] text-[22px] font-medium leading-[28px] text-primary">
            Chi tiết hóa đơn
          </h2>
          <ul className="flex flex-col">
            <li>{order?.name}</li>
            <li>{order?.telephoneNumber}</li>
            <li>{order?.email}</li>
          </ul>
        </div>

        <div className="flex w-[220px] flex-col">
          <h2 className="mb-[35px] text-[22px] font-medium leading-[28px] text-primary">
            Địa chỉ
          </h2>
          <ul className="flex flex-col">
            <li>{order?.province}</li>
            <li>{order?.district}</li>
            <li>{order?.ward}</li>
            <li>{order?.street}</li>
          </ul>
        </div>
      </div>

      <div>
        <p>
          {order && order.note && (
            <>
              <i className="font-bold">Ghi chú</i> : {order.note}
            </>
          )}
        </p>
      </div>
    </div>
  );
}
