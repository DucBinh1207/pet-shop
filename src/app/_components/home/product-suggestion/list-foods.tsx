import Loading from "@/app/loading";
import FoodCard from "@/components/food-card";
import { FoodsCategoryType } from "@/constants/foods-category-type";
import { IngredientType } from "@/constants/ingredient-type";
import { PriceRange } from "@/constants/price-range";
import { SortType } from "@/constants/sort-type";
import { WeightType } from "@/constants/weight-type";
import useFoods from "@/hooks/products/useFoods";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import {
  Pagination,
  Navigation,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import { useRef } from "react";

export default function ListFoods() {
  const swiperRef = useRef(null);

  const categoryFoods = FoodsCategoryType.ALL;
  const sort = SortType.DEFAULT;
  const paging = 1;
  const price = [PriceRange.MIN, PriceRange.MAX];
  const limit = 10;
  const ingredient = [IngredientType.BEEF, IngredientType.CHICKEN];
  const weight = WeightType.FIVE;

  const { foods, isLoading, isError } = useFoods({
    category: categoryFoods,
    sort,
    paging,
    price,
    ingredient,
    weight,
    limit,
  });

  if (isError) window.location.href = "/error";

  if (isLoading) return <Loading />;

  return (
    <>
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
            {foods && foods.length >= index * 2 && (
              <>
                {foods[index * 2] && <FoodCard data={foods[index * 2]} />}
                {foods[index * 2 + 1] && (
                  <FoodCard data={foods[index * 2 + 1]} />
                )}
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
