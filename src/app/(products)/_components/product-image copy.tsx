import Image from "next/image";

export default function ProductImage() {
  return (
    <div className="relative w-full pb-[80%]">
      <Image src="/assets/images/food-detail.jpg" fill alt="whole hearted" />
    </div>
  );
}
