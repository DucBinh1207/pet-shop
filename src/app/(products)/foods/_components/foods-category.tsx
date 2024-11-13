"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { useRef } from "react";
import ArrowIcon from "@/components/common/icons/arrow-icon";
import Link from "next/link";
import Image from "next/image";
import cn from "@/utils/style/cn";
import {
  FoodsCategoryType,
  FoodsCategoryTypes,
} from "@/constants/foods-category-type";

type props = {
  category: FoodsCategoryTypes;
  handleCategoryFilter: (categoryCurrent: FoodsCategoryTypes) => void;
};

export default function FoodsCategory({
  category,
  handleCategoryFilter,
}: props) {
  const swiperRef = useRef(null);

  return (
    <div className="mt-[-15px] w-full min-w-[320px] bg-white px-[50px] pb-[35px] text-center text-primary small-screen:px-0">
      <div className="relative mx-auto w-[640px] min-w-[320px] max-w-full font-quicksand smallest-screen:w-[480px] up-xxx-smallest-screen:w-[320px]">
        <div className="overflow-hidden">
          <Swiper
            ref={swiperRef}
            effect="coverflow"
            grabCursor
            breakpoints={{
              1: {
                slidesPerView: 2,
              },
              580: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
            }}
            pagination={{
              el: ".foods-swiper-pagination",
              clickable: true,

              renderBullet: function (index, className) {
                return `<span class="${className} !bg-[#531492]"></span>`;
              },
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper-container"
          >
            <SwiperSlide
              className="flex min-w-[160px] flex-1 transform flex-col px-[10px] pt-[20px] smallest-screen:w-[calc(100%/3)] up-xxx-smallest-screen:min-w-[50%]"
              key={0}
            >
              <Link href="/" className="group flex flex-col items-center">
                <div className="flex h-[100px] w-[100px] origin-bottom items-center justify-center rounded-[50%] bg-background_color duration-100 ease-linear group-hover:scale-[1.15]">
                  <ArrowIcon
                    size={22}
                    className="fill-current text-primary duration-100 ease-linear hover:scale-[1.15] hover:text-secondary"
                  />
                </div>
                <h2 className="mt-[10px] text-center text-[17px] font-bold capitalize leading-[1.18] tracking-[0.005em]">
                  Cửa hàng
                </h2>
              </Link>
            </SwiperSlide>

            <SwiperSlide
              className="flex min-w-[160px] flex-1 transform flex-col px-[10px] pt-[20px] smallest-screen:w-[calc(100%/3)] up-xxx-smallest-screen:min-w-[50%]"
              key={1}
            >
              <label
                htmlFor={FoodsCategoryType.ALL}
                className="group flex cursor-pointer flex-col items-center"
              >
                <input
                  type="radio"
                  id={FoodsCategoryType.ALL}
                  className="flex appearance-none flex-col items-center"
                  onClick={() => {
                    handleCategoryFilter(FoodsCategoryType.ALL);
                  }}
                />
                <div
                  className={cn(
                    "relative flex h-[100px] w-[100px] origin-bottom items-center justify-center rounded-[50%] bg-background_color duration-100 ease-linear group-hover:scale-[1.15]",
                    { "scale-[1.15]": category === FoodsCategoryType.ALL },
                  )}
                >
                  <Image
                    src="/assets/images/dog.jpg"
                    fill
                    alt="category dogs"
                    className="object-cover"
                  />
                </div>
                <h2 className="mt-[10px] text-center text-[17px] font-bold capitalize leading-[1.18] tracking-[0.005em]">
                  Tất cả
                </h2>
              </label>
            </SwiperSlide>

            <SwiperSlide
              className="flex min-w-[160px] flex-1 transform flex-col px-[10px] pt-[20px] smallest-screen:w-[calc(100%/3)] up-xxx-smallest-screen:min-w-[50%]"
              key={2}
            >
              <label
                htmlFor={FoodsCategoryType.DRY}
                className="group flex cursor-pointer flex-col items-center"
              >
                <input
                  type="radio"
                  id={FoodsCategoryType.DRY}
                  className="flex appearance-none flex-col items-center"
                  onClick={() => {
                    handleCategoryFilter(FoodsCategoryType.DRY);
                  }}
                />
                <div
                  className={cn(
                    "relative flex h-[100px] w-[100px] origin-bottom items-center justify-center rounded-[50%] bg-background_color duration-100 ease-linear group-hover:scale-[1.15]",
                    { "scale-[1.15]": category === FoodsCategoryType.DRY },
                  )}
                >
                  <Image
                    src="/assets/images/dog.jpg"
                    fill
                    alt="category dogs"
                    className="object-cover"
                  />
                </div>
                <h2 className="mt-[10px] text-center text-[17px] font-bold capitalize leading-[1.18] tracking-[0.005em]">
                  Thức ăn khô
                </h2>
              </label>
            </SwiperSlide>

            <SwiperSlide
              className="flex min-w-[160px] flex-1 transform flex-col px-[10px] pt-[20px] smallest-screen:w-[calc(100%/3)] up-xxx-smallest-screen:min-w-[50%]"
              key={3}
            >
              <label
                htmlFor={FoodsCategoryType.WET}
                className="group flex cursor-pointer flex-col items-center"
              >
                <input
                  type="radio"
                  id={FoodsCategoryType.WET}
                  className="flex appearance-none flex-col items-center"
                  onClick={() => {
                    handleCategoryFilter(FoodsCategoryType.WET);
                  }}
                />
                <div
                  className={cn(
                    "relative flex h-[100px] w-[100px] origin-bottom items-center justify-center rounded-[50%] bg-background_color duration-100 ease-linear group-hover:scale-[1.15]",
                    { "scale-[1.15]": category === FoodsCategoryType.WET },
                  )}
                >
                  <Image
                    src="/assets/images/dog.jpg"
                    fill
                    alt="category dogs"
                    className="object-cover"
                  />
                </div>
                <h2 className="mt-[10px] text-center text-[17px] font-bold capitalize leading-[1.18] tracking-[0.005em]">
                  Thức ăn ướt
                </h2>
              </label>
            </SwiperSlide>

            <SwiperSlide
              className="flex min-w-[160px] flex-1 transform flex-col px-[10px] pt-[20px] smallest-screen:w-[calc(100%/3)] up-xxx-smallest-screen:min-w-[50%]"
              key={3}
            >
              <label
                htmlFor={FoodsCategoryType.RAW}
                className="group flex cursor-pointer flex-col items-center"
              >
                <input
                  type="radio"
                  id={FoodsCategoryType.RAW}
                  className="flex appearance-none flex-col items-center"
                  onClick={() => {
                    handleCategoryFilter(FoodsCategoryType.RAW);
                  }}
                />
                <div
                  className={cn(
                    "relative flex h-[100px] w-[100px] origin-bottom items-center justify-center rounded-[50%] bg-background_color duration-100 ease-linear group-hover:scale-[1.15]",
                    { "scale-[1.15]": category === FoodsCategoryType.RAW },
                  )}
                >
                  <Image
                    src="/assets/images/dog.jpg"
                    fill
                    alt="category dogs"
                    className="object-cover"
                  />
                </div>
                <h2 className="mt-[10px] text-center text-[17px] font-bold capitalize leading-[1.18] tracking-[0.005em]">
                  Thức ăn tươi sống
                </h2>
              </label>
            </SwiperSlide>

            <SwiperSlide
              className="flex min-w-[160px] flex-1 transform flex-col px-[10px] pt-[20px] smallest-screen:w-[calc(100%/3)] up-xxx-smallest-screen:min-w-[50%]"
              key={3}
            >
              <label
                htmlFor={FoodsCategoryType.FREEZE}
                className="group flex cursor-pointer flex-col items-center"
              >
                <input
                  type="radio"
                  id={FoodsCategoryType.FREEZE}
                  className="flex appearance-none flex-col items-center"
                  onClick={() => {
                    handleCategoryFilter(FoodsCategoryType.FREEZE);
                  }}
                />
                <div
                  className={cn(
                    "relative flex h-[100px] w-[100px] origin-bottom items-center justify-center rounded-[50%] bg-background_color duration-100 ease-linear group-hover:scale-[1.15]",
                    { "scale-[1.15]": category === FoodsCategoryType.FREEZE },
                  )}
                >
                  <Image
                    src="/assets/images/dog.jpg"
                    fill
                    alt="category dogs"
                    className="object-cover"
                  />
                </div>
                <h2 className="mt-[10px] text-center text-[17px] font-bold capitalize leading-[1.18] tracking-[0.005em]">
                  Thức ăn đông lạnh
                </h2>
              </label>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="foods-swiper-pagination mt-[10px] flex justify-center gap-[10px]" />
      </div>
    </div>
  );
}
