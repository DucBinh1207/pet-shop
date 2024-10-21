import CircleCheckIcon from "@/components/common/icons/circle-check";
import Link from "next/link";

export default function Page() {
  return (
    <div className="mx-auto mb-[40px] mt-[30px] w-[1160px] rounded-[4px] small-screen:w-[calc(100%-60px)] smallest-screen:w-full">
      <div className="flex w-full flex-col items-center justify-between bg-white px-[60px] py-[125px]">
        <div className="relative inline-block">
          <CircleCheckIcon
            size={90}
            className="fill-current text-dark_yellow_color"
          />
        </div>
        <h1 className="mx-auto mt-[35px] max-w-[800px] text-center text-[27px] font-bold leading-[1.27] tracking-[-0.01em] text-primary">
          Please verify your email
        </h1>
        <p className="mx-auto mb-[20px] mt-[20px] w-[600px] text-center text-text_color">
          Please check your inbox and follow the instructions to verify your
          account.
        </p>
        <Link
          href="https://mail.google.com/mail/u/0/#inbox"
          className="hover_animate inline-block cursor-pointer rounded-[25px] border-[2px] border-solid border-primary bg-white px-[30px] py-[8px] text-center text-[13px] font-bold uppercase text-primary outline-none hover:bg-primary hover:text-white"
          target="_blank"
        >
          Check your mail
        </Link>
      </div>
    </div>
  );
}
