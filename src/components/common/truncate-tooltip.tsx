import cn from "@/utils/style/cn";
import { useLayoutEffect, useRef, useState } from "react";

type Props = {
  value: string;
  spanClass?: string;
};

export default function TruncateToolTip({ value, spanClass }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const [enable, setEnable] = useState(true);
  const truncateTooltip = (
    <span
      className={cn(
        "tooltip_animate invisible absolute bottom-[calc((100%+10px))] right-[calc(50%-21px)] inline-flex max-w-[100px] translate-y-[7px] scale-[0.7] rounded-[15px] bg-primary px-[9px] py-[6px] text-center text-[10px] font-bold uppercase leading-[13px] tracking-[0.025em] text-white opacity-0 after:absolute after:bottom-[-10px] after:right-[15px] after:block after:border-[6px] after:border-solid after:border-transparent after:border-t-primary after:content-[''] group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100",
      )}
    >
      {value}
    </span>
  );

  useLayoutEffect(() => {
    if (ref.current) {
      setEnable(ref.current.clientHeight < ref.current.scrollHeight);
    }
  }, []);

  return (
    <div className="group relative inline-block">
      {enable && truncateTooltip}
      <span ref={ref} className={spanClass}>
        {value}
      </span>
    </div>
  );
}
