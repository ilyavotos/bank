import * as z from "zod";

export const profileSchema = z.object({
  name: z.string().min(1, "Required"),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8).regex(new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"), {
    message: "Password must be at least 8 characters and contain an uppercase letter, lowercase letter, and number",
  }),
  dateBirth: z.coerce.date(),
  address: z.string(),
  city: z.string(),
  postalCode: z.string(),
  country: z.string().min(1, "Required"),
});

export type ProfileSchema = z.infer<typeof profileSchema>;
