import BusinessTimeIcon from "@/components/common/icons/business-time-icon";
import LocateIcon from "@/components/common/icons/locate-icon";
import MailIcon from "@/components/common/icons/mail-icon";
import PhoneIcon from "@/components/common/icons/phone-icon";
import Link from "next/link";

type noticeItemProps = {
  name: string;
  href: string;
  iconName: "MAIL" | "PHONE" | "LOCATE" | "BUSINESS_TIME";
};

const IconsMap = {
  MAIL: MailIcon,
  PHONE: PhoneIcon,
  LOCATE: LocateIcon,
  BUSINESS_TIME: BusinessTimeIcon,
};

export default function SidebarNoticeItem({
  name,
  href,
  iconName,
}: noticeItemProps) {
  const Icon = IconsMap[iconName];

  //If iconName is "BUSINESS_TIME", render a <span> element; otherwise, render an <a> element with an href attribute
  if (iconName !== "BUSINESS_TIME") {
    return (
      <li className="relative flex flex-nowrap items-center justify-center">
        <Link
          href={href}
          className="text-text_color_second hover:border-text_color_second inline-flex border-b border-solid border-transparent text-[13px] font-semibold leading-[1.23] tracking-[0.015em]"
          target="_blank"
        >
          <Icon className="mr-[9px] fill-current" size={14} />
          {name}
        </Link>
      </li>
    );
  } else {
    return (
      <li className="relative flex flex-nowrap items-center justify-center">
        <span className="text-text_color_second hover:border-text_color_second inline-flex border-b border-solid border-transparent text-[13px] font-semibold leading-[1.23] tracking-[0.015em]">
          <Icon className="mr-[9px] fill-current" size={14} />
          {name}
        </span>
      </li>
    );
  }
}
