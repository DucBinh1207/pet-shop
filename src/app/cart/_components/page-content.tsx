import BreadCrumb from "@/components/bread-crumb";
import CartContent from "./cart-content";
import RecentlyViewed from "./recently-viewed";

export default function PageContent() {
  return (
    <>
      <BreadCrumb pathLink={["cart"]} pathName={["Cart"]} />
      <CartContent />
      <RecentlyViewed />
    </>
  );
}
