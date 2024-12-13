import { getReviews } from "@/services/api/review-api";
import useSWR, { mutate } from "swr";

export default function useReviews(productId: string) {
  const { data, error, isLoading } = useSWR(
    "/comments/" + productId,
    getReviews,
  );

  const refreshData = () => {
    mutate("/comments/" + productId, null, { revalidate: true });
  };

  return {
    reviews: data,
    isLoading,
    isError: error,
    refresh: refreshData,
  };
}
