import dotenv from "dotenv";
import { ReviewWithCheck } from "../types";
import { OpenAI } from "openai";
dotenv.config();
//console.log("key", process.env.OPENAI_API_KEY);
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });

export const analyzeSentiment = async (text: string): Promise<string> => {
    console.log("key", process.env.OPENAI_API_KEY);
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4-turbo",
            messages: [{ role: 'user', content: `Analyze ${text} and categorize it as "positive", "negative", or "neutral. in one word"` }],
            max_tokens: 10,
            temperature: 0.5,
        });
        if (!response || !response || !response.choices || response.choices.length === 0 || !response.choices[0].message) {
            throw new Error("Invalid response from OpenAI");
        }
        const choice = response.choices[0];
        if (!choice.message || !choice.message.content) {
            throw new Error("Invalid message format in response from OpenAI");
        }

        const sentiment = choice.message.content.trim();
        return sentiment;
        } catch (error) {
        console.error("Error analyzing sentiment:", error);
        throw new Error("Failed to analyze sentiment");
        }
};

export const createReviewInAirtable = async ( review: ReviewWithCheck) => {
    const response = await fetch(`https://api.airtable.com/v0/appf6l43Hh37LdCuC/reviews`, {
        headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ records: [{ fields: review, }] }),
    })
    const data = await response.json();

    console.log('createReviewInAirtable', { data: data.records[0]})
}


