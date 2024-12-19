import { getFoods } from "@/services/api/products-api";
import useSWR from "swr";

type props = {
  category?: string;
  sort?: string;
  paging?: number;
  price: (0 | 100000000)[];
  ingredient?: string[];
  weight: number;
  limit?: number;
};

export default function useFoods({
  category,
  sort,
  paging,
  price,
  ingredient,
  weight,
  limit = 12,
}: props) {
  const params = new URLSearchParams();

  console.log(category);

  if (sort) params.append("sortBy", sort);

  if (paging) params.append("page", paging.toString());

  if (price) {
    params.append("minPrice", price[0].toString());
    params.append("maxPrice", price[1].toString());
  }

  if (ingredient) {
    if (ingredient.length === 2) {
      params.append("ingredient", "all");
    } else {
      ingredient.forEach((ingredientValue) => {
        params.append("ingredient", ingredientValue);
      });
    }
  }

  if (weight) {
    params.append("weight", weight.toString());
  }

  if (limit) {
    params.append("limit", limit.toString());
  }

  const { data, error, isLoading } = useSWR(
    "/products/foods" + "?" + params.toString(),
    getFoods,
  );

  return {
    foods: data?.products,
    totalPages: data?.totalPages,
    isLoading,
    isError: error,
  };
}
