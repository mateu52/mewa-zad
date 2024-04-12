import * as z from 'zod';

export const loginSchema = z.object({
    opinion: z.string().min(1, "Opinion is required")
});