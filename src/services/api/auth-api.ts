import { post, update } from "../axios";
import { post as postPublic } from "../axios-public";
import { ResponseAuthType } from "@/types/response-auth";
import { LoginFormType } from "@/app/login/_components/login-form";
import { RegisterFormType } from "@/app/register/_components/register-form";
import { VerifyTokenType } from "@/app/(changePassword)/_shared/verify-token-type";
import { PasswordDataType } from "@/app/(changePassword)/_shared/set-password-form-type";
import { LostPasswordFormType } from "@/app/lost-password/_components/lost-password-form";

export async function LoginApi({ data }: { data: LoginFormType }) {
  return await postPublic<ResponseAuthType>({
    url: "/auth/login",
    data,
  });
}

export async function RegisterApi({ data }: { data: RegisterFormType }) {
  return await postPublic<ResponseAuthType>({
    url: "/auth/register",
    data,
  });
}

export async function VerifyToken({ data }: { data: VerifyTokenType }) {
  return await postPublic({
    url: "/auth/verify-token",
    data,
  });
}

export async function SetPasswordApi({ data }: { data: PasswordDataType }) {
  return await update({
    url: "/auth/change-password",
    data,
  });
}

export async function ForgotPasswordApi({
  data,
}: {
  data: LostPasswordFormType;
}) {
  return await postPublic<ResponseAuthType>({
    url: "/auth/forgot-password",
    data,
  });
}

export async function LogOut() {
  return await post({
    url: "/auth/logout",
    data: {},
  });
}
