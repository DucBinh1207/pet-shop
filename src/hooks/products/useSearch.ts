import { searchProducts } from "@/services/api/products-api";
import useSWR, { mutate } from "swr";
import { useEffect } from "react";

export default function useSearch(search: string) {
  const params = new URLSearchParams();
  if (search !== "") params.append("name", search);

  const { data, error, isLoading } = useSWR(
    search !== "" ? "/products/search/?" + params.toString() : null,
    searchProducts,
  );

  const refreshData = (search: string) => {
    const params = new URLSearchParams();
    if (search !== "") params.append("name", search);

    mutate("/products/search/?" + params.toString(), null, {
      revalidate: true,
    });
  };

  useEffect(() => {
    if (search !== "") {
      refreshData(search);
    }
  }, [search]);

  return {
    products: data,
    isLoading,
    isError: error,
    refresh: refreshData,
  };
}
