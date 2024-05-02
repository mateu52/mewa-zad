// eslint-disable-next-line @typescript-eslint/no-unused-vars

// komponent wyswietlajacy dane z api ( do zatwierdzenia)
'use server'
import { useEffect, useState } from 'react';
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';
const fetchReviews = async () => {
  // noStore();
  console.log('hej');
  console.log('token: ', process.env.API_KEY, process.env);
  const response = await fetch(
    `https://api.airtable.com/v0/appf6l43Hh37LdCuC/reviews`,
    {
      headers: {
        Authorization: `Bearer ${process.env.AIRTABLE_API_TOKEN}`,
      },
    }
  );
  const data = await response.json();
  console.log(data)
}
export function App() {
  //const [ opinions, setOpinions ] = useState();
  console.log('token: ', process.env.API_KEY, process.env)
  useEffect(() => {
    fetchReviews()
    fetch('https://api.airtable.com/v0/appf6l43Hh37LdCuC/reviews', {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
      }
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
    .catch(error => console.error('Error:', error));
  })
  
  return (
    <div>
      <h1>Panel admina</h1>
    </div>
  );
}

export default App;
