import ArrowIcon from "@/components/common/icons/arrow-icon";
import Image from "next/image";
import { TabType, TabTypes } from "./product-suggestion";
import { useRouter } from "next/navigation";
import { useShallow } from "zustand/react/shallow";
import usePetsOption, { defaultPetsOption } from "@/store/use-pets-option";
import { CategoryType } from "@/constants/category-type";
import useFoodsOption, { defaultFoodsOption } from "@/store/use-foods-option";
import useSuppliesOption, {
  defaultSuppliesOption,
} from "@/store/use-supplies-option";
import { FoodsCategoryType } from "@/constants/foods-category-type";
import { SuppliesCategoryType } from "@/constants/supplies-category-type";

type props = {
  id: TabTypes;
};

export default function OverviewTab({ id }: props) {
  const router = useRouter();

  const { setPetsOption } = usePetsOption(
    useShallow((state) => ({
      setPetsOption: state.setPetsOption,
    })),
  );

  const { clearFoodsOption, setFoodsOption } = useFoodsOption(
    useShallow((state) => ({
      clearFoodsOption: state.clearFoodsOption,
      setFoodsOption: state.setFoodsOption,
    })),
  );

  const { clearSuppliesOption, setSuppliesOption } = useSuppliesOption(
    useShallow((state) => ({
      clearSuppliesOption: state.clearSuppliesOption,
      setSuppliesOption: state.setSuppliesOption,
    })),
  );

  function handleViewAll() {
    if (id === TabType.FOODS) {
      clearFoodsOption();
      router.push("/foods");
    }

    if (id === TabType.SUPPLIES) {
      clearSuppliesOption();
      router.push("/supplies");
    }

    if (id === TabType.DOGS) {
      setPetsOption({
        ...defaultPetsOption,
        category: CategoryType.DOG,
      });
      router.push("/pets");
    }

    if (id === TabType.CATS) {
      setPetsOption({
        ...defaultPetsOption,
        category: CategoryType.CAT,
      });
      router.push("/pets");
    }
  }

  return (
    <div className="flex flex-col border-b border-l border-t border-solid border-light_gray_color_second bg-white large-screen:w-[463px] small-screen:w-full small-screen:flex-row smallest-screen:flex-col">
      <div className="relative flex min-h-[488px] overflow-hidden before:absolute before:bottom-0 before:left-0 before:top-0 before:z-[-1] before:bg-[#D1F1F3] before:content-[''] before:last:right-0 large-screen:p-[40px] small-screen:px-[20px] small-screen:py-[35px] between-small-smallest:w-[50%] smallest-screen:min-h-[375px] smallest-screen:w-full">
        <div className="absolute left-0 top-0 h-full w-full">
          <Image
            fill
            className="smallest-screen:object-cover smallest-screen:object-bottom"
            src="/assets/images/suggest1.jpg"
            alt="dog suggest"
          />
        </div>

        <div className="relative flex flex-col">
          <span className="font-quicksand text-[48px] font-bold leading-[1.15] tracking-[-0.02em] text-primary">
            {id}
          </span>
          <button
            className="mt-[15px] flex items-center gap-[7px] py-[10px] text-[12px] font-bold uppercase leading-[15px] tracking-[0.03em] text-primary"
            onClick={handleViewAll}
          >
            Xem tất cả
            <ArrowIcon size={12} className="rotate-[180deg] fill-current" />
          </button>
        </div>
      </div>

      <div className="smallest-screen:flex-0 flex-auto px-[40px] py-[30px] between-small-smallest:px-[35px] between-small-smallest:py-[20px] smallest-screen:p-[20px]">
        {id === TabType.DOGS && (
          <ul className="columns-2 gap-[20px] text-[14px] font-normal leading-[1.28] tracking-[0.025em] text-primary">
            <li>
              <button
                className="block py-[10px]"
                onClick={() => {
                  setPetsOption({
                    ...defaultPetsOption,
                    category: CategoryType.DOG,
                  });
                  router.push("/pets");
                }}
              >
                Chó
              </button>
            </li>
          </ul>
        )}

        {id === TabType.CATS && (
          <ul className="columns-2 gap-[20px] text-[14px] font-normal leading-[1.28] tracking-[0.025em] text-primary">
            <li>
              <button
                className="block py-[10px]"
                onClick={() => {
                  setPetsOption({
                    ...defaultPetsOption,
                    category: CategoryType.CAT,
                  });
                  router.push("/pets");
                }}
              >
                Mèo
              </button>
            </li>
          </ul>
        )}

        {id === TabType.FOODS && (
          <ul className="columns-2 gap-[20px] text-[14px] font-normal leading-[1.28] tracking-[0.025em] text-primary">
            <li>
              <button
                className="block py-[10px]"
                onClick={() => {
                  setFoodsOption({
                    ...defaultFoodsOption,
                    category: FoodsCategoryType.DRY,
                  });
                  router.push("/foods");
                }}
              >
                Thức ăn khô
              </button>
            </li>
            <li>
              <button
                className="block py-[10px]"
                onClick={() => {
                  setFoodsOption({
                    ...defaultFoodsOption,
                    category: FoodsCategoryType.WET,
                  });
                  router.push("/foods");
                }}
              >
                Thức ăn ướt
              </button>
            </li>

            <li>
              <button
                className="block py-[10px]"
                onClick={() => {
                  setFoodsOption({
                    ...defaultFoodsOption,
                    category: FoodsCategoryType.RAW,
                  });
                  router.push("/foods");
                }}
              >
                Thức ăn tươi
              </button>
            </li>

            <li>
              <button
                className="block py-[10px]"
                onClick={() => {
                  setFoodsOption({
                    ...defaultFoodsOption,
                    category: FoodsCategoryType.FREEZE,
                  });
                  router.push("/foods");
                }}
              >
                Thức ăn đông lạnh
              </button>
            </li>
          </ul>
        )}

        {id === TabType.SUPPLIES && (
          <ul className="columns-2 gap-[20px] text-[14px] font-normal leading-[1.28] tracking-[0.025em] text-primary">
            <li>
              <button
                className="block py-[10px]"
                onClick={() => {
                  setSuppliesOption({
                    ...defaultSuppliesOption,
                    category: SuppliesCategoryType.BEDDING,
                  });
                  router.push("/supplies");
                }}
              >
                Giường và chuồng
              </button>
            </li>
            <li>
              <button
                className="block py-[10px]"
                onClick={() => {
                  setSuppliesOption({
                    ...defaultSuppliesOption,
                    category: SuppliesCategoryType.HYGIENE,
                  });
                  router.push("/supplies");
                }}
              >
                Khay vệ sinh
              </button>
            </li>
            <li>
              <button
                className="block py-[10px]"
                onClick={() => {
                  setSuppliesOption({
                    ...defaultSuppliesOption,
                    category: SuppliesCategoryType.CLOTHING,
                  });
                  router.push("/supplies");
                }}
              >
                Đồ áo
              </button>
            </li>
            <li>
              <button
                className="block py-[10px]"
                onClick={() => {
                  setSuppliesOption({
                    ...defaultSuppliesOption,
                    category: SuppliesCategoryType.TOY,
                  });
                  router.push("/supplies");
                }}
              >
                Đồ chơi
              </button>
            </li>
            <li>
              <button
                className="block py-[10px]"
                onClick={() => {
                  setSuppliesOption({
                    ...defaultSuppliesOption,
                    category: SuppliesCategoryType.HEALTH,
                  });
                  router.push("/supplies");
                }}
              >
                Sức khỏe
              </button>
            </li>
            <li>
              <button
                className="block py-[10px]"
                onClick={() => {
                  setSuppliesOption({
                    ...defaultSuppliesOption,
                    category: SuppliesCategoryType.OTHER,
                  });
                  router.push("/supplies");
                }}
              >
                Khác
              </button>
            </li>
          </ul>
        )}

        <button
          className="mt-[15px] flex items-center gap-[7px] py-[10px] text-[12px] font-bold uppercase leading-[15px] tracking-[0.03em] text-primary"
          onClick={handleViewAll}
        >
          Xem tất cả
          <ArrowIcon size={12} className="rotate-[180deg] fill-current" />
        </button>
      </div>
    </div>
  );
}
