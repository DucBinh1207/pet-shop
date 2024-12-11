import { getCartItems } from "@/services/api/cart-api";
import useSWR, { mutate } from "swr";

export default function useCartItems() {
  const { data, error, isLoading } = useSWR("/cartItems", getCartItems);

  const refreshData = () => {
    mutate("/cartItems", null, { revalidate: true });
  };

  return {
    cartItems: data,
    isLoading,
    isError: error,
    refresh: refreshData,
  };
}
