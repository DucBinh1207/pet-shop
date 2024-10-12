import StarIcon from "@/components/common/icons/star-icon";

export default function Rating() {
  return (
    <div className="mt-[15px] flex items-center gap-[10px] text-[12px] font-normal leading-[15px] tracking-[0.02em] text-primary">
      <span className="flex gap-[2px]">
        {[...Array(4)].map((_, index) => (
          <StarIcon
            size={12}
            className="fill-current text-dark_yellow_color"
            key={index}
          />
        ))}

        <StarIcon
          size={12}
          className="fill-current text-dark_yellow_color"
          percentage={0.5}
        />
      </span>

      <span>2 Reviews</span>
    </div>
  );
}
