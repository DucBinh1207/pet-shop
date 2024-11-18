import { ColorMapping, ColorTypes } from "@/constants/color-type";
import cn from "@/utils/style/cn";

type props = {
  color: ColorTypes[];
  colorType: ColorTypes;
  name?: string;
  handleColorFilter: (colorCurrent: ColorTypes) => void;
};

export default function ColorCheckbox({
  color,
  colorType,
  name,
  handleColorFilter,
}: props) {
  return (
    <li className="pb-[13px]">
      <label
        htmlFor={colorType}
        className="group inline-flex cursor-pointer items-center gap-[10px] hover:text-secondary"
      >
        <input
          type="checkbox"
          id={colorType}
          onClick={() => {
            handleColorFilter(colorType);
          }}
          className={cn(
            "relative inline-block h-[22px] w-[22px] cursor-pointer appearance-none rounded-[50%] outline outline-[1px] outline-light_gray_color_second after:absolute after:bottom-[-4px] after:left-[-4px] after:right-[-4px] after:top-[-4px] after:rounded-[50%] after:border after:border-solid after:content-[''] group-hover:after:border-secondary",
            {
              "after:border-secondary": color.includes(colorType),
              "after:border-transparent": !color.includes(colorType),
            },
          )}
          style={{ backgroundColor: ColorMapping[colorType as ColorTypes] }}
        />
        {name && <span className="flex-1"> {name} </span>}
      </label>
    </li>
  );
}
