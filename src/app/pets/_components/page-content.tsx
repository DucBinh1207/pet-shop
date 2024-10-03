import BreadCrumb from "@/components/bread-crumb";
import PetsCategory from "./pets-category";
import PetsContent from "./pets-content";

export default function PageContent() {
  return (
    <>
      <BreadCrumb pathLink={["pets"]} pathName={["Pets"]} />
      <PetsCategory />
      <PetsContent />
    </>
  );
}
