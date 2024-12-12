import Button from "@/components/common/button";
import useMutation from "@/hooks/use-mutation";
import { updatePassword } from "@/services/api/user-api";
import { toastError, toastSuccess } from "@/utils/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "./input-field";

export const schema = z
  .object({
    oldPassword: z.string().min(8, "Password must be at least 8 characters"),
    newPassword: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirm"],
  });

export type ChangePasswordFormType = z.infer<typeof schema>;

export default function AccountPassword() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ChangePasswordFormType>({
    defaultValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    mode: "onSubmit",
    resolver: zodResolver(schema),
  });

  const { mutate } = useMutation({
    fetcher: updatePassword,
    options: {
      onSuccess: () => {
        toastSuccess("Cập nhật mật khẩu thành công");
      },
      onError: (error) => {
        toastError(error.message);
      },
      onFinally: () => {},
    },
  });

  const onSubmit = handleSubmit((data: ChangePasswordFormType) => {
    mutate({ data });
    reset();
  });

  return (
    <>
      <form
        onSubmit={onSubmit}
        className="mt-[25px] flex max-w-[430px] flex-col gap-[10px]"
      >
        <fieldset className="mt-[40px] flex max-w-[430px] flex-col gap-[10px]">
          <legend className="text-[22px] font-medium leading-[28px] text-primary">
            Thay đổi mật khẩu
          </legend>

          <InputField
            id="oldPassword"
            type="password"
            label="Mật khẩu cũ"
            placeholder="Nhập mật khẩu cũ "
            {...register("oldPassword")}
            error={errors.oldPassword?.message}
          />

          <InputField
            id="newPassword"
            type="password"
            label="Mật khẩu mới"
            placeholder="Nhập mật khẩu mới "
            {...register("newPassword")}
            error={errors.newPassword?.message}
          />

          <InputField
            id="confirmPassword"
            type="password"
            label="Xác nhận mật khẩu mới"
            placeholder="Nhập lại mật khẩu mới "
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />
        </fieldset>

        <Button size="xsm" variant="secondary" className="mt-[35px] font-bold">
          Cập nhật mật khẩu
        </Button>
      </form>
    </>
  );
}
