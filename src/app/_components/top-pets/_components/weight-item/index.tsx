import cn from "@/utils/style/cn";

export default function WeightItem({
  weight,
  isChecked,
}: {
  weight: string;
  isChecked: boolean;
}) {
  return (
    <>
      <li
        aria-checked={isChecked}
        tabIndex={0}
        data-wvstooltip={weight}
        className="m-[2.5px] cursor-pointer list-none"
        title={weight}
        data-title={weight}
        data-value={weight}
        role="radio"
      >
        <span
          className={cn(
            "bg-form_color block rounded-[13px] border border-solid px-[9px] py-[5px] text-center text-[13px] font-medium leading-[16px] tracking-[0.01em] text-primary",
            {
              "border-primary": isChecked,
              "border-form_color": !isChecked,
            },
          )}
        >
          {weight}
        </span>
      </li>
    </>
  );
}
