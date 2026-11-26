import { z } from "zod";

export const authenticationSchema = z.object({
  userName: z.string().trim().min(3, "Username must be at least 3 characters"),
  passWord: z.string().trim().min(8, "Password must be at least 8 characters"),
});

export type AuthenticationForm = z.infer<typeof authenticationSchema>;
