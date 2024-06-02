// eslint-disable-next-line @typescript-eslint/no-unused-vars

// komponent wyswietlajacy dane z api ( do zatwierdzenia)
'use server'
import { useEffect, useState } from 'react';


import { fetchReviews, postReview } from '../../api/services';


type Review = {
  id: number;
  fields: {
    author: string;
    content: string;
    accept?: boolean | undefined;
    to_check?:boolean | undefined;
  }
}

export function Panel() {
  const [data, setData ] = useState<Review[]>([])
  useEffect(() => {
    async function fetchData(){
      const reviews = await fetchReviews()
      setData(reviews);
      console.log(reviews, 'ok');

    }
    fetchData();
  },[]);
  console.log(data)
  
  return (
    <div>
      <h1 className='p-2'>Panel admina</h1>
      {data.map((elem) => (
        <div>
          {elem.fields.to_check ? 
            <div className='p-2 ml-3 mb-2 w-80 bg-pink-50 rounded border-dotted border-2 border-pink-70' >
              <p className='pl-2  bg-red-100 w-64 rounded-md'>{elem.fields.author}</p>
              <p className='pl-2 pt-2 pb-1 bg-yellow-200 w-64 rounded-md break-words'>"{elem.fields.content}"</p>
              <button className='ml-2 mt-1 p-1 bg-lime-500 ring-2 ring-lime-600 rounded-md' onClick={() => postReview(elem.id, true, false)}>accept</button>
              <button className='ml-2 mt-1 p-1 bg-rose-400 ring-2 ring-rose-500 rounded-md' onClick={() => postReview(elem.id, false, false)}>reject</button>
            </div> :
            null
        }
        </div>

      ))}
    </div>
  );
}

export default Panel;
