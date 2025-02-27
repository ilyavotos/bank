import * as z from "zod";

export const signinSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8).regex(new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"), {
    message: "Password must be at least 8 characters and contain an uppercase letter, lowercase letter, and number",
  }),
});

export const signupSchema = z
  .object({
    name: z.string().min(1, "Required"),
    country: z.string().min(1, "Required"),
  })
  .merge(signinSchema);

export type SigninSchema = z.infer<typeof signinSchema>;
export type SignupSchema = z.infer<typeof signupSchema>;
