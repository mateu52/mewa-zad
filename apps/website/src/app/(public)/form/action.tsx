'use server'

import { revalidatePath } from "next/cache";
import { createReviewInAirtable } from "../../api/services";
import { CreateReviewDto, ReviewWithCheck, createReviewSchema } from "../../types";

// export const createReview = async (formData: FormData) => {
export const createReview = async (review: CreateReviewDto) => {
        'use server';
    
        // const review: CreateReviewDto = {
        // content: formData.get('content') as string,
        // author: formData.get('author') as string,
        // }
        const result = createReviewSchema.safeParse(review);
        if (!result.success) {
        console.log(result.error.issues)
        return {
            status: 'error'
        }
        } else {
            const reviewWithToCheck: ReviewWithCheck = {
                ...review,
                to_check: true
            }
            console.log('ok', reviewWithToCheck);
                try {
                await createReviewInAirtable(reviewWithToCheck);
                revalidatePath('/');
                return {
                    status: 'success',
                    payload: reviewWithToCheck,
                };
                } catch (error) {
                console.error("Error saving review to Airtable:", error);
                return {
                    status: 'error',
                };
            }
        }
    }