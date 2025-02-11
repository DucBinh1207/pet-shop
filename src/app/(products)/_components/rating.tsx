import StarIcon from "@/components/common/icons/star-icon";

type props = {
  rating: number;
  review: number;
};

export default function Rating({ rating, review }: props) {
  return (
    <div className="mt-[15px] flex items-center gap-[10px] text-[12px] font-normal leading-[15px] tracking-[0.02em] text-primary">
      <span className="flex gap-[2px]">
        {[...Array(Math.floor(rating))].map((_, index) => (
          <StarIcon
            size={12}
            className="fill-current text-dark_yellow_color"
            key={index}
          />
        ))}

        <StarIcon
          size={12}
          className="fill-current text-dark_yellow_color"
          percentage={rating - Math.floor(rating)}
        />
      </span>

      <span>{review} Đánh giá</span>
    </div>
  );
}
