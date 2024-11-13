import InfoRow from "@/app/(products)/_components/info-row";
import { PetType } from "@/types/pet";

export default function AdditionalInfo({ product }: { product: PetType }) {
  return (
    <div className="mx-auto w-full max-w-[950px] px-[35px] text-[14px] font-medium leading-[1.5] tracking-[0.02em] text-text_color">
      <div className="flex items-center justify-center gap-[10px]">
        <table className="min-w-[50%] smallest-screen:w-full xxx-smallest-screen:block">
          <tbody className="flex w-full flex-col items-center xxx-smallest-screen:block">
            <InfoRow name="Tên" value={product.name} />
            <InfoRow name="Giống" value={product.type} />
            <InfoRow name="Giới tính" value={product.gender} />
            <InfoRow name="Sức khỏe" value={product.health} />
            <InfoRow name="Cha" value={product.father} />
            <InfoRow name="Mẹ" value={product.mother} />
            <InfoRow name="Xổ giun" value={product.deworming} />
            <InfoRow name="Tiêm phòng" value={product.vaccine} />
            <InfoRow name="Thuần chủng" value={product.breed} />
            <InfoRow name="Traits" value={product.traits} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

