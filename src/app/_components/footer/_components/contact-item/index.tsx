import BusinessTimeIcon from "@/components/common/icons/business-time-icon";
import LocateIcon from "@/components/common/icons/locate-icon";
import MailIcon from "@/components/common/icons/mail-icon";
import PhoneIcon from "@/components/common/icons/phone-icon";
import cn from "@/utils/style/cn";

type props = {
  value: string;
  href: string;
  icon: "mail" | "phone" | "locate" | "businessTime";
};

const IconsMap = {
  mail: MailIcon,
  phone: PhoneIcon,
  locate: LocateIcon,
  businessTime: BusinessTimeIcon,
};

export default function ContactItem({ value, href, icon }: props) {
  const Icon = IconsMap[icon];
  return (
    <li className="flex items-center">
      <span className="mr-[13px]">
        <Icon size={14} className="text-footer_icon fill-current" />
      </span>
      <span>
        <a
          href={href}
          className={cn("hover_animate hover:text-secondary", {
            "pointer-events-none": icon === "businessTime",
          })}
        >
          {value}
        </a>
      </span>
    </li>
  );
}
