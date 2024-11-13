import BreadCrumb from "@/components/bread-crumb";
import LostPasswordForm from "./lost-password-form";

export default function PageContent() {
  return (
    <>
      <BreadCrumb pathLink={[""]} pathName={["Tài khoản"]} />
      <LostPasswordForm />
    </>
  );
}
