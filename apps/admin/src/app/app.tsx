// eslint-disable-next-line @typescript-eslint/no-unused-vars

// komponent wyswietlajacy dane z api ( do zatwierdzenia)
'use server'
import { useEffect, useState } from 'react';
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
import { fetchReviews } from './api/services';


type Review = {
  id: number;
  fields: {
    author: string;
  }
}

export function App() {
  const [data, setData ] = useState<Review[]>([])
  useEffect(() => {
    async function fetchData(){
      const reviews = await fetchReviews()
      setData(reviews);
      console.log(reviews);

    }
    fetchData();
  },[]);
  

  return (
    <div>
      <h1>Panel admina</h1>
      {data.map((elem) => (
        <p>{elem.fields.author}</p>
      ))}
    </div>
  );
}

export default App;
