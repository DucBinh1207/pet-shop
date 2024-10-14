import { Tabs, TabsType } from "@/app/(products)/_shared/tab";
import { ProductContext } from "./page-content";
import { useContext } from "react";
import dynamic from "next/dynamic";

const AdditionalInfo = dynamic(() => import("./additional-info"));
const Description = dynamic(
  () => import("@/app/(products)/_components/description"),
);
const Reviews = dynamic(() => import("@/app/(products)/_components/reviews"));

type props = {
  tab: TabsType;
};

export default function Content({ tab }: props) {
  const product = useContext(ProductContext);

  return (
    <>
      {tab === Tabs.DESCRIPTION && (
        <Description description={product.description} />
      )}

      {tab === Tabs.ADDITIONAL_INFO && <AdditionalInfo product={product} />}

      {tab === Tabs.REVIEWS && <Reviews />}
    </>
  );
}
