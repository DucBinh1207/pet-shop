import BreadCrumb from "@/components/bread-crumb";
import PetsContent from "./pets-content";

export default function PageContent() {
  return (
    <>
      <BreadCrumb pathLink={["pets"]} pathName={["Pets"]} />
      <PetsContent />
    </>
  );
}
