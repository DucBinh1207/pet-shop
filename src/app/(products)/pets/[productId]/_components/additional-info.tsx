import InfoRow from "@/app/(products)/_components/info-row";
import { PetType } from "@/types/pet";

export default function AdditionalInfo({ product }: { product: PetType }) {
  return (
    <div className="mx-auto w-full max-w-[950px] px-[35px] text-[14px] font-medium leading-[1.5] tracking-[0.02em] text-text_color">
      <div className="flex items-center justify-center gap-[10px]">
        <table className="min-w-[50%] smallest-screen:w-full xxx-smallest-screen:block">
          <tbody className="flex w-full flex-col items-center xxx-smallest-screen:block">
            <InfoRow name="Name" value={product.name} />
            <InfoRow name="Type" value={product.type} />
            <InfoRow name="Gender" value={product.gender} />
            <InfoRow name="Health" value={product.health} />
            <InfoRow name="Father" value={product.father} />
            <InfoRow name="Mother" value={product.mother} />
            <InfoRow name="Deworming" value={product.deworming} />
            <InfoRow name="Vaccine" value={product.breed} />
            <InfoRow name="Breed" value={product.breed} />
            <InfoRow name="Traits" value={product.traits} />
            <InfoRow name="Breed" value={product.breed} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

