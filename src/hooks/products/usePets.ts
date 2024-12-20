import { getPets } from "@/services/api/products-api";
import useSWR from "swr";

type props = {
  category?: string;
  sort?: string;
  paging?: number;
  price: (0 | 100000000)[];
  limit?: number;
};

export default function usePets({
  category,
  sort,
  paging,
  price,
  limit=12,
}: props) {
  const params = new URLSearchParams();

  if (category) params.append("category", category);

  if (sort) params.append("sortBy", sort);

  if (paging) params.append("page", paging.toString());

  if (price) {
    params.append("minPrice", price[0].toString());
    params.append("maxPrice", price[1].toString());
  }

  if (limit) {
    params.append("limit", limit.toString());
  }

  const { data, error, isLoading } = useSWR(
    "/products/pets" + "?" + params.toString(),
    getPets,
  );

  return {
    pets: data?.products,
    totalPages: data?.totalPages,
    isLoading,
    isError: error,
  };
}
