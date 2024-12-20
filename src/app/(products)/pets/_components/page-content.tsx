import BreadCrumb from "@/components/bread-crumb";
import PetsContent from "./pets-content";
import RecentlyViewed from "@/components/recently-viewed/recently-viewed";

export default function PageContent() {
  return (
    <>
      <BreadCrumb pathLink={["pets"]} pathName={["Thú cưng"]} />
      <PetsContent />
      <RecentlyViewed />
    </>
  );
}
