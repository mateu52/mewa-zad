// eslint-disable-next-line @typescript-eslint/no-unused-vars

// komponent wyswietlajacy dane z api ( do zatwierdzenia)
'use server'
import { useEffect, useState } from 'react';
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import { fetchReviews, postReview } from './api/services';


type Review = {
  id: number;
  fields: {
    author: string;
    content: string;
    accept?: boolean | undefined;
    to_check?:boolean | undefined;
  }
}

export function App() {
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
      <h1>Panel admina</h1>
      {data.map((elem) => (
        <div>
          {elem.fields.to_check ? 
            <>
              <p>{elem.fields.author}</p>
              <p>"{elem.fields.content}"</p>
              <button onClick={() => postReview(elem.id, true, false)}>accept</button>
              <button onClick={() => postReview(elem.id, false, false)}>reject</button>
            </> :
            null
        }
        </div>

      ))}
    </div>
  );
}

export default App;
