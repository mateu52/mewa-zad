'use server'

import { analyzeSentiment } from "../../api/services";
import { revalidatePath } from "next/cache";
import { createReviewInAirtable } from "../../api/services";
import { CreateReviewDto, ReviewWithCheck, createReviewSchema } from "../../types";

// export const createReview = async (formData: FormData) => {
export const createReview = async (review: CreateReviewDto) => {
        'use server';
    
        const result = createReviewSchema.safeParse(review);
        if (!result.success) {
        console.log(result.error.issues)
        return {
            status: 'error'
        }
        } else {
            const sentiment = await analyzeSentiment(review.content)
            const reviewWithToCheck: ReviewWithCheck = {
                ...review,
                to_check: true,
                sentiment: sentiment
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