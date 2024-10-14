import ReviewForm from "./review-form";
import { useState } from "react";
import Comment from "./comment";
import Pagination from "./pagination";

export default function Reviews() {
  const [paging, setPaging] = useState<number>(2);

  function handlePagingFilter(pagingCurrent: number) {
    setPaging(pagingCurrent);
  }

  return (
    <div className="mx-auto max-w-[770px] px-[35px]">
      <div className="flex flex-col">
        <ul className="flex flex-col">
          <Comment rating={5} />
          <Comment rating={4} />
          <Comment rating={1} />
          <Comment rating={3} />
          <Comment rating={2} />

          <div className="mt-[10px] flex justify-center pb-[30px]">
            <Pagination
              paging={paging}
              handlePagingFilter={handlePagingFilter}
            />
          </div>
        </ul>

        <div className="mt-[30px] flex flex-col">
          <h2 className="mb-[20px] text-[22px] font-bold leading-[1.27] tracking-[0.02em] text-primary">
            Add a review
          </h2>

          <ReviewForm />
        </div>
      </div>
    </div>
  );
}
