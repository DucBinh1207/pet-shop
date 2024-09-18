type props = {
  value: string;
  href: string;
};

export default function LegalItem({ value, href }: props) {
  return (
    <span className="smallest-screen:mr-[15px mb-[12px] mr-[10px] smallest-screen:mb-[18px]">
      <a href={href} className="hover_animate hover:text-secondary">
        {value}
      </a>
    </span>
  );
}
