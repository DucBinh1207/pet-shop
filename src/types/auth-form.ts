import { z } from "zod";

const schema = z.object({
  email: z.string().email("Invalid email format"),
  password: z
    .string()
    .min(3, "Password must be at least 3 characters")
    .max(20, "Password can have a maximum of 20 characters"),
});

export type LoginFormType = z.infer<typeof schema>;
