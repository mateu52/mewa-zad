// eslint-disable-next-line @typescript-eslint/no-unused-vars

// komponent wyswietlajacy dane z api ( do zatwierdzenia)
'use client'
import { useEffect, useState } from 'react';
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  const [ opinions, setOpinions ] = useState();
  console.log('token: ', process.env.REACT_APP_API_TOKEN, process.env)
  useEffect(() => {
    fetch('https://api.airtable.com/v0/appf6l43Hh37LdCuC/Table', {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`
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
