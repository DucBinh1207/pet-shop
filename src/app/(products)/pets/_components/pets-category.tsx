"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { useRef } from "react";
import ArrowIcon from "@/components/common/icons/arrow-icon";
import Link from "next/link";
import Image from "next/image";
import { CategoryType, CategoryTypes } from "@/constants/category-type";
import cn from "@/utils/style/cn";

type props = {
  category: CategoryTypes;
  handleCategoryFilter: (categoryCurrent: CategoryTypes) => void;
};

export default function PetsCategory({
  category,
  handleCategoryFilter,
}: props) {
  const swiperRef = useRef(null);

  return (
    <div className="mt-[-15px] w-full min-w-[320px] overflow-hidden bg-white px-[50px] pb-[35px] text-center text-primary small-screen:px-0">
      <div className="relative mx-auto w-[640px] min-w-[320px] max-w-full font-quicksand font-bold smallest-screen:w-[480px] up-xxx-smallest-screen:w-[320px]">
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
              el: ".pets-swiper-pagination",
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
                <h2 className="mt-[10px] text-center text-[17px] capitalize leading-[1.18] tracking-[0.005em]">
                  Cửa hàng
                </h2>
              </Link>
            </SwiperSlide>

            <SwiperSlide
              className="flex min-w-[160px] flex-1 transform flex-col px-[10px] pt-[20px] smallest-screen:w-[calc(100%/3)] up-xxx-smallest-screen:min-w-[50%]"
              key={1}
            >
              <label
                htmlFor={CategoryType.ALL}
                className="group flex cursor-pointer flex-col items-center"
              >
                <input
                  type="radio"
                  id={CategoryType.ALL}
                  className="flex appearance-none flex-col items-center"
                  onClick={() => {
                    handleCategoryFilter(CategoryType.ALL);
                  }}
                />
                <div
                  className={cn(
                    "relative flex h-[100px] w-[100px] origin-bottom items-center justify-center rounded-[50%] bg-background_color duration-100 ease-linear group-hover:scale-[1.15]",
                    { "scale-[1.15]": category === CategoryType.ALL },
                  )}
                >
                  <Image
                    src="/assets/images/dog.jpg"
                    fill
                    alt="category dogs"
                    className="object-cover"
                  />
                </div>
                <h2 className="mt-[10px] text-center text-[17px] capitalize leading-[1.18] tracking-[0.005em]">
                  All
                </h2>
              </label>
            </SwiperSlide>

            <SwiperSlide
              className="flex min-w-[160px] flex-1 transform flex-col px-[10px] pt-[20px] smallest-screen:w-[calc(100%/3)] up-xxx-smallest-screen:min-w-[50%]"
              key={2}
            >
              <label
                htmlFor={CategoryType.DOG}
                className="group flex cursor-pointer flex-col items-center"
              >
                <input
                  type="radio"
                  id={CategoryType.DOG}
                  className="flex appearance-none flex-col items-center"
                  onClick={() => {
                    handleCategoryFilter(CategoryType.DOG);
                  }}
                />
                <div
                  className={cn(
                    "relative flex h-[100px] w-[100px] origin-bottom items-center justify-center rounded-[50%] bg-background_color duration-100 ease-linear group-hover:scale-[1.15]",
                    { "scale-[1.15]": category === CategoryType.DOG },
                  )}
                >
                  <Image
                    src="/assets/images/dog.jpg"
                    fill
                    alt="category dogs"
                    className="object-cover"
                  />
                </div>
                <h2 className="mt-[10px] text-center text-[17px] capitalize leading-[1.18] tracking-[0.005em]">
                  Dogs
                </h2>
              </label>
            </SwiperSlide>

            <SwiperSlide
              className="flex min-w-[160px] flex-1 transform flex-col px-[10px] pt-[20px] smallest-screen:w-[calc(100%/3)] up-xxx-smallest-screen:min-w-[50%]"
              key={3}
            >
              <label
                htmlFor={CategoryType.CAT}
                className="group flex cursor-pointer flex-col items-center"
              >
                <input
                  type="radio"
                  id={CategoryType.CAT}
                  className="flex appearance-none flex-col items-center"
                  onClick={() => {
                    handleCategoryFilter(CategoryType.CAT);
                  }}
                />
                <div
                  className={cn(
                    "relative flex h-[100px] w-[100px] origin-bottom items-center justify-center rounded-[50%] bg-background_color duration-100 ease-linear group-hover:scale-[1.15]",
                    { "scale-[1.15]": category === CategoryType.CAT },
                  )}
                >
                  <Image
                    src="/assets/images/dog.jpg"
                    fill
                    alt="category dogs"
                    className="object-cover"
                  />
                </div>
                <h2 className="mt-[10px] text-center text-[17px] capitalize leading-[1.18] tracking-[0.005em]">
                  Cats
                </h2>
              </label>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="pets-swiper-pagination mt-[10px] flex justify-center gap-[10px]" />
      </div>
    </div>
  );
}
