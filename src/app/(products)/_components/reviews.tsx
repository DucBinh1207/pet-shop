import Image from "next/image";
import ReviewForm from "./review-form";
import cn from "@/utils/style/cn";
import { useState } from "react";
import StarIcon from "@/components/common/icons/star-icon";

export default function Reviews() {
  const [paging, setPaging] = useState<number>(2);

  function handlePagingFilter(pagingCurrent: number) {
    setPaging(pagingCurrent);
  }

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
