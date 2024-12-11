import { getOrderDetail } from "@/services/api/order-api";
import useSWR from "swr";

type props = {
  orderId: string;
};

export default function useOrderDetail({ orderId }: props) {
  console.log(orderId);
  const { data, error, isLoading } = useSWR(
    "/orders/user/details?id_order=" + orderId,
    getOrderDetail,
  );

  return {
    order: data?.order,
    isLoading,
    isError: error,
  };
}
