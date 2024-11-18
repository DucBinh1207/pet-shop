import cn from "@/utils/style/cn";
import Paging from "./paging";
import ArrowIcon from "@/components/common/icons/arrow-icon";

type Props = {
  paging: number;
  totalPages: number;
  handlePagingFilter: (paging: number) => void;
};

export default function Pagination({
  paging,
  totalPages,
  handlePagingFilter,
}: Props) {
  return (
    <ul className="flex flex-wrap items-center justify-center text-[18px] font-medium leading-[27px] tracking-[0.02em] text-text_color">
      <li className="m-[2.5px]">
        <button
          className={cn(
            "hover_animate inline-flex h-[50px] w-[50px] items-center justify-center rounded-[50%] border-[2px] border-solid border-primary bg-white text-center uppercase text-primary outline-none",
            {
              "pointer-events-none cursor-default opacity-25": paging === 1,
              "cursor-pointer hover:bg-primary hover:text-white": paging !== 1,
            },
          )}
          onClick={() => {
            if (paging > 1) {
              handlePagingFilter(paging - 1);
            }
          }}
        >
          <ArrowIcon size={17} className="fill-current" />
        </button>
      </li>

      {paging > 1 && (
        <Paging
          pageNum={1}
          pageCurrent={paging}
          handlePagingFilter={handlePagingFilter}
        />
      )}

      {paging > 3 && (
        <li className="m-[2.5px]">
          <span className="hover_animate inline-flex h-[50px] w-[50px] cursor-default items-center justify-center rounded-[50%] border-[2px] border-solid border-primary bg-white text-center uppercase text-primary outline-none">
            ...
          </span>
        </li>
      )}

      {paging > 2 && (
        <Paging
          pageNum={paging - 1}
          pageCurrent={paging}
          handlePagingFilter={handlePagingFilter}
        />
      )}

      <Paging
        pageNum={paging}
        pageCurrent={paging}
        handlePagingFilter={handlePagingFilter}
      />

      {paging < totalPages - 1 && (
        <Paging
          pageNum={paging + 1}
          pageCurrent={paging}
          handlePagingFilter={handlePagingFilter}
        />
      )}

      {paging < totalPages - 2 && (
        <li className="m-[2.5px]">
          <span className="hover_animate inline-flex h-[50px] w-[50px] cursor-default items-center justify-center rounded-[50%] border-[2px] border-solid border-primary bg-white text-center uppercase text-primary outline-none">
            ...
          </span>
        </li>
      )}

      {paging < totalPages && (
        <Paging
          pageNum={totalPages}
          pageCurrent={paging}
          handlePagingFilter={handlePagingFilter}
        />
      )}

      <li className="m-[2.5px]">
        <button
          className={cn(
            "hover_animate inline-flex h-[50px] w-[50px] items-center justify-center rounded-[50%] border-[2px] border-solid border-primary bg-white text-center uppercase text-primary outline-none",
            {
              "pointer-events-none cursor-default opacity-25":
                paging === totalPages,
              "cursor-pointer hover:bg-primary hover:text-white":
                paging !== totalPages,
            },
          )}
          onClick={() => {
            if (paging < totalPages) {
              handlePagingFilter(paging + 1);
            }
          }}
        >
          <ArrowIcon size={17} className="rotate-[180deg] fill-current" />
        </button>
      </li>
    </ul>
  );
}
