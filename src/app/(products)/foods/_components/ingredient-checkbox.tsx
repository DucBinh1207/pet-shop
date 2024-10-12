import { IngredientTypes } from "@/constants/ingredient-type";
import cn from "@/utils/style/cn";

type props = {
  ingredient: IngredientTypes[];
  ingredientType: IngredientTypes;
  name: string;
  handleIngredientFilter: (colorCurrent: IngredientTypes) => void;
};

export default function IngredientCheckbox({
  ingredient,
  ingredientType,
  name,
  handleIngredientFilter,
}: props) {
  return (
    <li className="pb-[13px]">
      <label
        htmlFor={ingredientType}
        className="group inline-flex cursor-pointer items-center gap-[10px] hover:text-secondary"
      >
        <input
          type="checkbox"
          id={ingredientType}
          className={cn(
            "bg-beef_img relative inline-block h-[35px] w-[35px] cursor-pointer appearance-none rounded-[50%] bg-cover after:absolute after:bottom-[-4px] after:left-[-4px] after:right-[-4px] after:top-[-4px] after:rounded-[4px] after:border after:border-solid after:content-[''] group-hover:after:border-secondary",
            {
              "after:border-secondary": ingredient.includes(ingredientType),
              "after:border-transparent": !ingredient.includes(ingredientType),
              "bg-beef_img": ingredientType === "beef",
              "bg-chicken_img": ingredientType === "chicken",
            },
          )}
          onClick={() => {
            handleIngredientFilter(ingredientType);
          }}
        />
        <span className="flex-1"> {name} </span>
      </label>
    </li>
  );
}
