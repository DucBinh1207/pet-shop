"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { useRef } from "react";
import ArrowIcon from "@/components/common/icons/arrow-icon";
import Link from "next/link";
import Image from "next/image";

export default function PetsCategory() {
  const swiperRef = useRef(null);

  return (
    <div className="mt-[-15px] w-full min-w-[320px] bg-white px-[50px] pb-[35px] text-center text-primary">
      <div className="down-xx-smallest-screen:w-[320px] relative mx-auto w-[640px] min-w-[320px] max-w-full smallest-screen:w-[480px]">
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
              className="down-xx-smallest-screen:min-w-[50%] flex min-w-[160px] flex-1 transform flex-col px-[10px] pt-[20px] smallest-screen:w-[calc(100%/3)]"
              key={0}
            >
              <Link href="/" className="group flex flex-col items-center">
                <div className="flex h-[100px] w-[100px] origin-bottom items-center justify-center rounded-[50%] bg-background_color duration-100 ease-linear group-hover:scale-[1.15]">
                  <ArrowIcon
                    size={22}
                    className="fill-current text-primary duration-100 ease-linear hover:scale-[1.15] hover:text-secondary"
                  />
                </div>
                <h2 className="mt-[10px] text-center text-[17px] font-medium capitalize leading-[1.18] tracking-[0.005em]">
                  Home
                </h2>
              </Link>
            </SwiperSlide>

            <SwiperSlide
              className="down-xx-smallest-screen:min-w-[50%] flex min-w-[160px] flex-1 transform flex-col px-[10px] pt-[20px] smallest-screen:w-[calc(100%/3)]"
              key={1}
            >
              <Link href="/pets" className="group flex flex-col items-center">
                <div className="relative flex h-[100px] w-[100px] origin-bottom items-center justify-center rounded-[50%] bg-background_color duration-100 ease-linear group-hover:scale-[1.15]">
                  <Image
                    src="/assets/images/dog.jpg"
                    fill
                    alt="category dogs"
                    className="object-cover"
                  />
                </div>
                <h2 className="mt-[10px] text-center text-[17px] font-medium capitalize leading-[1.18] tracking-[0.005em]">
                  All
                </h2>
              </Link>
            </SwiperSlide>

            <SwiperSlide
              className="down-xx-smallest-screen:min-w-[50%] flex min-w-[160px] flex-1 transform flex-col px-[10px] pt-[20px] smallest-screen:w-[calc(100%/3)]"
              key={2}
            >
              <Link href="/pets/dogs" className="group flex flex-col items-center">
                <div className="relative flex h-[100px] w-[100px] origin-bottom items-center justify-center rounded-[50%] bg-background_color duration-100 ease-linear group-hover:scale-[1.15]">
                  <Image
                    src="/assets/images/dog.jpg"
                    fill
                    alt="category dogs"
                    className="object-cover"
                  />
                </div>
                <h2 className="mt-[10px] text-center text-[17px] font-medium capitalize leading-[1.18] tracking-[0.005em]">
                  Dogs
                </h2>
              </Link>
            </SwiperSlide>

            <SwiperSlide
              className="down-xx-smallest-screen:min-w-[50%] flex min-w-[160px] flex-1 transform flex-col px-[10px] pt-[20px] smallest-screen:w-[calc(100%/3)]"
              key={3}
            >
              <Link href="/pets/cats" className="group flex flex-col items-center">
                <div className="relative flex h-[100px] w-[100px] origin-bottom items-center justify-center rounded-[50%] bg-background_color duration-100 ease-linear group-hover:scale-[1.15]">
                  <Image
                    src="/assets/images/dog.jpg"
                    fill
                    alt="category dogs"
                    className="object-cover"
                  />
                </div>
                <h2 className="mt-[10px] text-center text-[17px] font-medium capitalize leading-[1.18] tracking-[0.005em]">
                  Cats
                </h2>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="pets-swiper-pagination absolute bottom-[-15%] left-[50%] flex translate-x-[-50%] gap-[10px]"></div>
      </div>
    </div>
  );
}
