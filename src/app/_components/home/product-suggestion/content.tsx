"use client";

import ArrowIcon from "@/components/common/icons/arrow-icon";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import {
  Pagination,
  Navigation,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import { useRef } from "react";
import cn from "@/utils/style/cn";
import FoodCard from "@/components/food-card";
import NavigationButton from "@/components/navigation-button";

type props = {
  id: string;
  isSelected: boolean;
};

export default function Content({ id, isSelected }: props) {
  const swiperRef = useRef(null);

  return (
    <div
      className={cn(
        "flex flex-auto animate-fade_in opacity-100 small-screen:flex-wrap",
        {
          "hidden animate-fade_out opacity-0": !isSelected,
        },
      )}
      id={id}
    >
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
              Dogs - {id}
            </span>
            <Link
              href="/pets"
              className="mt-[15px] flex items-center gap-[7px] py-[10px] text-[12px] font-bold uppercase leading-[15px] tracking-[0.03em] text-primary"
            >
              View All
              <ArrowIcon size={12} className="rotate-[180deg] fill-current" />
            </Link>
          </div>
        </div>

        <div className="smallest-screen:flex-0 flex-auto px-[40px] py-[30px] between-small-smallest:px-[35px] between-small-smallest:py-[20px] smallest-screen:p-[20px]">
          <ul className="columns-2 gap-[20px] text-[14px] font-normal leading-[1.28] tracking-[0.025em] text-primary">
            <li>
              <Link href="/pet" className="block py-[10px]">
                Husky
              </Link>
            </li>
            <li>
              <Link href="/pet" className="block py-[10px]">
                Shiba
              </Link>
            </li>
            <li>
              <Link href="/pet" className="block py-[10px]">
                Sammoyed
              </Link>
            </li>
            <li>
              <Link href="/pet" className="block py-[10px]">
                Golden
              </Link>
            </li>
            <li>
              <Link href="/pet" className="block py-[10px]">
                Labrador
              </Link>
            </li>
            <li>
              <Link href="/pet" className="block py-[10px]">
                Chihuahua
              </Link>
            </li>
          </ul>

          <Link
            href="/pets"
            className="mt-[15px] flex items-center gap-[7px] py-[10px] text-[12px] font-bold uppercase leading-[15px] tracking-[0.03em] text-primary"
          >
            View All
            <ArrowIcon size={12} className="rotate-[180deg] fill-current" />
          </Link>
        </div>
      </div>

      <div className="relative flex w-[calc(100%-463px)] flex-col small-screen:w-full">
        <div className="peer w-full">
          <div className="w-full overflow-hidden">
            <Swiper
              ref={swiperRef}
              effect="coverflow"
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              grabCursor
              breakpoints={{
                1: {
                  slidesPerView: 2,
                },
                756: {
                  slidesPerView: 3,
                },
                988: {
                  slidesPerView: 4,
                },
                1190: {
                  slidesPerView: 3,
                },
              }}
              pagination={{
                el: ".swiper-pagination",
                clickable: true,

                renderBullet: function (index, className) {
                  return `<span class="${className} !bg-[#531492]"></span>`;
                },
              }}
              navigation={{
                prevEl: ".product-suggestion-swiper-button-prev",
                nextEl: ".product-suggestion-swiper-button-next",
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              className="swiper-container"
            >
              {[...Array(5)].map((_, index) => (
                <SwiperSlide
                  key={index}
                  className="border-box flex min-w-[232px] flex-1 transform flex-col border border-solid border-light_gray_color_second bg-white small-screen:min-w-[25%] x-small-screen:min-w-[calc(100%/3)] x-smallest-screen:min-w-[50%]"
                >
                  <FoodCard />
                  <FoodCard />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <NavigationButton
          prevClass="product-suggestion-swiper-button-prev"
          nextClass="product-suggestion-swiper-button-next"
          typeReference="peer"
        />
      </div>
    </div>
  );
}
