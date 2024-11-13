import Button from "@/components/common/button";
import Input from "@/components/common/input";

export default function AccountDetail() {
  return (
    <div className="mt-[10px] flex max-w-[430px] flex-col" id="account_details">
      <h2 className="text-[22px] font-medium leading-[28px] text-primary xxx-smallest-screen:text-center">
        Chi tiết tài khoản
      </h2>

      <form
        action=""
        className="mt-[25px] flex max-w-[430px] flex-col gap-[10px]"
      >
        <div className="flex flex-col justify-start gap-[10px]">
          <label className="text-primary" htmlFor="user_name">
            Tên *
          </label>
          <Input id="user_name" />
        </div>

        <div className="flex flex-col justify-start gap-[10px]">
          <label className="text-primary" htmlFor="user_telephone">
            Số điện thoại *
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
            Quốc tịch *
          </label>
          <Input id="user_nationality" />
        </div>

        <Button
          type="submit"
          size="xsm"
          variant="secondary"
          className="mt-[35px] font-bold"
        >
          Lưu thay đổi
        </Button>
      </form>

      <form
        action=""
        className="mt-[25px] flex max-w-[430px] flex-col gap-[10px]"
      >
        <fieldset className="mt-[40px] flex max-w-[430px] flex-col gap-[10px]">
          <legend className="mb-[25px] text-[22px] font-medium leading-[28px] text-primary">
            Thay đổi mật khẩu
          </legend>

          <div className="flex flex-col justify-start gap-[10px]">
            <label className="text-primary" htmlFor="password">
              Mật khẩu hiện tại 
            </label>
            <Input id="password" />
          </div>

          <div className="flex flex-col justify-start gap-[10px]">
            <label className="text-primary" htmlFor="new_password">
              Mật khẩu mới
            </label>
            <Input id="new_password" />
          </div>

          <div className="flex flex-col justify-start gap-[10px]">
            <label className="text-primary" htmlFor="confirm_password">
              Xác nhận mật khẩu mới
            </label>
            <Input id="confirm_password" />
          </div>
        </fieldset>

        <Button
          type="submit"
          size="xsm"
          variant="secondary"
          className="mt-[35px] font-bold"
        >
          Cập nhật mật khẩu
        </Button>
      </form>
    </div>
  );
}
