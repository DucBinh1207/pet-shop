import { IngredientTypes } from "@/constants/ingredient-type";
import cn from "@/utils/style/cn";

type props = {
  ingredient: IngredientTypes[];
  ingredientType: IngredientTypes;
  name?: string;
  isAvailable: boolean;
  handleIngredientFilter?: (colorCurrent: IngredientTypes) => void;
};

export default function IngredientCheckbox({
  ingredient,
  ingredientType,
  name,
  isAvailable,
  handleIngredientFilter,
}: props) {
  return (
    <li>
      <label
        htmlFor={ingredientType}
        className="group inline-flex cursor-pointer items-center gap-[10px] hover:text-secondary"
      >
        <input
          type="checkbox"
          id={ingredientType}
          className={cn(
            "relative inline-block h-[35px] w-[35px] cursor-pointer appearance-none rounded-[50%] bg-cover after:absolute after:bottom-[-4px] after:left-[-4px] after:right-[-4px] after:top-[-4px] after:flex after:items-center after:justify-center after:rounded-[4px] after:border after:border-solid after:text-[15px] after:text-primary group-hover:after:border-secondary",
            {
              "after:border-secondary": ingredient.includes(ingredientType),
              "after:border-transparent": !ingredient.includes(ingredientType),
              "after:content-['Bò']": ingredientType === "Bò",
              "after:content-['Gà']": ingredientType === "Gà",
              "after:content-['Cá']": ingredientType === "Cá",
              "after:content-['Heo']": ingredientType === "Heo",
              "after:content-['Khác']": ingredientType === "Khác",
              "opacity-30": !isAvailable,
            },
          )}
          onClick={() => {
            if (handleIngredientFilter) handleIngredientFilter(ingredientType);
          }}
        />
        {name && <span className="flex-1"> {name} </span>}
      </label>
    </li>
  );
}
