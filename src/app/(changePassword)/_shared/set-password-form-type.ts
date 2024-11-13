import { z } from "zod";

export const schema = z
  .object({
    newPassword: z.string().min(8, "Password must be at least 3 characters"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 3 characters"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirm"],
  });

export type SetPasswordFormType = z.infer<typeof schema>;

export type PasswordDataType = {
  token: string;
  password: string;
};
