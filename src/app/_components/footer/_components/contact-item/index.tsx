import BusinessTimeIcon from "@/components/common/icons/business-time-icon";
import LocateIcon from "@/components/common/icons/locate-icon";
import MailIcon from "@/components/common/icons/mail-icon";
import PhoneIcon from "@/components/common/icons/phone-icon";

type props = {
  value: string;
  href: string;
  icon: "MAIL" | "PHONE" | "LOCATE" | "BUSINESS_TIME";
};

const IconsMap = {
  MAIL: MailIcon,
  PHONE: PhoneIcon,
  LOCATE: LocateIcon,
  BUSINESS_TIME: BusinessTimeIcon,
};

export default function ContactItem({ value, href, icon }: props) {
  const Icon = IconsMap[icon];

  //If iconName is "BUSINESS_TIME", render a <span> element; otherwise, render an <a> element with an href attribute
  if (icon !== "BUSINESS_TIME") {
    return (
      <li className="flex items-center">
        <span className="mr-[13px]">
          <Icon size={14} className="fill-current text-footer_icon" />
        </span>
        <span>
          <a
            href={href}
            className="hover_animate hover:text-secondary"
            target="_blank"
          >
            {value}
          </a>
        </span>
      </li>
    );
  } else {
    return (
      <li className="flex items-center">
        <span className="mr-[13px]">
          <Icon size={14} className="fill-current text-footer_icon" />
        </span>
        <span>
          <span className="hover_animate hover:text-secondary">{value}</span>
        </span>
      </li>
    );
  }
}
