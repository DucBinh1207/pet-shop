import BusinessTimeIcon from "@/components/common/icons/business-time-icon";
import LocateIcon from "@/components/common/icons/locate-icon";
import MailIcon from "@/components/common/icons/mail-icon";
import PhoneIcon from "@/components/common/icons/phone-icon";

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

export default function NoticeItem({ name, href, iconName }: noticeItemProps) {
  const Icon = IconsMap[iconName];

  //If iconName is "BUSINESS_TIME", render a <span> element; otherwise, render an <a> element with an href attribute
  if (iconName !== "BUSINESS_TIME") {
    return (
      <li className="relative flex flex-nowrap items-center justify-center border-b border-solid border-transparent hover:border-header_text">
        <a
          href={href}
          className="inline-flex text-[13px] font-semibold leading-[1.23] tracking-[0.015em] text-header_text"
          target="_blank"
        >
          <Icon className="mr-[9px] fill-current" size={14} />
          {name}
        </a>
      </li>
    );
  } else {
    return (
      <li className="relative flex flex-nowrap items-center justify-center border-b border-solid border-transparent hover:border-header_text">
        <span className="inline-flex text-[13px] font-semibold leading-[1.23] tracking-[0.015em] text-header_text">
          <Icon className="mr-[9px] fill-current" size={14} />
          {name}
        </span>
      </li>
    );
  }
}
