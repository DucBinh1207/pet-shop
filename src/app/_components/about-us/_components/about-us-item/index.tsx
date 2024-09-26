import Button from "@/components/common/button";
import ScissorsIcon from "@/components/common/icons/scissors-icon";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AboutUsItem() {
  const router = useRouter();

  return (
    <>
      <ScissorsIcon
        size={22}
        className="mb-[13px] fill-current text-green_color"
      />

      <div>
        <Link
          href="/"
          className="cursor-pointer font-quicksand text-[22px] font-bold leading-[1.27] tracking-[-0.01em] text-primary"
        >
          Pets Grooming
        </Link>
      </div>

      <div>
        <p className="mt-[20px] font-quicksand text-[17px] font-normal leading-[1.53] tracking-[0.015em] text-text_color">
          Maecenas nisi proin at in. Imperdiet nunc adipiscing eros, ut dolor
          consequat. Mattis diam tortor.
        </p>
      </div>

      <div>
        <Button
          size="xsm"
          className="mt-[30px] font-quicksand text-[13px] font-bold leading-[16px] tracking-[0.05em]"
          onClick={() => {
            router.push("/");
          }}
        >
          Read more
        </Button>
      </div>
    </>
  );
}
