import { FoodType } from "@/types/food";

export default function AdditionalInfo({ product }: { product: FoodType }) {
  return (
    <div className="mx-auto w-full max-w-[950px] px-[35px] text-[14px] font-medium leading-[1.5] tracking-[0.02em] text-text_color">
      <div className="flex items-center justify-center gap-[10px]">
        <table className="min-w-[50%] smallest-screen:w-full xxx-smallest-screen:block">
          <tbody className="flex w-full flex-col items-center xxx-smallest-screen:block">
            <InfoRow name="Type" value={product.petType} />
            <InfoRow name="Ingredients" value={product.ingredient} />
            <InfoRow name="Nutrition Info" value={product.nutrition_info} />
            <InfoRow name="Weight" value={product.weight} />
            <InfoRow name="Expire Date" value={product.expire_date} />
            <InfoRow name="Brand" value={product.brand} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

function InfoRow({
  name,
  value,
}: {
  name: string;
  value: string | number | null;
}) {
  if (!value) return null;

  return (
    <tr className="flex w-full border-b border-solid border-light_gray_color_second text-left">
      <th className="min-w-[50%] py-[14px] font-bold text-primary">{name} :</th>
      <td className="min-w-[50%] py-[14px]">{value}</td>
    </tr>
  );
}
