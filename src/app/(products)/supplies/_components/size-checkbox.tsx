import Input from "@/components/common/input";
import { SizeTypes } from "@/constants/size-type";
import cn from "@/utils/style/cn";

type props = {
  size: SizeTypes[];
  sizeType: SizeTypes;
  name: string;
  handleSizeFilter: (sizeCurrent: SizeTypes) => void;
};

export default function SizeCheckbox({
  size,
  sizeType,
  name,
  handleSizeFilter,
}: props) {
  return (
    <li className="group flex items-center gap-[10px] pb-[13px] hover:text-secondary">
      <label htmlFor={sizeType} className="cursor-pointer">
        <Input
          type="checkbox"
          id={sizeType}
          inputSize="form_controls"
          className={cn(
            "relative mr-[7px] cursor-pointer appearance-none rounded-[50%] align-middle after:absolute after:bottom-[1px] after:left-[1px] after:right-[1px] after:top-0",
            {
              "after:bg-checked": size.includes(sizeType),
            },
          )}
          name="weight"
          onClick={() => {
            handleSizeFilter(sizeType);
          }}
        />
        <span className="text-[14px] leading-[1.5] tracking-[0.02em] text-text_color">
          {name}
        </span>
      </label>
    </li>
  );
}
