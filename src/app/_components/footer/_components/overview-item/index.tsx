import CarIcon from "@/components/common/icons/car-icon";
import HeartWithDogIcon from "@/components/common/icons/heart_with_dog";

type props = {
  value: string;
  icon: "heart" | "car";
};
const IconsMap = {
  heart: HeartWithDogIcon,
  car: CarIcon,
};

export default function OverviewItem({ value, icon }: props) {
  const Icon = IconsMap[icon];
  return (
    <div className="text-footer_text_second mb-[30px] flex w-full pr-[20px] smallest-screen:flex-col smallest-screen:items-center">
      <div className="mr-[15px] mt-[5px]">
        <Icon size={34} className="text-footer_icon relative fill-current" />
      </div>
      <p className="text-[14px] smallest-screen:text-center">{value}</p>
    </div>
  );
}
