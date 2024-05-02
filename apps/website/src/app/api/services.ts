import { CreateReviewDto } from "../types";

export const createReviewInAirtable = async ( review: CreateReviewDto) => {
    const response = await fetch(`https://api.airtable.com/v0/appf6l43Hh37LdCuC/reviews`, {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ records: [{ fields: review}] }),
    })
    const data = await response.json();

    console.log('createReviewInAirtable', { data: data.records[0]})
}