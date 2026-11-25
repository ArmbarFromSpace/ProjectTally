import { z } from "zod";

export const authenticationForm = z.object({
  userName: z.string().trim().min(3, "Username must be at least 3 characters"),
});
