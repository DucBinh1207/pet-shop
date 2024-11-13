"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Item from "./item";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination, EffectCoverflow } from "swiper/modules";
import { useRef } from "react";
import Button from "@/components/common/button";

export default function OurGuides() {
  const router = useRouter();
  const swiperRef = useRef(null);

  return (
    <div className="mx-auto max-w-[1160px]">
      <div className="flex flex-col">
        <div className="mb-[25px] mt-[35px]">
          <h2 className="text-center font-quicksand text-[30px] font-bold leading-[34px] tracking-[-0,025em] text-primary">
            Cẩm nang của chúng tôi
          </h2>
        </div>

        <div className="mx-auto overflow-hidden small-screen:max-w-[calc(100%-60px)]">
          <Swiper
            ref={swiperRef}
            effect="coverflow"
            grabCursor
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
              className="small-screen:swiper-slide small-screen:swiper-slide-visible small-screen:swiper-slide-fully-visible small-screen:swiper-slide-active overflow-hidden rounded-[8px] border border-solid border-light_gray_color_second large-screen:col-span-2 large-screen:row-span-2 large-screen:min-w-[560px] small-screen:min-w-[calc((100%-60px)/4)] x-small-screen:min-w-[calc((100%-40px)/3)] x-smallest-screen:min-w-[calc((100%-20px)/2)]"
              key={0}
            >
              <Link href="/guides" className="relative block pb-[61.53%]">
                <Image
                  src="/assets/images/corgi-guides.jpg"
                  fill
                  alt="guides"
                  className="object-cover object-center"
                />
              </Link>
              <div className="flex flex-col p-[40px] small-screen:p-[25px]">
                <Link
                  href="/guides"
                  className="font-quicksand text-[28px] font-bold leading-[1.14] tracking-[-0.01em] text-primary small-screen:text-[18px] small-screen:leading-[1.1] small-screen:tracking-[0.005em]"
                >
                  Xu Hướng Mới Trong Ngành Thú Cưng Năm 2023
                </Link>
                <p className="mt-[15px] overflow-hidden overflow-ellipsis font-quicksand text-[14px] font-normal leading-[1.46] tracking-[0.02em] text-text_color small-screen:max-h-[38px]">
                  Năm 2023, ngành công nghiệp thú cưng nổi bật với xu hướng tập
                  trung vào sức khỏe và hạnh phúc của thú cưng. Nhu cầu về thực
                  phẩm tự nhiên và hữu cơ ngày càng tăng, cùng với việc sử dụng
                  công nghệ như ứng dụng và thiết bị thông minh để theo dõi sức
                  khỏe thú cưng. Xu hướng này mang đến nhiều cơ hội cho doanh
                  nghiệp và nâng cao chất lượng cuộc sống cho thú cưng.
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
                    XEM THÊM
                  </Button>
                </div>
              </div>
            </SwiperSlide>
            {[...Array(4)].map((_, index) => (
              <SwiperSlide
                className="small-screen:swiper-slide small-screen:swiper-slide-visible small-screen:swiper-slide-fully-visible small-screen:swiper-slide-active overflow-hidden rounded-[8px] border border-solid border-light_gray_color_second large-screen:col-span-1 large-screen:row-span-1 large-screen:max-w-[260px] small-screen:min-w-[calc((100%-60px)/4)] x-small-screen:min-w-[calc((100%-40px)/3)] x-smallest-screen:min-w-[calc((100%-20px)/2)]"
                key={index + 1}
              >
                <Item />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="guides-swiper-pagination relative mt-[25px] flex justify-center gap-[5px] large-screen:hidden large-screen:opacity-0" />
        </div>

        <div className="mt-[20px] text-center">
          <Button
            className="mx-auto text-[12px]"
            variant="secondary"
            onClick={() => {
              router.push("/guides");
            }}
          >
            Xem tất cả
          </Button>
        </div>
      </div>
    </div>
  );
}
