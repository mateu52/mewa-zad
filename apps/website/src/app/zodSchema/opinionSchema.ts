import * as z from 'zod';

export const opinionSchema = z.object({
  opinion: z.string().min(1, "Opinion is required")  // Minimalna walidacja
});