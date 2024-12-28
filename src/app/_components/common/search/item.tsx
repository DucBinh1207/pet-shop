import { SearchItemType } from "@/types/search-item";
import Image from "next/image";
import { useRouter } from "next/navigation";

type props = {
  product: SearchItemType;
  handleCancel: () => void;
};

export default function Item({ product, handleCancel }: props) {
  const url = "/" + product.category + "/" + product.id;
  const router = useRouter();

  return (
    <div
      className="flex cursor-pointer gap-[30px]"
      onClick={() => {
        handleCancel();
        router.push(url);
      }}
    >
      <div className="relative h-[100px] w-[100px]">
        <Image
          src={product.image}
          width={100}
          height={100}
          alt="anc"
          className="object-cover"
        />
      </div>
      <div className="flex w-full flex-col gap-[10px]">
        <div className="text-[20px] font-bold leading-[1.35] tracking-[-0.01em] text-primary">
          {product.name}
        </div>
        <div className="text-[13px] font-normal leading-[1.3] tracking-[0.02em] text-text_color">
          {product.description}
        </div>
        <div className="text-[18px] font-bold leading-[1] tracking-[-0.005em] text-secondary">
          {product.price}
        </div>
      </div>
    </div>
  );
}
