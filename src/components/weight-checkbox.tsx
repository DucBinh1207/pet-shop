import cn from "@/utils/style/cn";

type props = {
  weight: string[];
  weightValue: string;
  isAvailable: boolean;
  handleWeightFilter?: (weightCurrent: string) => void;
};

export default function WeightCheckbox({
  weight,
  weightValue,
  isAvailable,
  handleWeightFilter,
}: props) {
  return (
    <li
      aria-checked={true}
      tabIndex={0}
      data-wvstooltip="red"
      className="m-[2.5px] cursor-pointer list-none"
      data-title={weightValue}
      data-value={weightValue}
      role="radio"
    >
      <span
        className={cn(
          "block rounded-[13px] border border-solid bg-form_color px-[9px] py-[5px] text-center text-[13px] font-medium leading-[16px] tracking-[0.01em] text-primary",
          {
            "border-primary": weight.includes(weightValue),
            "border-form_color": !weight.includes(weightValue),
            "opacity-20": !isAvailable,
          },
        )}
        onClick={() => {
          if (handleWeightFilter) handleWeightFilter(weightValue);
        }}
      >
        {weightValue}
      </span>
    </li>
  );
}
