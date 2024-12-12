import { getUserDetail } from "@/services/api/user-api";
import useSWR from "swr";

export default function useUser() {
  const { data, error, isLoading } = useSWR("/user/info", getUserDetail);

  return {
    user: data,
    isLoading,
    isError: error,
  };
}
