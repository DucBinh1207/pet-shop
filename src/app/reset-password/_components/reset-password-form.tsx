"use client";

import Button from "@/components/common/button";
import AngleIcon from "@/components/common/icons/angle-icon";
import CancelIcon from "@/components/common/icons/cancel-icon";
import Input from "@/components/common/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ResetPasswordForm() {
  // This will check if the token is sent as a parameter in the reset password URL.
  const [token, setToken] = useState<string | null>("123");
  const router = useRouter();

  if (!token) {
    return (
      <div className="mx-auto flex rounded-[4px] border border-solid border-light_gray_color_second bg-white large-screen:mb-[40px] large-screen:mt-[15px] large-screen:w-[1160px] small-screen:mb-[30px] small-screen:mt-[30px] smallest-screen:mb-[20px] smallest-screen:mt-[10px]">
        <div className="flex w-full justify-center">
          <div className="flex w-[380px] max-w-full flex-col items-center px-[20px] pb-[50px] pt-[40px]">
            <div className="mb-[15px] flex h-[100px] w-[100px] items-center justify-center rounded-[50%] border-[5px] border-solid border-secondary">
              <CancelIcon size={45} className="fill-current text-primary" />
            </div>

            <h2 className="mb-[25px] text-center font-quicksand text-[27px] font-bold uppercase leading-[1.27] tracking-[-0.01em] text-primary">
              Liên kết không hợp lệ
            </h2>

            <span className="mt-[10px] flex text-center text-[14px] leading-[1.5] tracking-[0.02em] text-text_color">
              Xin lỗi, liên kết bạn đã sử dụng không hợp lệ hoặc đã hết hạn. Vui
              lòng yêu cầu lại một liên kết khôi phục mật khẩu mới
            </span>

            <span
              className="relative mt-[20px] inline-flex cursor-pointer items-center justify-center gap-[5px] font-bold leading-[1.27] tracking-[-0.01em] text-primary hover:text-secondary"
              onClick={() => {
                router.back();
              }}
            >
              <AngleIcon size={12} className="rotate-[-90deg] fill-current" />
              Back
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto flex rounded-[4px] border border-solid border-light_gray_color_second bg-white large-screen:mb-[40px] large-screen:mt-[15px] large-screen:w-[1160px] small-screen:mb-[30px] small-screen:mt-[30px] smallest-screen:mb-[20px] smallest-screen:mt-[10px]">
      <div className="flex w-full justify-center">
        <div className="w-[380px] max-w-full px-[20px] pb-[50px] pt-[40px]">
          <div className="flex flex-col">
            <h2 className="mb-[35px] text-center font-quicksand text-[27px] font-bold leading-[1.27] tracking-[-0.01em] text-primary">
              Reset Password
            </h2>

            <form action="">
              <ul className="flex flex-col">
                <li className="mb-[25px] mt-[10px] flex text-[14px] leading-[1.5] tracking-[0.02em] text-text_color">
                  You have requested to reset your password. Please fill out the
                  form below to create a new password for your account. Ensure
                  that your new password is strong and unique
                </li>
                <li className="flex flex-col">
                  <label
                    className="pb-[10px] text-[13px] font-normal leading-[18px] tracking-[0.02em] text-primary"
                    htmlFor="new_password"
                  >
                    New Password *
                  </label>
                  <Input id="new_password" />
                </li>
                <li className="mt-[20px] flex flex-col">
                  <label
                    className="pb-[10px] text-[13px] font-normal leading-[18px] tracking-[0.02em] text-primary"
                    htmlFor="confirm_password"
                  >
                    Confirm Password *
                  </label>
                  <Input id="confirm_password" />
                </li>

                <li className="mt-[20px] flex flex-col">
                  <Button
                    size="xsm"
                    variant="secondary"
                    className="text-center text-[13px] font-bold leading-[16px]"
                    onClick={() => {
                      setToken(null);
                    }}
                  >
                    Reset Password
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
