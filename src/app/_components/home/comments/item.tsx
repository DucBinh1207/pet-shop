import { ReviewType } from "@/types/review";
import Image from "next/image";

type props = {
  review: ReviewType;
};
export default function Item({ review }: props) {
  return (
    <>
      <p className="text-[17px] font-normal leading-[1.55] tracking-[0.015em] text-text_color">
        {review.content}
      </p>

      <div className="min-h-[70px mt-[25px] flex items-center gap-[22px]">
        <div className="relative h-[70px] w-[70px] overflow-hidden rounded-[50%]">
          <Image
            src={review.image ?? "/assets/images/avatar.jpg"}
            alt="comments"
            fill
            className="object-cover object-center"
          />
        </div>
        <span className="] font-quicksand text-[18px] font-bold leading-[1.11] tracking-[-0.01em] text-primary">
          {review.name ? (
            <span>{review.name}</span>
          ) : (
            <span>{review.email.split("@")[0]}</span>
          )}
        </span>
      </div>
    </>
  );
}
