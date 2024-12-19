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
  SuppliesCategoryType,
  SuppliesCategoryTypes,
} from "@/constants/supplies-category-type";

type props = {
  category: SuppliesCategoryTypes;
  handleCategoryFilter: (categoryCurrent: SuppliesCategoryTypes) => void;
};

export default function SuppliesCategory({
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
              el: ".supplies-swiper-pagination",
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
                  Home
                </h2>
              </Link>
            </SwiperSlide>

            <SwiperSlide
              className="flex min-w-[160px] flex-1 transform flex-col px-[10px] pt-[20px] smallest-screen:w-[calc(100%/3)] up-xxx-smallest-screen:min-w-[50%]"
              key={1}
            >
              <label
                htmlFor={SuppliesCategoryType.ALL}
                className="group flex cursor-pointer flex-col items-center"
              >
                <input
                  type="radio"
                  id={SuppliesCategoryType.ALL}
                  className="flex appearance-none flex-col items-center"
                  onClick={() => {
                    handleCategoryFilter(SuppliesCategoryType.ALL);
                  }}
                />
                <div
                  className={cn(
                    "relative flex h-[100px] w-[100px] origin-bottom items-center justify-center rounded-[50%] bg-background_color duration-100 ease-linear group-hover:scale-[1.15]",
                    { "scale-[1.15]": category === SuppliesCategoryType.ALL },
                  )}
                >
                  <Image
                    src="/assets/images/all-supplies.png"
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
                htmlFor={SuppliesCategoryType.BEDDING}
                className="group flex cursor-pointer flex-col items-center"
              >
                <input
                  type="radio"
                  id={SuppliesCategoryType.BEDDING}
                  className="flex appearance-none flex-col items-center"
                  onClick={() => {
                    handleCategoryFilter(SuppliesCategoryType.BEDDING);
                  }}
                />
                <div
                  className={cn(
                    "relative flex h-[100px] w-[100px] origin-bottom items-center justify-center rounded-[50%] bg-background_color duration-100 ease-linear group-hover:scale-[1.15]",
                    {
                      "scale-[1.15]": category === SuppliesCategoryType.BEDDING,
                    },
                  )}
                >
                  <Image
                    src="/assets/images/pet-bed.jpg"
                    fill
                    alt="category dogs"
                    className="object-cover"
                  />
                </div>
                <h2 className="mt-[10px] text-center text-[17px] font-bold capitalize leading-[1.18] tracking-[0.005em]">
                  Giường và chuồng
                </h2>
              </label>
            </SwiperSlide>

            <SwiperSlide
              className="flex min-w-[160px] flex-1 transform flex-col px-[10px] pt-[20px] smallest-screen:w-[calc(100%/3)] up-xxx-smallest-screen:min-w-[50%]"
              key={3}
            >
              <label
                htmlFor={SuppliesCategoryType.HYGIENE}
                className="group flex cursor-pointer flex-col items-center"
              >
                <input
                  type="radio"
                  id={SuppliesCategoryType.HYGIENE}
                  className="flex appearance-none flex-col items-center"
                  onClick={() => {
                    handleCategoryFilter(SuppliesCategoryType.HYGIENE);
                  }}
                />
                <div
                  className={cn(
                    "relative flex h-[100px] w-[100px] origin-bottom items-center justify-center rounded-[50%] bg-background_color duration-100 ease-linear group-hover:scale-[1.15]",
                    {
                      "scale-[1.15]": category === SuppliesCategoryType.HYGIENE,
                    },
                  )}
                >
                  <Image
                    src="/assets/images/pet-litter.png"
                    fill
                    alt="category dogs"
                    className="object-cover"
                  />
                </div>
                <h2 className="mt-[10px] text-center text-[17px] font-bold capitalize leading-[1.18] tracking-[0.005em]">
                  Khay vệ sinh
                </h2>
              </label>
            </SwiperSlide>

            <SwiperSlide
              className="flex min-w-[160px] flex-1 transform flex-col px-[10px] pt-[20px] smallest-screen:w-[calc(100%/3)] up-xxx-smallest-screen:min-w-[50%]"
              key={3}
            >
              <label
                htmlFor={SuppliesCategoryType.CLOTHING}
                className="group flex cursor-pointer flex-col items-center"
              >
                <input
                  type="radio"
                  id={SuppliesCategoryType.CLOTHING}
                  className="flex appearance-none flex-col items-center"
                  onClick={() => {
                    handleCategoryFilter(SuppliesCategoryType.CLOTHING);
                  }}
                />
                <div
                  className={cn(
                    "relative flex h-[100px] w-[100px] origin-bottom items-center justify-center rounded-[50%] bg-background_color duration-100 ease-linear group-hover:scale-[1.15]",
                    {
                      "scale-[1.15]":
                        category === SuppliesCategoryType.CLOTHING,
                    },
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
                  Đồ áo
                </h2>
              </label>
            </SwiperSlide>

            <SwiperSlide
              className="flex min-w-[160px] flex-1 transform flex-col px-[10px] pt-[20px] smallest-screen:w-[calc(100%/3)] up-xxx-smallest-screen:min-w-[50%]"
              key={4}
            >
              <label
                htmlFor={SuppliesCategoryType.TOY}
                className="group flex cursor-pointer flex-col items-center"
              >
                <input
                  type="radio"
                  id={SuppliesCategoryType.TOY}
                  className="flex appearance-none flex-col items-center"
                  onClick={() => {
                    handleCategoryFilter(SuppliesCategoryType.TOY);
                  }}
                />
                <div
                  className={cn(
                    "relative flex h-[100px] w-[100px] origin-bottom items-center justify-center rounded-[50%] bg-background_color duration-100 ease-linear group-hover:scale-[1.15]",
                    { "scale-[1.15]": category === SuppliesCategoryType.TOY },
                  )}
                >
                  <Image
                    src="/assets/images/pet-toy.jpg"
                    fill
                    alt="category dogs"
                    className="object-cover"
                  />
                </div>
                <h2 className="mt-[10px] text-center text-[17px] font-bold capitalize leading-[1.18] tracking-[0.005em]">
                  Đồ chơi
                </h2>
              </label>
            </SwiperSlide>

            <SwiperSlide
              className="flex min-w-[160px] flex-1 transform flex-col px-[10px] pt-[20px] smallest-screen:w-[calc(100%/3)] up-xxx-smallest-screen:min-w-[50%]"
              key={6}
            >
              <label
                htmlFor={SuppliesCategoryType.HEALTH}
                className="group flex cursor-pointer flex-col items-center"
              >
                <input
                  type="radio"
                  id={SuppliesCategoryType.HEALTH}
                  className="flex appearance-none flex-col items-center"
                  onClick={() => {
                    handleCategoryFilter(SuppliesCategoryType.HEALTH);
                  }}
                />
                <div
                  className={cn(
                    "relative flex h-[100px] w-[100px] origin-bottom items-center justify-center rounded-[50%] bg-background_color duration-100 ease-linear group-hover:scale-[1.15]",
                    {
                      "scale-[1.15]": category === SuppliesCategoryType.HEALTH,
                    },
                  )}
                >
                  <Image
                    src="/assets/images/pet-health.jpg"
                    fill
                    alt="category dogs"
                    className="object-cover"
                  />
                </div>
                <h2 className="mt-[10px] text-center text-[17px] font-bold capitalize leading-[1.18] tracking-[0.005em]">
                  Sức khỏe
                </h2>
              </label>
            </SwiperSlide>

            <SwiperSlide
              className="flex min-w-[160px] flex-1 transform flex-col px-[10px] pt-[20px] smallest-screen:w-[calc(100%/3)] up-xxx-smallest-screen:min-w-[50%]"
              key={7}
            >
              <label
                htmlFor={SuppliesCategoryType.OTHER}
                className="group flex cursor-pointer flex-col items-center"
              >
                <input
                  type="radio"
                  id={SuppliesCategoryType.OTHER}
                  className="flex appearance-none flex-col items-center"
                  onClick={() => {
                    handleCategoryFilter(SuppliesCategoryType.OTHER);
                  }}
                />
                <div
                  className={cn(
                    "relative flex h-[100px] w-[100px] origin-bottom items-center justify-center rounded-[50%] bg-background_color duration-100 ease-linear group-hover:scale-[1.15]",
                    { "scale-[1.15]": category === SuppliesCategoryType.OTHER },
                  )}
                >
                  <Image
                    src="/assets/images/pet-other.jpg"
                    fill
                    alt="category dogs"
                    className="object-cover"
                  />
                </div>
                <h2 className="mt-[10px] text-center text-[17px] font-bold capitalize leading-[1.18] tracking-[0.005em]">
                  Khác
                </h2>
              </label>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="supplies-swiper-pagination mt-[10px] flex justify-center gap-[10px]" />
      </div>
    </div>
  );
}
