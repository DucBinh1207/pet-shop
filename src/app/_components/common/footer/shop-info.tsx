import FooterArrowIcon from "@/components/common/icons/footer-arrow-icon";
import Link from "next/link";

type props = {
  value: string;
  href: string;
};

export default function ShopInfo({ value, href }: props) {
  return (
    <li className="flex items-center gap-[13px]">
      <span>
        <FooterArrowIcon size={10} className="text-green_color fill-current" />
      </span>
      <span>
        <Link href={href} className="hover_animate hover:text-secondary">
          {value}
        </Link>
      </span>
    </li>
  );
}
