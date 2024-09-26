import FacebookFilledIcon from "@/components/common/icons/facebook-filled-icon";
import InstagramFilledIcon from "@/components/common/icons/instagram-filled-icon";
import TiktokIcon from "@/components/common/icons/tiktok-icon";
import YoutubeIcon from "@/components/common/icons/youtube-icon";
import Link from "next/link";

type props = {
  href: string;
  icon: "FACEBOOK" | "INSTAGRAM" | "YOUTUBE" | "TIKTOK";
};

const IconsMap = {
  FACEBOOK: FacebookFilledIcon,
  INSTAGRAM: InstagramFilledIcon,
  YOUTUBE: YoutubeIcon,
  TIKTOK: TiktokIcon,
};

export default function SocialItem({ href, icon }: props) {
  const Icon = IconsMap[icon];
  return (
    <Link
      href={href}
      className="hover_animate hover:bg-secondary hover:opacity-25"
      target="_blank"
    >
      <Icon size={18} className="m-[9px]" />
    </Link>
  );
}
