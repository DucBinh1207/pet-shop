import BreadCrumb from "@/components/bread-crumb";
import LoginForm from "./login-form";

export default function PageContent() {
  return (
    <>
      <BreadCrumb pathLink={[""]} pathName={["My Account"]} />
      <LoginForm />
    </>
  );
}
