import Button from "@/components/common/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function CategoryHighlightItem({
  order: orderNum,
}: {
  order: number;
}) {
  const router = useRouter();

  return (
    <div
      style={{ order: orderNum }}
      className="relative min-h-[200px] overflow-hidden px-[7.5px] up-xx-large-screen:w-[25%] down-xx-large-screen:min-w-[calc(100%/3)] up-large-screen:min-w-[50%] smallest-screen:min-w-[100%]"
    >
      <div className="relative overflow-hidden rounded-[8px]">
        <div className="relative z-[10] flex flex-col px-[35px] py-[48.75px]">
          <span className="font-quicksand text-[31px] font-bold leading-[1.03] tracking-[-0.005em] text-primary">
            Pet Toys
          </span>
          <span className="leading-[1.17 ] mt-[15px] font-quicksand text-[18px] font-normal tracking-[0.005em] text-primary">
            Fun & Exciting
          </span>
          <span className="mt-[30px]">
            <Button
              variant="tertiary"
              size="xsm"
              className="text-center text-[13px] font-bold uppercase leading-[16px] tracking-[0.05em]"
              onClick={() => {
                router.push("/guides");
              }}
            >
              SHOP NOW
            </Button>
          </span>
        </div>
        <Image src="/assets/images/highlight1.jpg" fill alt="pet toys"></Image>
      </div>
    </div>
  );
}
