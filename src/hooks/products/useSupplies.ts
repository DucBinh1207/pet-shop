import { getSupplies } from "@/services/api/products-api";
import useSWR from "swr";

type props = {
  category?: string;
  sort?: string;
  paging?: number;
  price: (0 | 100000000)[];
  color?: string[];
  size: string[];
  limit?: number;
};

export default function useSupplies({
  category,
  sort,
  paging,
  price,
  color,
  size,
  limit,
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
    "/products/supplies" + "?" + params.toString(),
    getSupplies,
  );

  return {
    supplies: data?.products,
    totalPages: data?.totalPages,
    isLoading,
    isError: error,
  };
}
