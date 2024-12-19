import BreadCrumb from "@/components/bread-crumb";
import CartContent from "./cart-content";
import RecentlyViewed from "@/components/recently-viewed/recently-viewed";

export default function PageContent() {
  return (
    <>
      <BreadCrumb pathLink={["cart"]} pathName={["Giỏ hàng"]} />
      <CartContent />
      <RecentlyViewed />
    </>
  );
}
