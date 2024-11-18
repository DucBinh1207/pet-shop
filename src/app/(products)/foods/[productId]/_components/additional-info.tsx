import InfoRow from "@/app/(products)/_components/info-row";
import { FoodType } from "@/types/food";

export default function AdditionalInfo({ product }: { product: FoodType }) {
  const listWeight = product.variationsFoods.reduce<string[]>((acc, food) => {
    if (food.weight && !acc.includes(food.weight)) {
      acc.push(food.weight);
    }
    return acc;
  }, []);
  const date = new Date(product.expireDate);
  const formattedDate = date.toLocaleDateString("en-GB");

  return (
    <div className="mx-auto w-full max-w-[950px] px-[35px] text-[14px] font-medium leading-[1.5] tracking-[0.02em] text-text_color">
      <div className="flex items-center justify-center gap-[10px]">
        <table className="min-w-[50%] smallest-screen:w-full xxx-smallest-screen:block">
          <tbody className="flex w-full flex-col items-center xxx-smallest-screen:block">
            <InfoRow name="Loài" value={product.petType} />
            <InfoRow
              name="Nguyên liệu"
              value={product.variationsFoods[0].ingredient}
            />
            <InfoRow name="Thông tin dinh dưỡng" value={product.nutritionInfo} />
            <InfoRow name="Cân nặng" value={listWeight.toString()} />
            <InfoRow name="Ngày hết hạn" value={formattedDate} />
            <InfoRow name="Thương hiệu" value={product.brand} />
          </tbody>
        </table>
      </div>
    </div>
  );
}
