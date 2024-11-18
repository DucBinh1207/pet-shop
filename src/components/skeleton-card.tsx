export default function SkeletonCard() {
  return (
    <div className="border-box flex min-w-[232px] flex-1 transform flex-col border border-solid border-light_gray_color_second bg-white small-screen:min-w-[25%] x-small-screen:min-w-[calc(100%/3)] x-smallest-screen:min-w-[50%]">
      {/* Skeleton for image */}
      <div className="relative w-full animate-pulse overflow-hidden bg-gray-300 pb-[85%]">
        {/* Đặt ảnh skeleton */}
        <div className="h-full w-full bg-gray-400"></div>
      </div>

      {/* Skeleton for text */}
      <div className="relative flex flex-auto flex-col justify-between px-[30px] pt-[20px]">
        <div className="flex flex-col">
          <div className="mb-2 h-5 w-3/5 animate-pulse bg-gray-400"></div>{" "}
          {/* Skeleton Title */}
          <div className="mb-2 h-4 w-4/5 animate-pulse bg-gray-400"></div>{" "}
          {/* Skeleton Description */}
          {/* Skeleton for rating */}
          <div className="mb-2 flex gap-1">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="h-3 w-3 animate-pulse rounded-full bg-gray-400"
              ></div> // Skeleton for star
            ))}
          </div>
        </div>

        {/* Skeleton for category */}
        <div className="mt-[15px] flex flex-wrap items-center gap-[5px] text-[13px] font-normal leading-[16px] tracking-[0.02em] text-primary">
          <div className="h-3 w-20 animate-pulse bg-gray-400"></div>{" "}
          {/* Skeleton Category */}
          <div className="h-3 w-20 animate-pulse bg-gray-400"></div>{" "}
          {/* Skeleton Category */}
        </div>
      </div>

      {/* Skeleton for price */}
      <form className="flex flex-col gap-[12.5px] px-[30px] pb-[30px] pt-[15px]">
        <div className="flex items-center justify-between xxx-smallest-screen:flex-col xxx-smallest-screen:gap-[10px]">
          <div className="h-5 w-1/2 animate-pulse bg-gray-400"></div>{" "}
          {/* Skeleton Price */}
          <div className="h-10 w-10 animate-pulse rounded-full bg-gray-400"></div>{" "}
          {/* Skeleton Button */}
        </div>
      </form>
    </div>
  );
}
