import { applyCoupon } from "@/services/api/cart-api";
import useSWR from "swr";

export default function useVoucher(code: string) {
  const { data, error, isLoading } = useSWR(
    "/voucher/apply/" + code,
    applyCoupon,
  );

  return {
    coupon: data,
    isLoading,
    isError: error,
  };
}
