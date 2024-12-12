import { getOrderItems } from "@/services/api/order-api";
import useSWR from "swr";

export default function useOrderList() {
  const { data, error, isLoading } = useSWR("/orders/user", getOrderItems);

  return {
    orderList: data,
    isLoading,
    isError: error,
  };
}
