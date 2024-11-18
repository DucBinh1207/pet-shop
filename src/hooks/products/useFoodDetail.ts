import { getFoodDetail } from "@/services/api/products-api";
import useSWR from "swr";

type props = {
  id: string;
};

export default function useFoodDetail({ id }: props) {
  const { data, error, isLoading } = useSWR(
    "/products/foods/" + id,
    getFoodDetail,
  );

  return {
    food: data,
    isLoading,
    isError: error,
  };
}
