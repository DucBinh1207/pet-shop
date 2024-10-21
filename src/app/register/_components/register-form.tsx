"use client";

import Button from "@/components/common/button";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterApi } from "@/services/api/auth-api";
import FormInput from "@/components/form-input";
import useMutation from "@/hooks/use-mutation";
import cn from "@/utils/style/cn";
import { toastError } from "@/utils/toast";
import { saveAuthTokenForInternalServer } from "@/services/api/internal-auth-api";

const schema = z.object({
  email: z.string().email("Invalid email format"),
});

export type RegisterFormType = z.infer<typeof schema>;

export default function RegisterForm() {
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
    fetcher: RegisterApi,
    options: {
      onSuccess: async (data) => {
        const token = data.token;
        saveAuthTokenForInternalServer(token);
        window.location.href = "/verify-email";
      },
      onError: (error) => {
        toastError(error.message);
      },
      onFinally: () => {},
    },
  });

  const onSubmit = handleSubmit((data: RegisterFormType) => {
    mutate({ data });
  });

  return (
    <div className="mx-auto flex rounded-[4px] border border-solid border-light_gray_color_second bg-white large-screen:mb-[40px] large-screen:mt-[15px] large-screen:w-[1160px] small-screen:mb-[30px] small-screen:mt-[30px] smallest-screen:mb-[20px] smallest-screen:mt-[10px]">
      <div className="flex w-full justify-center">
        <div className="w-[380px] max-w-full px-[20px] pb-[50px] pt-[40px]">
          <div className="flex flex-col">
            <h2 className="mb-[35px] text-center font-quicksand text-[27px] font-bold leading-[1.27] tracking-[-0.01em] text-primary">
              Register
            </h2>

            <form onSubmit={onSubmit}>
              <ul className="flex flex-col">
                <li className="flex flex-col">
                  <label
                    className="pb-[10px] text-[13px] font-normal leading-[18px] tracking-[0.02em] text-primary"
                    htmlFor="username"
                  >
                    Email address *
                  </label>
                  <FormInput
                    inputProps={{
                      id: "email",
                      placeholder: "example@gmail.com",
                      ...register("email"),
                    }}
                    error={errors.email?.message}
                  />
                </li>

                <li className="mb-[25px] mt-[10px] flex text-[14px] leading-[1.5] tracking-[0.02em] text-text_color">
                  A link to set a new password will be sent to your email
                  address.
                </li>

                <li className="text-[14px] leading-[1.5] tracking-[0.02em] text-text_color">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our
                  <Link
                    href="/privacy"
                    className="inline text-primary hover:text-secondary"
                  >
                    privacy policy
                  </Link>
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
                    Register
                  </Button>
                </li>

                <li className="mt-[32px] flex flex-col">
                  <div className="flex justify-center gap-[20px] text-[14px] font-normal leading-[1.5] tracking-[0.02em] text-text_color">
                    You A Member ?
                    <Link
                      href="/login"
                      className="text-[14px] font-normal leading-[1.5] tracking-[0.02em] text-primary hover:text-secondary"
                    >
                      Login
                    </Link>
                  </div>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
