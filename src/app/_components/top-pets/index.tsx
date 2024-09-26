"use client";

import Button from "@/components/common/button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { useRef } from "react";
import TopPetsItem from "./_components/top-pets-item";

export default function TopPets() {
  const swiperRef = useRef(null);

  return (
    <div className="border-box relative mx-auto flex max-w-[1160px] flex-col small-screen:max-w-[calc(100%-60px)]">
      <div className="mb-[25px] mt-[35px] text-center">
        <h2 className="font-quicksand text-[30px] font-bold leading-[34px] tracking-[-0.025em] text-tertiary">
          Top Pets
        </h2>
      </div>

      <div className="peer">
        <div className="overflow-hidden rounded-[4px]">
          <Swiper
            ref={swiperRef}
            effect={"coverflow"}
            grabCursor={true}
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
                slidesPerView: 5,
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
              nextEl: ".top-pets-swiper-button-next",
              prevEl: ".top-pets-swiper-button-prev",
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
            {[...Array(8)].map((_, index) => (
              <SwiperSlide
                className="border-box flex min-w-[232px] flex-1 transform flex-col border border-solid border-light_gray_color_second bg-white small-screen:min-w-[25%] xs-small-screen:min-w-[calc(100%/3)] xs-smallest-screen:min-w-[50%]"
                key={index}
              >
                <TopPetsItem index={index} />
              </SwiperSlide>
            ))}
            <SwiperSlide
              className="border-box flex min-w-[232px] flex-1 transform items-center justify-center border border-solid border-light_gray_color_second bg-white small-screen:min-w-[25%] xs-small-screen:min-w-[calc(100%/3)] xs-smallest-screen:min-w-[50%]"
              key={8}
            >
              <Button
                size="xsm"
                className="text-[12px] font-bold leading-[15px] tracking-[0.045em]"
              >
                View More
              </Button>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="hidden opacity-0 hover:block hover:opacity-100 peer-hover:block peer-hover:opacity-100">
        <div className="top-pets-swiper-button-prev absolute left-[-27px] top-[50%] h-[54px] w-[54px] translate-y-[-50%] cursor-pointer rounded-[50%] bg-white bg-arrow_prev bg-[length:40px_40px] bg-center bg-no-repeat p-[17.5px] text-primary shadow-item_next after:content-['']"></div>

        <div className="top-pets-swiper-button-next absolute right-[-27px] top-[50%] h-[54px] w-[54px] translate-y-[-50%] cursor-pointer rounded-[50%] bg-white bg-arrow_next bg-[length:40px_40px] bg-center bg-no-repeat p-[17.5px] text-primary shadow-item_next after:content-['']"></div>
      </div>

      <div className="swiper-pagination !relative mt-[25px]"></div>
    </div>
  );
}
