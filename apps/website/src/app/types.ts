export type Review = {
    id: string;
    author: string;
    content: string;
}

export type CreateReviewDto = Pick<Review, 'author' | 'content'>