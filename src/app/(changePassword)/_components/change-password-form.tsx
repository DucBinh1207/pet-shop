"use client";

import Button from "@/components/common/button";
import FormInput from "@/components/form-input";
import useMutation from "@/hooks/use-mutation";
import { SetPasswordApi, VerifyToken } from "@/services/api/auth-api";
import { toastError, toastSuccess } from "@/utils/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  PasswordDataType,
  schema,
  SetPasswordFormType,
} from "../_shared/set-password-form-type";
import { VerifyTokenType } from "../_shared/verify-token-type";

type props = {
  title: "email_confirm" | "reset_password";
};

const titleMap = {
  email_confirm: "Set First Password",
  reset_password: "Reset Password",
};

const descriptionMap = {
  email_confirm:
    "Tài khoản của bạn đã được xác minh thành công. Để hoàn tất thiết lập, vui lòng tạo mật khẩu đầu tiên của bạn. Hãy chắc chắn rằng nó mạnh mẽ và duy nhất để bảo vệ tài khoản của bạn.",
  reset_password:
    "Bạn đã yêu cầu đặt lại mật khẩu. Vui lòng điền vào mẫu dưới đây để tạo mật khẩu mới cho tài khoản của bạn. Hãy đảm bảo rằng mật khẩu mới của bạn mạnh mẽ và duy nhất.",
};

export default function ChangePasswordForm({ title }: props) {
  // This will check if the token is sent as a parameter in the reset password URL.
  const [isSuccess, setIsSuccess] = useState(false);
  const verifyToken = useSearchParams().get("token");
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
    mode: "onSubmit",
    resolver: zodResolver(schema),
  });

  const { mutate } = useMutation({
    fetcher: VerifyToken,
    options: {
      onSuccess: async () => {
        if (verifyToken) {
          setIsSuccess(true);
        }
      },
    },
  });

  const { mutate: mutateSetPassword } = useMutation({
    fetcher: SetPasswordApi,
    options: {
      onSuccess: async () => {
        toastSuccess("Thành công");
        router.push("/login");
      },
      onError: (error) => {
        toastError(error.message);
      },
    },
  });

  const onSubmit = handleSubmit((dataSubmit: SetPasswordFormType) => {
    const data: PasswordDataType = {
      token: verifyToken ? verifyToken : "",
      password: dataSubmit.newPassword,
    };
    mutateSetPassword({ data });
  });

  useEffect(() => {
    if (verifyToken) {
      const data: VerifyTokenType = {
        token: verifyToken,
      };

      mutate({ data });
    }
  }, []);

  if (isSuccess) {
    return (
      <div className="mx-auto flex rounded-[4px] border border-solid border-light_gray_color_second bg-white large-screen:mb-[40px] large-screen:mt-[15px] large-screen:w-[1160px] small-screen:mb-[30px] small-screen:mt-[30px] smallest-screen:mb-[20px] smallest-screen:mt-[10px]">
        <div className="flex w-full justify-center">
          <div className="w-[380px] max-w-full px-[20px] pb-[50px] pt-[40px]">
            <div className="flex flex-col">
              <h2 className="mb-[35px] text-center font-quicksand text-[27px] font-bold capitalize leading-[1.27] tracking-[-0.01em] text-primary">
                {titleMap[title]}
              </h2>

              <form onSubmit={onSubmit}>
                <ul className="flex flex-col">
                  <li className="mb-[25px] mt-[10px] flex text-[14px] leading-[1.5] tracking-[0.02em] text-text_color">
                    {descriptionMap[title]}
                  </li>
                  <li className="flex flex-col">
                    <label
                      className="pb-[10px] text-[13px] font-normal leading-[18px] tracking-[0.02em] text-primary"
                      htmlFor="new_password"
                    >
                      Mật khẩu mới *
                    </label>
                    <FormInput
                      id="new_password"
                      type="password"
                      {...register("newPassword")}
                      error={errors.newPassword?.message}
                    />
                  </li>
                  <li className="mt-[20px] flex flex-col">
                    <label
                      className="pb-[10px] text-[13px] font-normal leading-[18px] tracking-[0.02em] text-primary"
                      htmlFor="confirm_password"
                    >
                      Nhập lại mật khẩu *
                    </label>
                    <FormInput
                      id="confirm_password"
                      type="password"
                      {...register("confirmPassword")}
                      error={errors.confirmPassword?.message}
                    />
                  </li>

                  <li className="mt-[20px] flex flex-col">
                    <Button
                      type="submit"
                      size="xsm"
                      variant="secondary"
                      className="text-center text-[13px] font-bold leading-[16px]"
                    >
                      Xác nhận
                    </Button>
                  </li>
                </ul>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
