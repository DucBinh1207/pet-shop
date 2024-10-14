import StarIcon from "@/components/common/icons/star-icon";
import Image from "next/image";

export default function Comment({ rating }: { rating: number }) {
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
