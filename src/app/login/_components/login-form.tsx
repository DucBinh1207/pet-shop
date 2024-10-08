"use client";

import Button from "@/components/common/button";
import Input from "@/components/common/input";
import cn from "@/utils/style/cn";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginForm() {
  const [isRememberMe, setIsRememberMe] = useState(false);
  const router = useRouter();

  return (
    <div className="mx-auto flex rounded-[4px] border border-solid border-light_gray_color_second bg-white large-screen:mb-[40px] large-screen:mt-[15px] large-screen:w-[1160px] small-screen:mb-[30px] small-screen:mt-[30px] smallest-screen:mb-[20px] smallest-screen:mt-[10px]">
      <div className="flex w-full justify-center">
        <div className="w-[380px] max-w-full px-[20px] pb-[50px] pt-[40px]">
          <div className="flex flex-col">
            <h2 className="mb-[35px] text-center font-quicksand text-[27px] font-bold leading-[1.27] tracking-[-0.01em] text-primary">
              Login
            </h2>

            <form action="">
              <ul className="flex flex-col gap-[20px]">
                <li className="flex flex-col">
                  <label
                    className="pb-[10px] text-[13px] font-normal leading-[18px] tracking-[0.02em] text-primary"
                    htmlFor="username"
                  >
                    Email address *
                  </label>
                  <Input id="username" />
                </li>

                <li className="flex flex-col">
                  <label
                    className="pb-[10px] text-[13px] font-normal leading-[18px] tracking-[0.02em] text-primary"
                    htmlFor="password"
                  >
                    Password *
                  </label>
                  <Input id="password" />
                </li>

                <li className="flex items-center justify-between">
                  <label htmlFor="remember_me" className="cursor-pointer">
                    <Input
                      type="checkbox"
                      id="remember_me"
                      inputSize="form_controls"
                      className={cn(
                        "relative mr-[7px] cursor-pointer appearance-none rounded-[3px] align-middle after:absolute after:bottom-[1px] after:left-[1px] after:right-[1px] after:top-0",
                        {
                          "after:bg-checked": isRememberMe,
                        },
                      )}
                      name="weight"
                      onClick={() => {
                        setIsRememberMe(!isRememberMe);
                      }}
                    />
                    <span className="text-[13px] font-normal leading-[18px] tracking-[0.02em] text-primary hover:text-secondary">
                      &nbsp;Remember Me
                    </span>
                  </label>

                  <Link
                    href="/lost-password"
                    className="text-[14px] font-normal leading-[1.5] tracking-[0.02em] text-primary hover:text-secondary"
                  >
                    Lost your password ?
                  </Link>
                </li>

                <li className="flex flex-col">
                  <Button
                    type="button"
                    size="xsm"
                    variant="secondary"
                    className="text-center text-[13px] font-bold leading-[16px]"
                    onClick={() => {
                      router.push("/profile");
                    }}
                  >
                    Log In
                  </Button>
                </li>

                <li className="flex flex-col">
                  <div className="flex justify-center gap-[20px] text-[14px] font-normal leading-[1.5] tracking-[0.02em] text-text_color">
                    Not A Member ?
                    <Link
                      href="/register"
                      className="text-[14px] font-normal leading-[1.5] tracking-[0.02em] text-primary hover:text-secondary"
                    >
                      Register
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
