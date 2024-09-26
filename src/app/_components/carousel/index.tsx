"use client";

import React from "react";
// import CaretLeft from "@/components/common/icons/caret-left";
// import Button from "@/components/common/button";
// import CaretRight from "@/components/common/icons/caret-right";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { useRef } from "react";

export default function Carousel() {
  const swiperRef = useRef(null);

  return (
    <div className="max-h-auto relative mx-auto h-[400px] w-[1920px] overflow-hidden small-screen:h-[450px] smallest-screen:h-[580px]">
      <div className="h-full w-full overflow-hidden">
        <Swiper
          ref={swiperRef}
          effect={"coverflow"}
          loop={true}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          grabCursor={true}
          slidesPerView={1}
          pagination={{
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
          modules={[Autoplay, Pagination, EffectCoverflow]}
          className="relative"
          wrapperClass="h-[400px]"
        >
          <SwiperSlide key={0} className="h-full min-w-[1920px]">
            <picture className="relative h-full w-full flex-none">
              <img
                src="/assets/images/bannerVoucherLg.jpg"
                alt=""
                className="absolute left-0 top-0 z-10 h-full w-[1920px] object-cover small-screen:hidden"
              />
              <img
                src="/assets/images/bannerVoucherMd.jpg"
                alt=""
                className="absolute left-0 top-0 z-10 h-full object-cover large-screen:hidden smallest-screen:hidden"
              />
              <img
                src="/assets/images/bannerVoucherSm.jpg"
                alt=""
                className="absolute left-0 top-0 z-10 h-full object-cover up-smallest-screen:hidden"
              />
              <div className="] relative z-20 m-auto flex h-full w-[1160px] max-w-full items-center x-large-screen:mx-0 x-large-screen:px-[105px] small-screen:px-[40px] smallest-screen:items-start smallest-screen:px-[20px] smallest-screen:pt-[40px]">
                <div className="between-small-smallest:w-[350px flex w-[500px] flex-col justify-center gap-[30px]">
                  <span className="font-quicksand text-[51px] font-bold leading-[1] text-primary between-small-smallest:text-[46px] smallest-screen:text-[38px]">
                    Bắt đầu hành trình mua sắm
                  </span>
                  <span className="font-quicksand text-[28px] font-normal italic leading-[1.43] text-primary between-small-smallest:text-[26px] smallest-screen:text-[26px]">
                    Giảm giá ngay với voucher &apos;BANMOI&apos; !
                  </span>
                  <div>
                    <Link
                      href="/"
                      className="hover_animate inline-block cursor-pointer rounded-[25px] border-[2px] border-solid border-dark_orange_color bg-dark_orange_color px-[30px] py-[8px] text-center text-[13px] font-bold uppercase leading-[16px] tracking-wider text-white outline-none hover:bg-white hover:text-dark_orange_color"
                    >
                      MUA NGAY
                    </Link>
                  </div>
                </div>
              </div>
            </picture>
          </SwiperSlide>
          <SwiperSlide
            key={1}
            className="up-largest-screen:min-w-[1920px] largest-screen:min-w-[100vw] h-full"
          >
            <picture className="relative h-full w-full flex-none">
              <img
                src="/assets/images/bannerGuidesLg.jpg"
                alt=""
                className="absolute left-0 top-0 h-full object-cover small-screen:hidden"
              />
              <img
                src="/assets/images/bannerGuidesMd.jpg"
                alt=""
                className="absolute left-0 top-0 h-full object-cover large-screen:hidden smallest-screen:hidden"
              />
              <img
                src="/assets/images/bannerGuidesSm.jpg"
                alt=""
                className="absolute left-0 top-0 h-full object-cover up-smallest-screen:hidden"
              />
              <div className="] relative z-20 m-auto flex h-full w-[1160px] max-w-full items-center x-large-screen:mx-0 x-large-screen:px-[105px] small-screen:px-[40px] smallest-screen:items-start smallest-screen:px-[20px] smallest-screen:pt-[40px]">
                <div className="flex w-[500px] flex-col justify-center gap-[30px] between-small-smallest:w-[350px]">
                  <span className="font-quicksand text-[51px] font-bold leading-[1] text-primary between-small-smallest:text-[46px] smallest-screen:text-[38px]">
                    Chăm Sóc Thú Cưng
                  </span>
                  <span className="font-quicksand text-[28px] font-normal italic leading-[1.43] text-primary between-small-smallest:text-[26px] smallest-screen:text-[26px]">
                    Khám phá bí quyết chăm sóc hiệu quả cho thú cưng của bạn!
                  </span>
                  <div>
                    <Link
                      href="/"
                      className="hover_animate inline-block cursor-pointer rounded-[25px] border-[2px] border-solid border-dark_orange_color bg-dark_orange_color px-[30px] py-[8px] text-center text-[13px] font-bold uppercase leading-[16px] tracking-wider text-white outline-none hover:bg-white hover:text-dark_orange_color"
                    >
                      KHÁM PHÁ
                    </Link>
                  </div>
                </div>
              </div>
            </picture>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
