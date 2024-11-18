import InfoRow from "@/app/(products)/_components/info-row";
import { PetType } from "@/types/pet";

export default function AdditionalInfo({ product }: { product: PetType }) {

  return (
    <div className="mx-auto w-full max-w-[950px] px-[35px] text-[14px] font-medium leading-[1.5] tracking-[0.02em] text-text_color">
      <div className="flex items-center justify-center gap-[10px]">
        <table className="min-w-[50%] smallest-screen:w-full xxx-smallest-screen:block">
          <tbody className="flex w-full flex-col items-center xxx-smallest-screen:block">
            <InfoRow name="Tên" value={product.name} />
            <InfoRow name="Loài" value={product.variationsPets[0].type} />
            <InfoRow
              name="Giới tính"
              value={product.variationsPets[0].gender ? "Đực" : "Cái"}
            />
            <InfoRow name="Sức khỏe" value={product.variationsPets[0].health} />
            <InfoRow name="Cha" value={product.variationsPets[0].father} />
            <InfoRow name="Mẹ" value={product.variationsPets[0].mother} />
            <InfoRow
              name="Xổ giun"
              value={product.variationsPets[0].deworming}
            />
            <InfoRow
              name="Tiêm phòng"
              value={product.variationsPets[0].vaccine}
            />
            <InfoRow
              name="Thuần chủng"
              value={product.variationsPets[0].breed}
            />
            <InfoRow name="Tính cách" value={product.variationsPets[0].trait} />
          </tbody>
        </table>
      </div>
    </div>
  );
}
