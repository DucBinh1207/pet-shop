import BusinessTimeIcon from "@/components/common/Icons/business-time-icon";
import LocateIcon from "@/components/common/Icons/locate-icon";
import MailIcon from "@/components/common/Icons/mail-icon";
import PhoneIcon from "@/components/common/Icons/phone-icon";
import cn from "@/utils/style/cn";

type noticeItemProps = {
  name: string;
  href: string;
  iconName: "mail" | "phone" | "locate" | "businessTime";
};

const IconsMap = {
  mail: MailIcon,
  phone: PhoneIcon,
  locate: LocateIcon,
  businessTime: BusinessTimeIcon,
};

export default function SidebarNoticeItem({
  name,
  href,
  iconName,
}: noticeItemProps) {
  const Icon = IconsMap[iconName];

  return (
    <li className="relative flex flex-nowrap items-center justify-center">
      <a
        href={href}
        className={cn(
          "inline-flex border-b border-solid border-transparent text-[13px] font-semibold leading-[1.23] tracking-[0.015em] text-header_text hover:border-header_text",
          {
            "pointer-events-none": iconName === "businessTime",
          },
        )}
        target="_blank"
      >
        <Icon className="mr-[9px] fill-current" size={14} />
        {name}
      </a>
    </li>
  );
}
