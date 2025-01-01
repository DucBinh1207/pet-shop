import { z } from "zod";

export const schema = z
  .object({
    newPassword: z
      .string()
      .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
      .regex(/[a-zA-Z]/, "Mật khẩu phải chứa ít nhất một chữ cái")
      .regex(/[0-9]/, "Mật khẩu phải chứa ít nhất một chữ số"),
    confirmPassword: z
      .string()
      .min(8, "Mật khẩu phải có ít nhất 8 ký tự")
      .regex(/[a-zA-Z]/, "Mật khẩu phải chứa ít nhất một chữ cái")
      .regex(/[0-9]/, "Mật khẩu phải chứa ít nhất một chữ số"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Mật khẩu không khớp",
    path: ["confirm"],
  });

export type SetPasswordFormType = z.infer<typeof schema>;

export type PasswordDataType = {
  token: string;
  password: string;
};
