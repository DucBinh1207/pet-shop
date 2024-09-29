import BreadCrumb from "@/components/bread-crumb";
import CartContent from "./_components/cart-content";
import RecentlyViewed from "./_components/recently-viewed";

export default function Cart() {
  return (
    <>
      <BreadCrumb page="Cart" key="cart" />
      <CartContent />
      <RecentlyViewed />
    </>
  );
}
