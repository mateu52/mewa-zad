import { z } from 'zod';

export type Review = {
    id: string;
    author: string;
    content: string;
}

//export type CreateReviewDto = Pick<Review, 'author' | 'content'>

export const createReviewSchema = z.object({
    content: z.string().min(1, 'Content is required'),
    author: z.string().min(1, 'Author is required')
})

export type CreateReviewDto = z.infer<typeof createReviewSchema>;
