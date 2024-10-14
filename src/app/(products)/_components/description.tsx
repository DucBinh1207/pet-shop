export default function Description({ description }: { description: string }) {
  return (
    <div className="mx-auto max-w-[950px] px-[35px] text-[14px] font-medium leading-[1.5] tracking-[0.02em] text-text_color">
      {description}
    </div>
  );
}
