import BreadCrumb from "@/components/bread-crumb";
import FoodsContent from "./foods-content";
import RecentlyViewed from "@/components/recently-viewed/recently-viewed";

export default function PageContent() {
  return (
    <>
      <BreadCrumb pathLink={["foods"]} pathName={["Thức ăn"]} />
      <FoodsContent />
      <RecentlyViewed />
    </>
  );
}
