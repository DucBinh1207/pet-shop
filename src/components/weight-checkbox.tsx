import cn from "@/utils/style/cn";

type props = {
  weight: string;
};

export default function WeightCheckbox({ weight }: props) {
  return (
    <li
      aria-checked={true}
      tabIndex={0}
      data-wvstooltip="red"
      className="m-[2.5px] cursor-pointer list-none"
      title={weight}
      data-title={weight}
      data-value={weight}
      role="radio"
    >
      <span
        className={cn(
          "block rounded-[13px] border border-solid bg-form_color px-[9px] py-[5px] text-center text-[13px] font-medium leading-[16px] tracking-[0.01em] text-primary",
          {
            "border-primary": weight === "1kg",
            "border-form_color": weight !== "1kg",
          },
        )}
      >
        {weight}
      </span>
    </li>
  );
}
