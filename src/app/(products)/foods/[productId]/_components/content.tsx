import AdditionalInfo from "./additional-info";
import Description from "@/app/(products)/_components/description";
import Reviews from "@/app/(products)/_components/reviews";
import { Tabs, TabsType } from "@/app/(products)/_shared/tab";
import { ProductContext } from "./page-content";
import { useContext } from "react";

type props = {
  tab: TabsType;
};

export default function Content({ tab }: props) {
  const product = useContext(ProductContext);

  if (!product) return null;

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
