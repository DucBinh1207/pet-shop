import { getPetDetail } from "@/services/api/products-api";
import useSWR from "swr";

type props = {
  id: string;
};

export default function usePetDetail({ id }: props) {
  const { data, error, isLoading } = useSWR(
    "/products/pets/" + id,
    getPetDetail,
  );

  return {
    pet: data,
    isLoading,
    isError: error,
  };
}
