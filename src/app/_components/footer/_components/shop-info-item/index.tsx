import FooterArrowIcon from "@/components/common/icons/footer-arrow-icon";

type props = {
  value: string;
  href: string;
};

export default function ShopInfoItem({ value, href }: props) {
  return (
    <li className="flex items-center gap-[13px]">
      <span>
        <FooterArrowIcon size={10} className="text-footer_icon fill-current" />
      </span>
      <span>
        <a href={href} className="hover_animate hover:text-secondary">
          {value}
        </a>
      </span>
    </li>
  );
}
