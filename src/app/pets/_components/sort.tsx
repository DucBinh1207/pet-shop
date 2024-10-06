import AngleIcon from "@/components/common/icons/angle-icon";
import { sortName, SortType, SortTypes } from "@/constants/sort-type";
import useClickOutside from "@/hooks/use-click-outside";
import cn from "@/utils/style/cn";
import { useRef, useState } from "react";

type props = {
  sort: SortTypes;
  handleSortFilter: (sort: SortTypes) => void;
};

export default function Sort({ sort, handleSortFilter }: props) {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const ref = useRef(null);
  useClickOutside({
    ref: ref,
    enabled: isSortOpen,
    callback: () => {
      setIsSortOpen(false);
    },
  });

  return (
    <div className="relative flex" ref={ref}>
      <select className="hidden opacity-0">
        <option value={SortType.DEFAULT}>Default sorting</option>
        <option value={SortType.RATING}>Sort by average rating</option>
        <option value={SortType.LATEST}>Sort by latest</option>
        <option value={SortType.PRICE}>Sort by price: low to high</option>
        <option value={SortType.PRICE_DESC}>Sort by price: high to low</option>
      </select>

      <span
        className="flex cursor-pointer items-center gap-[5px]"
        onClick={() => setIsSortOpen(!isSortOpen)}
      >
        {sortName[sort]}
        <AngleIcon
          size={10}
          className="rotate-[180deg] fill-current text-primary"
        />
      </span>

      <ul
        className={cn(
          "absolute left-0 top-full z-[20] mb-[13px] mt-[4px] w-auto flex-col overflow-hidden whitespace-nowrap rounded-[3px] border border-solid border-primary bg-white font-normal leading-[40px] transition-all duration-150 ease-linear",
          {
            "flex max-h-[200px] translate-y-0 scale-y-100 opacity-100":
              isSortOpen,
            "max-h-0 translate-y-[-5px] scale-y-75 opacity-0": !isSortOpen,
          },
        )}
      >
        <li
          className={cn(
            "relative min-h-[40px] cursor-pointer pl-[18px] pr-[29px] outline-none hover:bg-primary hover:text-white",
            { "bg-primary text-white": sort === SortType.DEFAULT },
          )}
          onClick={() => {
            setIsSortOpen(false);
            handleSortFilter(SortType.DEFAULT);
          }}
        >
          Default sorting
        </li>
        <li
          className={cn(
            "relative min-h-[40px] cursor-pointer pl-[18px] pr-[29px] outline-none hover:bg-primary hover:text-white",
            { "bg-primary text-white": sort === SortType.LATEST },
          )}
          onClick={() => {
            setIsSortOpen(false);
            handleSortFilter(SortType.LATEST);
          }}
        >
          Sort by latest
        </li>
        <li
          className={cn(
            "relative min-h-[40px] cursor-pointer pl-[18px] pr-[29px] outline-none hover:bg-primary hover:text-white",
            { "bg-primary text-white": sort === SortType.RATING },
          )}
          onClick={() => {
            setIsSortOpen(false);
            handleSortFilter(SortType.RATING);
          }}
        >
          Sort by average rating
        </li>
        <li
          className={cn(
            "relative min-h-[40px] cursor-pointer pl-[18px] pr-[29px] outline-none hover:bg-primary hover:text-white",
            { "bg-primary text-white": sort === SortType.PRICE },
          )}
          onClick={() => {
            setIsSortOpen(false);
            handleSortFilter(SortType.PRICE);
          }}
        >
          Sort by price: low to high
        </li>
        <li
          className={cn(
            "relative min-h-[40px] cursor-pointer pl-[18px] pr-[29px] outline-none hover:bg-primary hover:text-white",
            { "bg-primary text-white": sort === SortType.PRICE_DESC },
          )}
          onClick={() => {
            setIsSortOpen(false);
            handleSortFilter(SortType.PRICE_DESC);
          }}
        >
          Sort by price: high to low
        </li>
      </ul>
    </div>
  );
}
