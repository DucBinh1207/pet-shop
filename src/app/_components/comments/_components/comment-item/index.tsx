import Image from "next/image";

export default function CommentItem() {
  return (
    <>
      <p className="text-[17px] font-normal leading-[1.55] tracking-[0.015em] text-text_color">
        Faucibus faucibus dictum molestie porta sit in nulla. Lectus urna,
        egestas.
      </p>
      <div className="min-h-[70px mt-[25px] flex items-center gap-[22px]">
        <div className="relative h-[70px] w-[70px] overflow-hidden rounded-[50%]">
          <Image
            src="/assets/images/avatar.jpg"
            alt="comments"
            fill
            className="object-cover object-center"
          ></Image>
        </div>
        <span className="] font-quicksand text-[18px] font-bold leading-[1.11] tracking-[-0.01em] text-primary">
          Mike Johnson
        </span>
      </div>
    </>
  );
}
