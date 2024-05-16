'use client'
import { useEffect, useState } from 'react';

type Review = {
  id: string;
  content: string;
  author: string;
  created_at: string;
  accept?: boolean | undefined;
  to_check?:boolean | undefined;
};

type AirtableReviewResponseDto = {
  records: {
    id: string;
    fields: {
      content?: string;
      author?: string;
      created_at?: string;
      accept?: boolean | undefined;
      to_check?:boolean | undefined;
    };
  }[];
};
export default function Index() {
  const [data, setData] = useState<Review[]>([]);
  useEffect(() => {
    async function fetchData() {
      //console.log(process.env.NEXT_PUBLIC_API_TOKEN, 'async')
      try {
        const response = await fetch(
          'https://api.airtable.com/v0/appf6l43Hh37LdCuC/reviews',
          {
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
            },
          }
        );
        const jsonData: AirtableReviewResponseDto = await response.json();
        console.log(jsonData);
        if (jsonData.records && jsonData.records.length > 0) {
          const reviews: Review[] = jsonData.records
          .filter((record) => record.fields.accept === true)
          .map((record) => ({
            id: record.id,
            author: record.fields.author || "No author",
            content: record.fields.content || "No content",
            created_at: record.fields.created_at || new Date().toISOString(),
            to_check: record.fields.to_check
          }));
          setData(reviews);
        } else {
          console.error('No records found');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);
  
  return (
    <div>
      <h1>list reviews:</h1>
      {data.length > 0 ? (
        data.map((review) => (
          <div key={review.id} className='pt-2'>
            <p>{review.author}</p>
            <p className='pl-2'>{review.content}</p>
          </div>
        ))
      ) : (
        <p>No reviews available</p>
      )}
      
    </div>
  );
}
