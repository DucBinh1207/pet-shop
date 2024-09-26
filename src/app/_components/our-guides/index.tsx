"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/components/common/button";
import GuideItem from "./_components/guide-item";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination, EffectCoverflow } from "swiper/modules";
import { useRef } from "react";

export default function OurGuides() {
  const router = useRouter();
  const swiperRef = useRef(null);

  return (
    <div className="mx-auto max-w-[1160px]">
      <div className="flex flex-col">
        <div className="mb-[25px] mt-[35px]">
          <h2 className="text-center font-quicksand text-[30px] font-bold leading-[34px] tracking-[-0,025em] text-primary">
            Out Guides
          </h2>
        </div>

        <div className="mx-auto overflow-hidden small-screen:max-w-[calc(100%-60px)]">
          <Swiper
            ref={swiperRef}
            effect={"coverflow"}
            grabCursor={true}
            breakpoints={{
              1: {
                slidesPerView: 2,
                spaceBetween: 20,
                touchEventsTarget: "wrapper",
                allowTouchMove: true,
              },
              756: {
                spaceBetween: 20,
                slidesPerView: 3,
                touchEventsTarget: "wrapper",
                allowTouchMove: true,
              },
              988: {
                slidesPerView: 4,
                spaceBetween: 20,
                touchEventsTarget: "wrapper",
                allowTouchMove: true,
              },
              1190: {
                slidesPerView: 4,
                spaceBetween: 20,
                touchEventsTarget: "container",
                allowTouchMove: false,
              },
            }}
            pagination={{
              el: ".guides-swiper-pagination",
              clickable: true,

              renderBullet: function (index, className) {
                return `<span class="${className} !bg-[#531492] cursor-pointer"></span>`;
              },
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            modules={[Pagination, EffectCoverflow]}
            wrapperClass="swiper-wrapper mb-[33px] large-screen:grid max-w-full large-screen:grid-cols-4 large-screen:grid-rows-2 large-screen:gap-x-[40px] large-screen:gap-y-[30px] "
          >
            <SwiperSlide
              className="small-screen:swiper-slide small-screen:swiper-slide-visible small-screen:swiper-slide-fully-visible small-screen:swiper-slide-active overflow-hidden rounded-[8px] border border-solid border-light_gray_color_second large-screen:col-span-2 large-screen:row-span-2 large-screen:min-w-[560px]  small-screen:min-w-[calc((100%-60px)/4)] xs-small-screen:min-w-[calc((100%-40px)/3)] xs-smallest-screen:min-w-[calc((100%-20px)/2)]"
              key={0}
            >
              <Link href="/guides" className="relative block pb-[61.53%]">
                <Image
                  src="/assets/images/corgi-guides.jpg"
                  fill
                  alt="guides"
                  className="object-cover object-center"
                ></Image>
              </Link>
              <div className="flex flex-col p-[40px] small-screen:p-[25px]">
                <Link
                  href="/guides"
                  className="font-quicksand text-[28px] font-bold leading-[1.14] tracking-[-0.01em] text-primary small-screen:text-[18px] small-screen:leading-[1.1] small-screen:tracking-[0.005em]"
                >
                  New Trends in Pets Industry in 2023
                </Link>
                <p className="mt-[15px] overflow-hidden overflow-ellipsis font-quicksand text-[14px] font-normal leading-[1.46] tracking-[0.02em] text-text_color small-screen:max-h-[38px]">
                  Adipiscing adipiscing non, vitae vel ullamcorper lorem massa
                  elit libero. Eu ut egestas vel neque ut eget quis. Iaculis in
                  amet cum molestie. Ut congue quis proin eleifend. Et a quam ac
                  amet, cursus. Nunc posuere venenatis amet eu massa.…
                </p>
                <div className="small-screen:hidden small-screen:opacity-0">
                  <Button
                    onClick={() => {
                      router.push("/guides");
                    }}
                    variant="tertiary"
                    size="xsm"
                    className="mt-[25px] text-center text-[13px] font-bold leading-[16px] tracking-[0.05em]"
                  >
                    READ MORE
                  </Button>
                </div>
              </div>
            </SwiperSlide>
            {[...Array(4)].map((_, index) => (
              <SwiperSlide
                className="small-screen:swiper-slide small-screen:swiper-slide-visible small-screen:swiper-slide-fully-visible small-screen:swiper-slide-active overflow-hidden rounded-[8px] border border-solid border-light_gray_color_second large-screen:col-span-1 large-screen:row-span-1 large-screen:max-w-[260px] small-screen:min-w-[calc((100%-60px)/4)] xs-small-screen:min-w-[calc((100%-40px)/3)] xs-smallest-screen:min-w-[calc((100%-20px)/2)]"
                key={index + 1}
              >
                <GuideItem />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="guides-swiper-pagination relative mt-[25px] flex justify-center gap-[5px] large-screen:hidden large-screen:opacity-0"></div>
        </div>

        <div className="mt-[20px] text-center">
          <Button
            className="mx-auto text-[12px]"
            variant="secondary"
            onClick={() => {
              router.push("/guides");
            }}
          >
            View All
          </Button>
        </div>
      </div>
    </div>
  );
}
