import InfoRow from "@/app/(products)/_components/info-row";
import { SupplyType } from "@/types/supply";

export default function AdditionalInfo({ product }: { product: SupplyType }) {
  return (
    <div className="mx-auto w-full max-w-[950px] px-[35px] text-[14px] font-medium leading-[1.5] tracking-[0.02em] text-text_color">
      <div className="flex items-center justify-center gap-[10px]">
        <table className="min-w-[50%] smallest-screen:w-full xxx-smallest-screen:block">
          <tbody className="flex w-full flex-col items-center xxx-smallest-screen:block">
            <InfoRow name="Tên" value={product.name} />
            <InfoRow name="Loài" value={product.type} />
            <InfoRow name="Vật liệu" value={product.material} />
            <InfoRow name="Thương hiệu" value={product.brand} />
          </tbody>
        </table>
      </div>
    </div>
  );
}
