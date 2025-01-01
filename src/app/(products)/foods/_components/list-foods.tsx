import FoodCard from "@/components/food-card";
import SkeletonCard from "@/components/skeleton-card";
import useFoods from "@/hooks/products/useFoods";
import { Dispatch, SetStateAction } from "react";

type props = {
  category: string;
  sort: string;
  paging: number;
  price: (0 | 100000000)[];
  ingredient?: string[];
  weight: number;
  setTotalPages: Dispatch<SetStateAction<number>>;
  setResultNum: Dispatch<SetStateAction<number>>;
};

export default function ListFoods({
  category,
  sort,
  paging,
  price,
  ingredient,
  weight,
  setTotalPages,
  setResultNum,
}: props) {
  const { foods, totalPages, totalRecords, isLoading, isError } = useFoods({
    category,
    sort,
    paging,
    price,
    ingredient,
    weight,
  });

  if (isError) return <></>;

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

  if (foods && totalPages && totalRecords) {
    setResultNum(totalRecords);
    setTotalPages(totalPages);
  }

  return (
    <div className="flex flex-wrap">
      {foods &&
        foods.map((food) => (
          <div
            className="flex large-screen:w-[25%] up-x-small-screen:w-[25%] up-x-smallest-screen:!w-[calc(100%/3)] up-xx-smallest-screen:!w-[50%] xx-smallest-screen:w-full down-xx-smallest-screen:!w-[50%]"
            key={food.id}
          >
            <FoodCard data={food} />
          </div>
        ))}
    </div>
  );
}
