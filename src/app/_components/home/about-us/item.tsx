import ScissorsIcon from "@/components/common/icons/scissors-icon";

type ItemProps = {
  data: {
    title: string;
    description: string;
  };
};

export default function Item({ data }: ItemProps) {
  return (
    <>
      <ScissorsIcon
        size={22}
        className="mb-[13px] fill-current text-green_color"
      />
      <div>
        <div className="cursor-pointer font-quicksand text-[22px] font-bold leading-[1.27] tracking-[-0.01em] text-primary">
          {data.title}
        </div>
      </div>

      <div>
        <p className="mt-[20px] font-quicksand text-[17px] font-normal leading-[1.53] tracking-[0.015em] text-text_color">
          {data.description}
        </p>
      </div>
    </>
  );
}
