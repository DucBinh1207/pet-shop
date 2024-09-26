
"use client";
import StarIcon from "@/components/common/icons/star-icon";

export default function Rating() {
  return (
    <>
      <StarIcon size={12} className="text-dark_yellow_color fill-current" />
      <StarIcon size={12} className="text-dark_yellow_color fill-current" />
      <StarIcon size={12} className="text-dark_yellow_color fill-current" />
      <StarIcon size={12} className="text-dark_yellow_color fill-current" />
      <StarIcon
        size={12}
        className="text-dark_yellow_color fill-current"
        percentage={0.5}
      />
    </>
  );
}
