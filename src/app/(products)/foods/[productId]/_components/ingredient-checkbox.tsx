import { IngredientTypes } from "@/constants/ingredient-type";
import cn from "@/utils/style/cn";

type props = {
  ingredient: IngredientTypes;
  ingredientType: IngredientTypes;
  handleIngredientFilter: (colorCurrent: IngredientTypes) => void;
};

export default function IngredientCheckbox({
  ingredient,
  ingredientType,

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
            "relative inline-block h-[35px] w-[35px] cursor-pointer appearance-none rounded-[50%] bg-cover after:absolute after:bottom-[-4px] after:left-[-4px] after:right-[-4px] after:top-[-4px] after:rounded-[4px] after:border after:border-solid after:content-[''] group-hover:after:border-secondary",
            {
              "after:border-secondary": ingredient === ingredientType,
              "after:border-transparent": ingredient !== ingredientType,
              "bg-beef_img": ingredientType === "beef",
              "bg-chicken_img": ingredientType === "chicken",
            },
          )}
          onClick={() => {
            handleIngredientFilter(ingredientType);
          }}
        />
      </label>
    </li>
  );
}
