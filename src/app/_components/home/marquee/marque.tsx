import CarIcon from "@/components/common/icons/car-icon";
import LeafIcon from "@/components/common/icons/leaf-icon";
import MoneyIcon from "@/components/common/icons/money-icon";
import PhoneIcon from "@/components/common/icons/phone-icon";
import Item from "./item";

export default function Marquee() {
  return (
    <div className="group mx-auto flex max-w-[1920px] justify-start gap-[30px] overflow-hidden bg-white py-[25px]">
      <div className="group-hover:animate_paused ml-[100px] inline-flex animate-marquee gap-[30px] whitespace-nowrap">
        <div className="flex items-center gap-[10px]">
          <LeafIcon size={20} className="text-green_color" />
          <div className="font-quicksand text-[20px] font-semibold leading-normal tracking-[-0.02em] text-primary">
            All Products is Natural
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <MoneyIcon size={20} className="text-yellow-400" />
          <div className="font-quicksand text-[20px] font-semibold leading-normal tracking-[-0.02em] text-primary">
            Money Back Guarantee
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <PhoneIcon size={20} className="text-blue-800" />
          <div className="font-quicksand text-[20px] font-semibold leading-normal tracking-[-0.02em] text-primary">
            24/7 Support
          </div>
        </div>
        <div className="flex items-center gap-[10px]">
          <CarIcon size={20} className="text-blue-800" />
          <div className="font-quicksand text-[20px] font-semibold leading-normal tracking-[-0.02em] text-primary">
            Free Shipping
          </div>
        </div>
      </div>

      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
    </div>
  );
}
