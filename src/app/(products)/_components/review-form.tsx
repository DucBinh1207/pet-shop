import Button from "@/components/common/button";
import StarIcon from "@/components/common/icons/star-icon";
import cn from "@/utils/style/cn";
import { useState } from "react";

export default function ReviewForm() {
  const [star, setStar] = useState(0);

  return (
    <form className="flex flex-col">
      <div className="mb-[15px] mt-[25px] flex items-center gap-[11px]">
        <span className="flex gap-[2px]">
          {[...Array(star)].map((_, index) => (
            <StarIcon
              size={12}
              className={cn(
                "cursor-pointer fill-current text-dark_yellow_color",
              )}
              key={index}
              onClick={() => {
                setStar(index + 1);
              }}
            />
          ))}

          {[...Array(5 - star)].map((_, index) => (
            <StarIcon
              size={12}
              className={cn(
                "cursor-pointer fill-current text-dark_yellow_color opacity-20",
              )}
              key={index}
              onClick={() => {
                setStar(index + 1 + star);
              }}
            />
          ))}
        </span>

        <span className="text-[13px] font-bold leading-[16px] tracking-[0.01em] text-text_color">
          Your rating *
        </span>
      </div>

      <textarea
        name="comment"
        id="comment"
        placeholder="Your review *"
        className="mt-[10px] min-h-[148px] rounded-[3px] border border-solid border-input_border_color bg-background_color px-[12px] py-[9px] text-[13px] font-medium leading-[16px] tracking-[0.01em] text-primary outline-none"
      />

      <Button
        size="xsm"
        className="mt-[20px] text-center text-[13px] font-bold leading-[16px]"
      >
        Submit
      </Button>
    </form>
  );
}
