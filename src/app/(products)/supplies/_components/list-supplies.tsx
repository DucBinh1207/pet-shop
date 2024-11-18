import SkeletonCard from "@/components/skeleton-card";
import SupplyCard from "@/components/supply-card";
import useSupplies from "@/hooks/products/useSupplies";
import { Dispatch, SetStateAction } from "react";

type props = {
  category?: string;
  sort?: string;
  paging?: number;
  price: (0 | 100000000)[];
  color?: string[];
  size: string[];
  setTotalPages: Dispatch<SetStateAction<number>>;
  setResultNum: Dispatch<SetStateAction<number>>;
};

export default function ListSupplies({
  category,
  sort,
  paging,
  price,
  color,
  size,
  setTotalPages,
  setResultNum,
}: props) {
  const { supplies, totalPages, isLoading, isError } = useSupplies({
    category,
    sort,
    paging,
    price,
    color,
    size,
  });

  if (isError) window.location.href = "/error";

  if (isLoading) {
    return (
      <div className="flex flex-wrap">
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            className="flex large-screen:w-[25%] up-x-small-screen:w-[25%] up-x-smallest-screen:!w-[calc(100%/3)] up-xx-smallest-screen:!w-[50%] xx-smallest-screen:w-full down-xx-smallest-screen:!w-[50%]"
            key={index}
          >
            <SkeletonCard />
          </div>
        ))}
      </div>
    );
  }

  if (supplies && totalPages) {
    setResultNum(supplies.length);
    setTotalPages(totalPages);
  }

  return (
    <div className="flex flex-wrap">
      {supplies &&
        supplies.map((supply) => (
          <div
            className="flex large-screen:w-[25%] up-x-small-screen:w-[25%] up-x-smallest-screen:!w-[calc(100%/3)] up-xx-smallest-screen:!w-[50%] xx-smallest-screen:w-full down-xx-smallest-screen:!w-[50%]"
            key={supply.id}
          >
            <SupplyCard data={supply} />
          </div>
        ))}
    </div>
  );
}
