import Link from "next/link";
import AngleIcon from "../common/icons/angle-icon";

type props = {
  page: string;
};

export default function BreadCrumb({ page }: props) {
  return (
    <div className="w-full min-w-[320px] bg-white px-[50px] pb-[35px] pt-[30px] text-center text-primary">
      <div className="h-full w-full">
        <ol className="mx-auto flex h-full w-[780px] max-w-full flex-wrap items-center justify-center text-[13px] font-medium capitalize leading-[1.23] tracking-[0.015em]">
          <li>
            <Link href="/" className="hover_animate hover:text-secondary">
              home
            </Link>
          </li>
          <li className="mx-[7px]">
            <AngleIcon
              size={7}
              className="translate-y-[1px] rotate-[90deg] fill-current"
            />
          </li>
          <li>{page}</li>
        </ol>
      </div>

      <h1 className="mx-auto max-w-[600px] font-quicksand font-bold capitalize tracking-[0.02em] large-screen:mt-[20px] large-screen:text-[40px] large-screen:leading-[42px] small-screen:mt-[30px] small-screen:text-[30px] small-screen:leading-[34px]">
        {page}
      </h1>
    </div>
  );
}
