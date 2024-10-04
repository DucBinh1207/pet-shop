import Button from "@/components/common/button";
import Input from "@/components/common/input";

export default function AccountDetail() {
  return (
    <div className="mt-[10px] flex max-w-[430px] flex-col" id="account_details">
      <h2 className="text-[22px] font-medium leading-[28px] text-primary xxx-smallest-screen:text-center">
        Account Details
      </h2>

      <form
        action=""
        className="mt-[25px] flex max-w-[430px] flex-col gap-[10px]"
      >
        <div className="flex flex-col justify-start gap-[10px]">
          <label className="text-primary" htmlFor="user_name">
            Name *
          </label>
          <Input id="user_name" />
        </div>

        <div className="flex flex-col justify-start gap-[10px]">
          <label className="text-primary" htmlFor="user_telephone">
            Telephone *
          </label>
          <Input id="user_telephone" />
        </div>

        <div className="flex flex-col justify-start gap-[10px]">
          <label className="text-primary" htmlFor="user_email">
            Email *
          </label>
          <Input id="user_email" />
        </div>

        <div className="flex flex-col justify-start gap-[10px]">
          <label className="text-primary" htmlFor="user_nationality">
            Nationnality *
          </label>
          <Input id="user_nationality" />
        </div>

        <fieldset className="mt-[40px] flex max-w-[430px] flex-col gap-[10px]">
          <legend className="mb-[25px] text-[22px] font-medium leading-[28px] text-primary">
            Password Change
          </legend>

          <div className="flex flex-col justify-start gap-[10px]">
            <label className="text-primary" htmlFor="password">
              Current password (leave blank to leave unchanged)
            </label>
            <Input id="password" />
          </div>

          <div className="flex flex-col justify-start gap-[10px]">
            <label className="text-primary" htmlFor="new_password">
              New password (leave blank to leave unchanged)
            </label>
            <Input id="new_password" />
          </div>

          <div className="flex flex-col justify-start gap-[10px]">
            <label className="text-primary" htmlFor="confirm_password">
              Confirm new password
            </label>
            <Input id="confirm_password" />
          </div>
        </fieldset>
      </form>

      <Button
        type="submit"
        size="xsm"
        variant="secondary"
        className="mt-[35px] font-bold"
      >
        Save changes
      </Button>
    </div>
  );
}
