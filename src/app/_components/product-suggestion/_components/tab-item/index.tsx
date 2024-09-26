import cn from "@/utils/style/cn";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type props = {
  name: string;
  href: string;
  order: number;
  tab: number;
  setTab: Dispatch<SetStateAction<number>>;
};

export default function TabItem({ name, href, order, tab, setTab }: props) {
  return (
    <div
      className={cn(
        "z-10 border-b-[2px] border-solid pb-[23px] text-[22px] font-medium leading-[1.27] text-primary",
        {
          "border-b-primary": order === tab,
        },
      )}
    >
      <Link
        href={href}
        prefetch={false}
        scroll={false}
        onClick={() => {
          setTab(order);
          return;
        }}
      >
        {name}
      </Link>
    </div>
  );
}
