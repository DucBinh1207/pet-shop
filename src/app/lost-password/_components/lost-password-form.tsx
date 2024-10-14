"use client";

import Button from "@/components/common/button";
import Input from "@/components/common/input";
import { useRouter } from "next/navigation";

export default function LostPasswordForm() {
  const router = useRouter();

  return (
    <div className="mx-auto flex rounded-[4px] border border-solid border-light_gray_color_second bg-white large-screen:mb-[40px] large-screen:mt-[15px] large-screen:w-[1160px] small-screen:mb-[30px] small-screen:mt-[30px] smallest-screen:mb-[20px] smallest-screen:mt-[10px]">
      <div className="flex w-full justify-center">
        <div className="w-[380px] max-w-full px-[20px] pb-[50px] pt-[40px]">
          <div className="flex flex-col">
            <h2 className="mb-[35px] text-center font-quicksand text-[27px] font-bold leading-[1.27] tracking-[-0.01em] text-primary">
              Lost Password
            </h2>

            <form action="">
              <ul className="flex flex-col">
                <li className="mb-[25px] mt-[10px] flex text-[14px] leading-[1.5] tracking-[0.02em] text-text_color">
                  Lost your password? Please enter your username or email
                  address. You will receive a link to create a new password via
                  email.
                </li>

                <li className="flex flex-col">
                  <label
                    className="pb-[10px] text-[13px] font-normal leading-[18px] tracking-[0.02em] text-primary"
                    htmlFor="username"
                  >
                    Email address *
                  </label>
                  <Input id="username" />
                </li>

                <li className="mt-[20px] flex flex-col">
                  <Button
                    type="button"
                    size="xsm"
                    variant="secondary"
                    className="text-center text-[13px] font-bold leading-[16px]"
                    onClick={() => {
                      router.push("/reset-password");
                    }}
                  >
                    Register
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
