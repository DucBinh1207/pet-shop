"use client";

import CircleBtn from "@/components/common/icons/circle-btn";
import HeartWithDogIcon from "@/components/common/icons/heart_with_dog";
import PlusCircleIcon from "@/components/common/icons/plus-circle-icon";
import PlayVideo from "./play-video";
import Item from "./item";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination, EffectCoverflow } from "swiper/modules";
import { useRef } from "react";

type ServiceItem = {
  title: string;
  description: string;
};

const sampleData: ServiceItem[] = [
  {
    title: "Tỉa lông",
    description:
      "Cắt tỉa lông thú cưng thường xuyên không chỉ giúp chúng luôn gọn gàng mà còn góp phần vào sức khỏe và sự thoải mái của chúng.",
  },
  {
    title: "Chăm sóc da",
    description:
      "Chăm sóc da giúp thú cưng luôn có làn da khỏe mạnh và mịn màng.",
  },
  {
    title: "Khám sức khỏe",
    description:
      "Khám định kỳ để đảm bảo sức khỏe của thú cưng luôn trong trạng thái tốt nhất.",
  },
  {
    title: "Tắm cho thú cưng",
    description:
      "Tắm cho thú cưng giúp chúng luôn sạch sẽ, thơm tho và khỏe mạnh.",
  },
  {
    title: "Cắt móng",
    description:
      "Cắt móng cho thú cưng định kỳ giúp ngăn ngừa những vấn đề về móng và da.",
  },
];

export default function AboutUs() {
  const swiperRef = useRef(null);

  return (
    <>
      <div className="mx-auto mb-[35px] mt-[50px] max-w-[1920px] border-y border-solid border-light_gray_color_second bg-about_us bg-cover bg-center">
        <div className="mx-auto flex min-h-[640px] max-w-[1160px] small-screen:w-[calc(100%-60px)] small-screen:max-w-[1189px] small-screen:flex-wrap smallest-screen:max-w-[767px] smallest-screen:px-[20px] smallest-screen:pb-[20px] smallest-screen:pt-[25px]">
          <div className="relative flex items-center up-smallest-screen:w-[50%]">
            <picture className="relative w-full">
              <img
                src="/assets/images/about_us_pet.png"
                alt="group of pets"
                className="!h-auto w-full"
              />
            </picture>

            <div className="absolute left-[-20px] top-[83px] small-screen:left-[84px] small-screen:top-[51px] smallest-screen:hidden smallest-screen:opacity-0">
              <CircleBtn size={150} className="rounded-[50%] bg-white" />
            </div>
          </div>

          <div className="flex items-center up-smallest-screen:w-[50%]">
            <div className="flex flex-col smallest-screen:pb-[10px] smallest-screen:pt-[20px]">
              <h2 className="mb-[40px] mt-[35px] font-quicksand text-[30px] font-bold leading-[34px] tracking-[-0.025em] text-primary">
                Về chúng tôi
              </h2>

              <div>
                <div className="mb-[25px] flex w-full pr-[20px] smallest-screen:flex-col smallest-screen:items-start">
                  <div className="mr-[20px] mt-[3px]">
                    <HeartWithDogIcon
                      size={35}
                      className="relative fill-current text-green_color smallest-screen:mb-[10px] smallest-screen:mt-[5px]"
                    />
                  </div>

                  <p className="text-[17px] leading-[26px] tracking-[0.015em] text-text_color">
                    Tại cửa hàng thú cưng của chúng tôi, chúng tôi xem thú cưng
                    như gia đình. Tình yêu của chúng tôi dành cho động vật dẫn
                    dắt chúng tôi trong việc cung cấp những sản phẩm và lời
                    khuyên tốt nhất để chăm sóc cho chúng. Chúng tôi ở đây để
                    giúp bạn mang đến cho những người bạn bốn chân của mình tình
                    yêu và sự chú ý mà chúng xứng đáng nhận được.
                  </p>
                </div>
              </div>

              <div>
                <div className="mb-[25px] flex w-full pr-[20px] smallest-screen:flex-col smallest-screen:items-start">
                  <div className="mr-[20px] mt-[3px]">
                    <PlusCircleIcon
                      size={35}
                      className="relative fill-current text-green_color smallest-screen:mb-[10px] smallest-screen:mt-[5px]"
                    />
                  </div>

                  <p className="text-[17px] leading-[26px] tracking-[0.015em] text-text_color">
                    Chúng tôi ưu tiên sức khỏe của thú cưng bằng cách đảm bảo
                    chúng được tiêm chủng đầy đủ. Việc tiêm vaccine là rất quan
                    trọng để giữ cho chúng an toàn và khỏe mạnh, và chúng tôi
                    coi đây là điều nghiêm túc. Cập nhật vaccine giúp thú cưng
                    có cơ hội tốt nhất để sống lâu và hạnh phúc.
                  </p>
                </div>
              </div>

              <div>
                <PlayVideo />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-[-70px] max-w-[1920px] smallest-screen:mt-0">
        <div className="mx-auto max-w-[1160px] small-screen:max-w-[calc(100%-60px)]">
          <div className="w-full overflow-hidden">
            <Swiper
              ref={swiperRef}
              effect="coverflow"
              grabCursor
              breakpoints={{
                1: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                500: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                756: {
                  spaceBetween: 10,
                  slidesPerView: 3,
                },
                988: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              pagination={{
                el: ".about-us-swiper-pagination",
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
            >
              {[...Array(5)].map((_, index) => (
                <SwiperSlide
                  key={index}
                  className="min-w-[360px] rounded-[8px] border border-solid border-light_gray_color bg-white px-[35px] pb-[44px] pt-[35px] small-screen:min-w-[calc((100%-80px)/3)] small-screen:p-[25px] x-small-screen:min-w-[calc((100%-20px)/3)] x-smallest-screen:min-w-[calc((100%-20px)/2)] xxx-smallest-screen:min-w-full"
                >
                  <Item data={sampleData[index]} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="about-us-swiper-pagination !relative mt-[25px] flex justify-center gap-[10px]" />
        </div>
      </div>
    </>
  );
}
