import Image from "next/image";
import Link from "next/link";

export default function GuideItem() {
  return (
    <>
      <Link href="/guides" className="relative block pb-[61.53%]">
        <Image
          src="/assets/images/corgi-guides.jpg"
          fill
          alt="guides"
          className="object-cover object-center"
        ></Image>
      </Link>
      <div className="flex flex-col p-[25px]">
        <Link
          href="/guides"
          className="font-quicksand text-[18px] font-bold leading-[1.1] tracking-[0.005em] text-primary"
        >
          New Trends in Pets Industry in 2023
        </Link>
        <p className="mt-[15px] max-h-[38px] overflow-hidden overflow-ellipsis font-quicksand text-[14px] font-normal leading-[1.46] tracking-[0.02em] text-text_color">
          Adipiscing adipiscing non, vitae vel ullamcorper lorem massa elit
          libero. Eu ut egestas vel neque ut eget quis. Iaculis in amet cum
          molestie. Ut congue quis proin eleifend. Et a quam ac amet, cursus.
          Nunc posuere venenatis amet eu massa.…
        </p>
      </div>
    </>
  );
}
