import Button from "@/components/common/button";
import { FoodsCategoryType } from "@/constants/foods-category-type";
import { SuppliesCategoryType } from "@/constants/supplies-category-type";
import useFoodsOption from "@/store/use-foods-option";
import useSuppliesOption from "@/store/use-supplies-option";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useShallow } from "zustand/react/shallow";

type props = {
  type: "toys" | "foods" | "clothes" | "cage";
  order: number;
};

const CardMaps = {
  toys: {
    label: "Đồ chơi",
    description: "Vui và thú vị",
    image: "/assets/images/toys.jpg",
    link: "/supplies",
  },
  foods: {
    label: "Thức ăn khô",
    description: "Ngon và bổ dưỡng",
    image: "/assets/images/foods.jpg",
    link: "/foods",
  },
  clothes: {
    label: "Trang phục thú cưng",
    description: "Thời trang và phong cách",
    image: "/assets/images/clothes.jpg",
    link: "/supplies",
  },
  cage: {
    label: "Chuồng và phụ kiện",
    description: "An toàn và thoải mái",
    image: "/assets/images/cage.jpg",
    link: "/supplies",
  },
};

export default function Item({ type, order }: props) {
  const router = useRouter();

  const cardItem = CardMaps[type];

  const { foodsOption, setFoodsOption } = useFoodsOption(
    useShallow((state) => ({
      foodsOption: state.foodsOption,
      setFoodsOption: state.setFoodsOption,
    })),
  );

  const { suppliesOption, setSuppliesOption } = useSuppliesOption(
    useShallow((state) => ({
      suppliesOption: state.suppliesOption,
      setSuppliesOption: state.setSuppliesOption,
    })),
  );

  function handleClickButton() {
    if (type === "foods") {
      setFoodsOption({
        ...foodsOption,
        category: FoodsCategoryType.DRY,
      });
      router.push(cardItem.link);
    } else if (type === "toys") {
      setSuppliesOption({
        ...suppliesOption,
        category: SuppliesCategoryType.TOY,
      });
      router.push(cardItem.link);
    } else if (type === "cage") {
      setSuppliesOption({
        ...suppliesOption,
        category: SuppliesCategoryType.BEDDING,
      });
      router.push(cardItem.link);
    } else {
      setSuppliesOption({
        ...suppliesOption,
        category: SuppliesCategoryType.CLOTHING,
      });
      router.push(cardItem.link);
    }
  }

  return (
    <div
      style={{ order }}
      className="relative min-h-[200px] overflow-hidden px-[7.5px] up-xx-large-screen:w-[25%] down-xx-large-screen:min-w-[calc(100%/3)] up-large-screen:min-w-[50%] smallest-screen:min-w-[100%]"
    >
      <div className="relative overflow-hidden rounded-[8px]">
        <div className="relative z-[10] flex flex-col px-[35px] py-[48.75px]">
          <span className="hover_animate cursor-default font-quicksand text-[31px] font-bold leading-[1.03] tracking-[-0.005em] text-white hover:text-primary">
            {cardItem.label}
          </span>
          <span className="leading-[1.17 ] hover_animate mt-[15px] cursor-default font-quicksand text-[18px] font-normal tracking-[0.005em] text-white hover:text-primary">
            {cardItem.description}
          </span>
          <span className="mt-[30px]">
            <Button
              variant="tertiary"
              size="xsm"
              className="text-center text-[13px] font-bold uppercase leading-[16px] tracking-[0.05em]"
              onClick={handleClickButton}
            >
              Mua ngay
            </Button>
          </span>
        </div>
        <Image src={cardItem.image} fill alt="pet thing" />
      </div>
    </div>
  );
}
