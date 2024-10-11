import usePetProduct from "@/store/use-pet-product";
import { useShallow } from "zustand/react/shallow";
import { Tabs, TabsType } from "./product-overview";
import Image from "next/image";
import StarIcon from "@/components/common/icons/star-icon";
import { useState } from "react";
import cn from "@/utils/style/cn";
import ReviewForm from "./review-form";

type props = {
  tab: TabsType;
};

export default function Content({ tab }: props) {
  const [paging, setPaging] = useState<number>(2);

  const { product } = usePetProduct(
    useShallow((state) => ({
      product: state.product,
    })),
  );

  function handlePagingFilter(pagingCurrent: number) {
    setPaging(pagingCurrent);
  }

  if (!product) return null;

  if (tab === Tabs.DESCRIPTION)
    return (
      <div className="mx-auto max-w-[950px] px-[35px] text-[14px] font-medium leading-[1.5] tracking-[0.02em] text-text_color">
        {product.description}
      </div>
    );
  if (tab === Tabs.ADDITIONAL_INFO)
    return (
      <div className="mx-auto w-full max-w-[950px] px-[35px] text-[14px] font-medium leading-[1.5] tracking-[0.02em] text-text_color">
        <div className="flex items-center justify-center gap-[10px]">
          <table className="min-w-[50%] smallest-screen:w-full xxx-smallest-screen:block">
            <tbody className="flex w-full flex-col items-center xxx-smallest-screen:block">
              <InfoRow name="Name" value={product.name} />
              <InfoRow name="Type" value={product.type} />
              <InfoRow name="Rating" value={product.rating} />
              <InfoRow name="Gender" value={product.gender} />
              <InfoRow name="Health" value={product.health} />
              <InfoRow name="Father" value={product.father} />
              <InfoRow name="Mother" value={product.mother} />
              <InfoRow name="Deworming" value={product.deworming} />
              <InfoRow name="Vaccine" value={product.breed} />
              <InfoRow name="Breed" value={product.breed} />
              <InfoRow name="Traits" value={product.traits} />
              <InfoRow name="Breed" value={product.breed} />
            </tbody>
          </table>
        </div>
      </div>
    );

  if (tab === Tabs.REVIEWS)
    return (
      <div className="mx-auto max-w-[770px] px-[35px]">
        <div className="flex flex-col">
          <ul className="flex flex-col">
            <Comment rating={5} />
            <Comment rating={4} />
            <Comment rating={1} />
            <Comment rating={3} />
            <Comment rating={2} />

            <div className="mt-[10px] flex justify-center pb-[30px]">
              <ul className="flex flex-wrap items-center justify-center text-[18px] font-medium leading-[27px] tracking-[0.02em] text-text_color">
                <li className="m-[2.5px]">
                  <button
                    type="button"
                    className={cn(
                      "hover_animate inline-block h-[50px] w-[50px] cursor-pointer rounded-[50%] border-[2px] border-solid border-primary text-center uppercase outline-none hover:bg-primary hover:text-white",
                      {
                        "bg-primary text-white": paging === 1,
                        "bg-white text-primary": paging !== 1,
                      },
                    )}
                    onClick={() => {
                      handlePagingFilter(1);
                    }}
                  >
                    1
                  </button>
                </li>

                <li className="m-[2.5px]">
                  <button
                    type="button"
                    className={cn(
                      "hover_animate inline-block h-[50px] w-[50px] cursor-pointer rounded-[50%] border-[2px] border-solid border-primary text-center uppercase outline-none hover:bg-primary hover:text-white",
                      {
                        "bg-primary text-white": paging === 2,
                        "bg-white text-primary": paging !== 2,
                      },
                    )}
                    onClick={() => {
                      handlePagingFilter(2);
                    }}
                  >
                    2
                  </button>
                </li>

                <li className="m-[2.5px]">
                  <button
                    type="button"
                    className={cn(
                      "hover_animate inline-block h-[50px] w-[50px] cursor-pointer rounded-[50%] border-[2px] border-solid border-primary text-center uppercase outline-none hover:bg-primary hover:text-white",
                      {
                        "bg-primary text-white": paging === 3,
                        "bg-white text-primary": paging !== 3,
                      },
                    )}
                    onClick={() => {
                      handlePagingFilter(3);
                    }}
                  >
                    3
                  </button>
                </li>

                <li className="m-[2.5px]">
                  <span className="hover_animate inline-flex h-[50px] w-[50px] cursor-default items-center justify-center rounded-[50%] border-[2px] border-solid border-primary bg-white text-center uppercase text-primary outline-none">
                    ...
                  </span>
                </li>

                <li className="m-[2.5px]">
                  <button
                    type="button"
                    className={cn(
                      "hover_animate inline-block h-[50px] w-[50px] cursor-pointer rounded-[50%] border-[2px] border-solid border-primary text-center uppercase outline-none hover:bg-primary hover:text-white",
                      {
                        "bg-primary text-white": paging === 100,
                        "bg-white text-primary": paging !== 100,
                      },
                    )}
                    onClick={() => {
                      handlePagingFilter(100);
                    }}
                  >
                    100
                  </button>
                </li>
              </ul>
            </div>
          </ul>

          <div className="mt-[30px] flex flex-col">
            <h2 className="mb-[20px] text-[22px] font-bold leading-[1.27] tracking-[0.02em] text-primary">
              Add a review
            </h2>

            <ReviewForm />
          </div>
        </div>
      </div>
    );
}

function InfoRow({
  name,
  value,
}: {
  name: string;
  value: string | number | null;
}) {
  if (!value) return null;

  return (
    <tr className="flex w-full border-b border-solid border-light_gray_color_second text-left">
      <th className="min-w-[50%] py-[14px] font-bold text-primary">{name} :</th>
      <td className="min-w-[50%] py-[14px]">{value}</td>
    </tr>
  );
}

function Comment({ rating }: { rating: number | null }) {
  if (!rating) return null;

  return (
    <li className="mb-[10px]">
      <div className="relative pb-[35px] pl-[80px]">
        <Image
          src="/assets/images/avatar.jpg"
          width={60}
          height={60}
          alt="avatar"
          className="absolute left-0 top-0 rounded-[50%]"
        />
        <div className="flex flex-col gap-[17px]">
          <div className="flex gap-[15px]">
            <span className="flex gap-[2px]">
              {[...Array(rating)].map((_, index) => (
                <StarIcon
                  size={12}
                  className="fill-current text-dark_yellow_color"
                  key={index}
                />
              ))}

              {[...Array(5 - rating)].map((_, index) => (
                <StarIcon
                  size={12}
                  className="fill-current text-dark_yellow_color opacity-20"
                  key={index}
                />
              ))}
            </span>

            <span className="text-[13px] font-bold leading-[16px] tracking-[0.015em] text-primary">
              Tran Duc Binh
            </span>

            <span className="text-[12px] font-medium leading-[15px] tracking-[0.02em] text-text_color opacity-70">
              December 7, 2022
            </span>
          </div>
          <div className="text-[14px] font-medium leading-[1.5] tracking-[0.02em] text-text_color">
            <p>
              If it does as it says then it’s good stuff. Dog loves it. I
              haven’t tried it so we’re going with the dogs review.
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}
