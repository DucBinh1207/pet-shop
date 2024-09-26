import DotIcon from "@/components/common/icons/dot-icon";
import Link from "next/link";

export default function Category() {
  return (
    <>
      <Link href="#">Fresh & Frozen Food</Link>
      <DotIcon size={3} className="fill-current text-dark_orange_color" />
      <Link href="#">Sophresh</Link>
    </>
  );
}
