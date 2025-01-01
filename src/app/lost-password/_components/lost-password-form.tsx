"use client";

import Button from "@/components/common/button";
import FormInput from "@/components/form-input";
import useMutation from "@/hooks/use-mutation";
import { ForgotPasswordApi } from "@/services/api/auth-api";
import cn from "@/utils/style/cn";
import { toastError } from "@/utils/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Vui lòng nhập email hợp lệ"),
});

export type LostPasswordFormType = z.infer<typeof schema>;

export default function LostPasswordForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
    mode: "onSubmit",
    resolver: zodResolver(schema),
  });

  const { mutate, isMutating } = useMutation({
    fetcher: ForgotPasswordApi,
    options: {
      onSuccess: () => {
        router.push("/verify-email");
      },
      onError: (error) => {
        toastError(error.message);
      },
      onFinally: () => {},
    },
  });

  const onSubmit = handleSubmit((data: LostPasswordFormType) => {
    mutate({ data });
  });

  return (
    <div className="mx-auto flex rounded-[4px] border border-solid border-light_gray_color_second bg-white large-screen:mb-[40px] large-screen:mt-[15px] large-screen:w-[1160px] small-screen:mb-[30px] small-screen:mt-[30px] smallest-screen:mb-[20px] smallest-screen:mt-[10px]">
      <div className="flex w-full justify-center">
        <div className="w-[380px] max-w-full px-[20px] pb-[50px] pt-[40px]">
          <div className="flex flex-col">
            <h2 className="mb-[35px] text-center font-quicksand text-[27px] font-bold leading-[1.27] tracking-[-0.01em] text-primary">
              Quên mật khẩu
            </h2>

            <form onSubmit={onSubmit}>
              <ul className="flex flex-col">
                <li className="mb-[25px] mt-[10px] flex text-[14px] leading-[1.5] tracking-[0.02em] text-text_color">
                  Vui lòng nhập địa chỉ email của bạn. Bạn sẽ nhận được một liên
                  kết để tạo mật khẩu mới qua email.
                </li>

                <li className="flex flex-col">
                  <label
                    className="pb-[10px] text-[13px] font-normal leading-[18px] tracking-[0.02em] text-primary"
                    htmlFor="username"
                  >
                    Email *
                  </label>
                  <FormInput
                    id="email"
                    placeholder="example@gmail.com"
                    {...register("email")}
                    error={errors.email?.message}
                  />
                </li>

                <li className="mt-[20px] flex flex-col">
                  <Button
                    size="xsm"
                    variant="secondary"
                    className={cn(
                      "text-center text-[13px] font-bold leading-[16px]",
                      { "opacity-30": isMutating },
                    )}
                    disabled={isMutating}
                  >
                    Quên mật khẩu
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
