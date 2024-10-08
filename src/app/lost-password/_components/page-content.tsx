import BreadCrumb from "@/components/bread-crumb";
import RegisterForm from "./lost-password-form";

export default function PageContent() {
  return (
    <>
      <BreadCrumb pathLink={[""]} pathName={["My Account"]} />
      <RegisterForm />
    </>
  );
}
