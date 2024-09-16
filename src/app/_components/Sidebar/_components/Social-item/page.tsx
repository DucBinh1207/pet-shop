import FacebookIcon from "@/components/common/Icons/facebook-icon";
import InstagramIcon from "@/components/common/Icons/instagram-icon";
import TiktokIcon from "@/components/common/Icons/tiktok-icon";
import YoutubeIcon from "@/components/common/Icons/youtube-icon";
import Link from "next/link";

type socialItemProps = {
  href: string;
  iconName: "facebook" | "instagram" | "youtube" | "tiktok";
};

const IconsMap = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  tiktok: TiktokIcon,
};

export default function SocialItem({ href, iconName }: socialItemProps) {
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

        <div className="absolute h-[50px] w-[50px] rounded-[45%] border border-solid border-header_text transition-all duration-300 hover:scale-[110%]"></div>
      </Link>
    </li>
  );
}
