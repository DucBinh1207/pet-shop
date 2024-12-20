import StarIcon from "@/components/common/icons/star-icon";
import convertDate from "@/utils/convert-date";
import Image from "next/image";

type props = {
  name: string;
  avatar: string;
  email: string;
  rating: number;
  content: string;
  time: string;
};

export default function Comment({
  name,
  avatar,
  email,
  rating,
  content,
  time,
}: props) {
  return (
    <li className="mb-[10px]">
      <div className="relative pb-[35px] pl-[80px]">
        <Image
          src={avatar}
          width={60}
          height={60}
          alt="avatar"
          className="absolute left-0 top-0 h-[60px] w-[60px] rounded-[50%] object-cover"
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
              {name ? name : email.split("@")[0]}
            </span>

            <span className="text-[12px] font-medium leading-[15px] tracking-[0.02em] text-text_color opacity-70">
              {convertDate(time)}
            </span>
          </div>
          <div className="text-[14px] font-medium leading-[1.5] tracking-[0.02em] text-text_color">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </li>
  );
}
