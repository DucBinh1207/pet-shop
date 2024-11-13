import BreadCrumb from "@/components/bread-crumb";
import SuppliesContent from "./supplies-content";

export default function PageContent() {
  return (
    <>
      <BreadCrumb pathLink={["supplies"]} pathName={["Vật dụng"]} />
      <SuppliesContent />
    </>
  );
}
