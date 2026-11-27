import { z } from "zod";

export const registrationSchema = z.object({
  firstName: z.string().trim().min(2, "Enter at least 2 characters"),
  lastName: z.string().trim().min(2, "Enter at least 2 characters"),
  email: z.string().trim().email("Enter a valid email address"),
  phoneNumeber: z.string().max(14, "Maximuim 14 characters allowed."),
  userName: z.string().trim().min(3, "Username must be at least 3 characters."),
  passWord: z
    .string()
    .min(12, "Password must be 12 characters")
    .regex(/[A-Z]/g, "Password must contain at least one uppercase letter.")
    .regex(/\D/g, "Password must contain at least one number."),
  dateOfbirth: z
    .date()
    .nullable()
    .refine((date) => date !== null, "Please select your date of birth.")
    .refine((date) => {
      if (date === null) return true;
      const today = new Date();
      const birthayCutOff = new Date(
        today.getFullYear() - 21,
        today.getMonth(),
        today.getDate(),
      );
      return date <= birthayCutOff;
    }, "Must be at least 21 years old"),
});
