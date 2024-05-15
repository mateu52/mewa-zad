'use server'

import { revalidatePath } from "next/cache";
import { createReviewInAirtable } from "../../api/services";
import { CreateReviewDto, createReviewSchema } from "../../types";

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
            console.log('ok', review);
                try {
                await createReviewInAirtable(review);
                revalidatePath('/');
                return {
                    status: 'success',
                    payload: review,
                };
                } catch (error) {
                console.error("Error saving review to Airtable:", error);
                return {
                    status: 'error',
                    error: error.message,
                };
            }
        }
    }