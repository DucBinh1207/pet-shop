import AccountInfo from "./account-info";
import AccountPassword from "./account-password";

export default function AccountDetail() {
  return (
    <div className="mt-[10px] flex max-w-[430px] flex-col" id="account_details">
      <AccountInfo />
      <AccountPassword />
    </div>
  );
}
