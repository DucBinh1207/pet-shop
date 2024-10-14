import cn from "@/utils/style/cn";

export default function Paging({
  pageNum,
  pageCurrent,
  handlePagingFilter,
}: {
  pageNum: number;
  pageCurrent: number;
  handlePagingFilter: (pageNum: number) => void;
}) {
  return (
    <li className="m-[2.5px]">
      <button
        type="button"
        className={cn(
          "hover_animate inline-block h-[50px] w-[50px] cursor-pointer rounded-[50%] border-[2px] border-solid border-primary text-center uppercase outline-none hover:bg-primary hover:text-white",
          {
            "bg-primary text-white": pageCurrent === pageNum,
            "bg-white text-primary": pageCurrent !== pageNum,
          },
        )}
        onClick={() => {
          handlePagingFilter(pageNum);
        }}
      >
        {pageNum}
      </button>
    </li>
  );
}
