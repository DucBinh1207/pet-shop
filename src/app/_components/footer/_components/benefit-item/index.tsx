import CarIcon from "@/components/common/icons/car-icon";
import MoneyIcon from "@/components/common/icons/money-icon";
import QuestionMarkIcon from "@/components/common/icons/question-mark-icon";

type props = {
  value: string;
  icon: "car" | "question" | "money";
};

const IconsMap = {
  car: CarIcon,
  question: QuestionMarkIcon,
  money: MoneyIcon,
};

export default function BenefitItem({ value, icon }: props) {
  const Icon = IconsMap[icon];

  return (
    <li className="my-[25px] flex items-center px-[25px] font-sans text-[21px] font-bold leading-[1.19] tracking-[-0.01em] text-primary large-screen:w-[370px] small-screen:w-[226px] small-screen:text-[18px] smallest-screen:w-full">
      <Icon size={26} className="text-footer_icon mr-[15px] fill-current" />
      {value}
    </li>
  );
}
