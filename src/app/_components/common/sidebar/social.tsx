import FacebookIcon from "@/components/common/icons/facebook-icon";
import InstagramIcon from "@/components/common/icons/instagram-icon";
import TiktokIcon from "@/components/common/icons/tiktok-icon";
import YoutubeIcon from "@/components/common/icons/youtube-icon";
import Link from "next/link";

type props = {
  href: string;
  iconName: "FACEBOOK" | "INSTAGRAM" | "YOUTUBE" | "TIKTOK";
};

const IconsMap = {
  FACEBOOK: FacebookIcon,
  INSTAGRAM: InstagramIcon,
  YOUTUBE: YoutubeIcon,
  TIKTOK: TiktokIcon,
};

export default function Social({ href, iconName }: props) {
  const Icon = IconsMap[iconName];

  return (
    <li>
      <Link
        href={href}
        target="_blank"
        className="group relative flex h-[50px] w-[50px] flex-col"
      >
        <div className="icon_sidebar_animate flex translate-y-[-50%] items-center justify-center opacity-0 group-hover:translate-y-[75%] group-hover:opacity-100">
          <Icon size={20} className="scale-125" />
        </div>
        <div className="icon_sidebar_animate flex translate-y-[-25%] items-center justify-center opacity-100 group-hover:translate-y-[75%] group-hover:opacity-0">
          <Icon size={20} className="scale-125" />
        </div>

        <div className="absolute h-[50px] w-[50px] rounded-[45%] border border-solid border-text_color_second transition-all duration-300 hover:scale-[110%]"></div>
      </Link>
    </li>
  );
}
