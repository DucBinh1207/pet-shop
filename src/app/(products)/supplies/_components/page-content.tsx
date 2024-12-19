import BreadCrumb from "@/components/bread-crumb";
import SuppliesContent from "./supplies-content";
import RecentlyViewed from "@/components/recently-viewed/recently-viewed";

export default function PageContent() {
  return (
    <>
      <BreadCrumb pathLink={["supplies"]} pathName={["Vật dụng"]} />
      <SuppliesContent />
      <RecentlyViewed />
    </>
  );
}
