import BreadCrumb from "@/components/bread-crumb";
import ChangePasswordForm from "../../_components/change-password-form";

export default function PageContent() {
  return (
    <>
      <BreadCrumb pathLink={[""]} pathName={["My Account"]} />
      <ChangePasswordForm title="reset_password" />
    </>
  );
}
