import { z } from "astro/zod";

export const formSchema = z.object({
  fullName: z.string().min(3, "Ime mora imati barem 3 karktera!"),
  email: z.string().email("Nevažeći email!"),
  message: z.string().min(10, "Poruka mora imati barem 10 karaktera!"),

})

export function validateForm(formData) {
  try {
    formSchema.parse(formData);
    return { success: true, errors: {} };
  } catch (error) {
    const fieldErrors = {};
    error.errors.forEach((err) => {
      const fieldName = err.path[0];
      fieldErrors[fieldName] = err.message;
    });
    return { success: false, errors: fieldErrors };
  }
}