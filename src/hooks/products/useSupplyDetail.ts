import { getSupplyDetail } from "@/services/api/products-api";
import useSWR from "swr";

type props = {
  id: string;
};

export default function useSupplyDetail({ id }: props) {
  const { data, error, isLoading } = useSWR(
    "/products/supplies/" + id,
    getSupplyDetail,
  );

  return {
    supply: data,
    isLoading,
    isError: error,
  };
}
