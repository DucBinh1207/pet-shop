import BreadCrumb from "@/components/bread-crumb";
import FoodsContent from "./foods-content";

export default function PageContent() {
  return (
    <>
      <BreadCrumb pathLink={["foods"]} pathName={["Thức ăn"]} />
      <FoodsContent />
    </>
  );
}
