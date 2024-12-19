"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import cn from "@/utils/style/cn";
import { getRecentlyViewed } from "@/utils/recently-viewed";
import { LocalProduct } from "@/types/local-product";
import RenderFoodCard from "./render-food-card";
import RenderPetCard from "./render-pet-card";
import RenderSupplyCard from "./render-supply-card";

export default function RecentlyViewed() {
  //Handle fetching data from local storage here

  const [recentlyProducts, setRecentlyProducts] = useState<LocalProduct[]>([]);

  const recentlyProduct = new Array(1);
  const pNum = recentlyProduct.length;

  const swiperRef = useRef(null);

  useEffect(() => {
    const recently = getRecentlyViewed();
    setRecentlyProducts(recently);
  }, []);

  if (recentlyProducts.length === 0) {
    return <></>;
  }

  return (
    <div className="mx-auto mb-[40px] mt-[35px] w-[1160px] min-w-[320px] rounded-[4px] small-screen:mb-[30px] small-screen:mt-[15px] small-screen:w-[calc(100%-60px)] smallest-screen:mb-[20px] smallest-screen:mt-[10px] xx-smallest-screen:w-full">
      <div className="flex h-full flex-col items-center">
        <h2 className="mb-[35px] font-quicksand text-[30px] font-bold leading-[1.13] tracking-[-0.02em] text-primary">
          Sản phẩm vừa xem
        </h2>
        <div className="w-full overflow-hidden">
          <Swiper
            ref={swiperRef}
            effect="coverflow"
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
                slidesPerView: 5,
              },
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{
              clickable: true,

              renderBullet: function (index, className) {
                return `<span class="${className} !bg-[#531492]"></span>`;
              },
            }}
            navigation={{
              prevEl: ".top-pets-swiper-button-prev",
              nextEl: ".top-pets-swiper-button-next",
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper-container relative"
            wrapperClass={cn("large-screen:justify-center", {
              "small-screen:justify-start": pNum > 4,
              "x-small-screen:justify-start": pNum > 3,
              "smallest-screen:justify-start": pNum > 2,
              "xx-smallest-screen:justify-start": pNum > 1,
              "justify-center": pNum === 1,
            })}
          >
            {recentlyProducts &&
              recentlyProducts.map((product) => (
                <SwiperSlide
                  className="border-box flex min-w-[232px] transform flex-col border border-solid border-light_gray_color_second bg-white small-screen:min-w-[25%] x-small-screen:min-w-[calc(100%/3)] x-smallest-screen:min-w-[50%]"
                  key={0}
                >
                  <>
                    {product.category === "pets" && (
                      <RenderPetCard productId={product.id} />
                    )}
                  </>
                  <>
                    {product.category === "foods" && (
                      <RenderFoodCard productId={product.id} />
                    )}
                  </>
                  <>
                    {product.category === "supplies" && (
                      <RenderSupplyCard productId={product.id} />
                    )}
                  </>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
