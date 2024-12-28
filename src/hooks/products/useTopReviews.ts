import { getReviews } from "@/services/api/review-api";
import useSWR, { mutate } from "swr";

export default function useTopReviews() {
  const { data, error, isLoading } = useSWR(
    "/comments/topComments",
    getReviews,
  );

  const refreshData = () => {
    mutate("/comments/topComments", null, { revalidate: true });
  };

  return {
    reviews: data?.comments,
    isLoading,
    isError: error,
    refresh: refreshData,
  };
}
