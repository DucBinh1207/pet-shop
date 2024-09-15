type TooltipProps = {
  value?: string;
};

export default function TooltipNode({ value }: TooltipProps) {
  return (
    <>
      {value && (
        <span className="tooltip_animate invisible absolute bottom-[calc((100%+10px))] right-0 inline-flex translate-y-[7px] scale-[0.7] text-nowrap rounded-[15px] bg-primary px-[9px] py-[6px] text-center text-[10px] font-bold uppercase leading-[13px] tracking-[0.025em] text-white opacity-0 after:absolute after:bottom-[-10px] after:right-[15px] after:block after:border-[6px] after:border-solid after:border-transparent after:border-t-primary after:content-[''] peer-hover:visible peer-hover:translate-y-0 peer-hover:scale-100 peer-hover:opacity-100">
          {value}
        </span>
      )}
    </>
  );
}
