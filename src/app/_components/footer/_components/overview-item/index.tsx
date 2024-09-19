import CarIcon from "@/components/common/icons/car-icon";
import HeartWithDogIcon from "@/components/common/icons/heart_with_dog";

type props = {
  value: string;
  icon: "HEART" | "CAR";
};
const IconsMap = {
  HEART: HeartWithDogIcon,
  CAR: CarIcon,
};

export default function OverviewItem({ value, icon }: props) {
  const Icon = IconsMap[icon];

  return (
    <div className="mb-[30px] flex w-full pr-[20px] text-footer_text_second smallest-screen:flex-col smallest-screen:items-center">
      <div className="mr-[15px] mt-[5px]">
        <Icon size={34} className="relative fill-current text-footer_icon" />
      </div>
      <p className="text-[14px] smallest-screen:text-center">{value}</p>
    </div>
  );
}
