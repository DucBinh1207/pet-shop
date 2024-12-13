"use client";

import "swiper/css/pagination";
import cn from "@/utils/style/cn";
import { TabTypes } from "./product-suggestion";
import OverviewTab from "./overview-tab";
import ListProducts from "./list-products";
// import { useRouter } from "next/navigation";

type props = {
  id: TabTypes;
  isSelected: boolean;
};

export default function Content({ id, isSelected }: props) {
  return (
    <div
      className={cn(
        "flex flex-auto animate-fade_in opacity-100 small-screen:flex-wrap",
        {
          "hidden animate-fade_out opacity-0": !isSelected,
        },
      )}
      id={id}
    >
      <OverviewTab id={id} />
      <ListProducts id={id} />
    </div>
  );
}
