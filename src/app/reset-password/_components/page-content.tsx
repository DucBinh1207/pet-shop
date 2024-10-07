import BreadCrumb from "@/components/bread-crumb";
import ResetPasswordForm from "./reset-password-form";

export default function PageContent() {
  return (
    <>
      <BreadCrumb pathLink={[""]} pathName={["My Account"]} />
      <ResetPasswordForm />
    </>
  );
}
