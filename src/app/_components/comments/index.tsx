"use client";

import CommentItem from "./_components/comment-item";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import { useRef } from "react";

export default function Comments() {
  const swiperRef = useRef(null);

  return (
    <div className="mx-auto my-[35px] max-w-[1920px]">
      <div className="mb-[25px] flex justify-center">
        <h2 className="leading-[34px font-quicksand text-[30px] font-bold tracking-[-0.025em] text-primary">
          Testimonials
        </h2>
      </div>
      <div className="bg-comments_bg group relative mx-auto max-w-[calc(100%-100px)] px-[35px] small-screen:px-[15px]">
        <div className="w-full overflow-hidden">
          <Swiper
            ref={swiperRef}
            effect={"coverflow"}
            loop={true}
            grabCursor={true}
            breakpoints={{
              1: {
                slidesPerView: 1,
              },
              756: {
                slidesPerView: 2,
              },
              1190: {
                slidesPerView: 3,
              },
            }}
            navigation={{
              nextEl: ".about-us-swiper-button-next",
              prevEl: ".about-us-swiper-button-prev",
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            modules={[Navigation, EffectCoverflow]}
          >
            {[...Array(4)].map((_, index) => (
              <SwiperSlide
                className="min-w-[calc(100%/3)] rounded-[8px] px-[60px] pb-[49px] pt-[47px] small-screen:min-w-[50%] small-screen:px-[30px] small-screen:py-[20px] xs-smallest-screen:min-w-full"
                key={index}
              >
                <CommentItem />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="hidden opacity-0 hover:block hover:!opacity-100 group-hover:block group-hover:opacity-[0.3]">
          <div className="about-us-swiper-button-prev absolute left-[-27px] top-[50%] h-[54px] w-[54px] translate-y-[-50%] cursor-pointer rounded-[50%] bg-white bg-arrow_prev bg-[length:40px_40px] bg-center bg-no-repeat p-[17.5px] text-primary shadow-item_next after:content-['']"></div>

          <div className="about-us-swiper-button-next absolute right-[-27px] top-[50%] h-[54px] w-[54px] translate-y-[-50%] cursor-pointer rounded-[50%] bg-white bg-arrow_next bg-[length:40px_40px] bg-center bg-no-repeat p-[17.5px] text-primary shadow-item_next after:content-['']"></div>
        </div>
      </div>
    </div>
  );
}
