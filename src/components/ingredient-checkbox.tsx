import { IngredientTypes } from "@/constants/ingredient-type";
import cn from "@/utils/style/cn";

type props = {
  ingredient: IngredientTypes | IngredientTypes[];
  ingredientType: IngredientTypes;
  name?: string;
  handleIngredientFilter: (colorCurrent: IngredientTypes) => void;
};

export default function IngredientCheckbox({
  ingredient,
  ingredientType,
  name,
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
              "after:border-secondary":
                (ingredient === ingredientType &&
                  typeof ingredient === "string") ||
                (ingredient.includes(ingredientType) &&
                  Array.isArray(ingredient)),
              "after:border-transparent":
                (ingredient !== ingredientType &&
                  typeof ingredient === "string") ||
                (!ingredient.includes(ingredientType) &&
                  Array.isArray(ingredient)),
              "bg-beef_img": ingredientType === "beef",
              "bg-chicken_img": ingredientType === "chicken",
            },
          )}
          onClick={() => {
            handleIngredientFilter(ingredientType);
          }}
        />
        {name && <span className="flex-1"> {name} </span>}
      </label>
    </li>
  );
}
