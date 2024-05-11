// eslint-disable-next-line @typescript-eslint/no-unused-vars

// komponent wyswietlajacy dane z api ( do zatwierdzenia)
'use client'
import { useEffect, useState } from 'react';

import { fetchReviews } from '../../api/services';


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
        console.log(reviews);

    }
    fetchData();
    },[]);
    console.log(data)
    
    return (
    <div>
        <h1>Panel admina</h1>
        {data?.map((elem) => (
            <div key={elem.id}>
                <p>ok</p>
            {elem.fields.to_check ? 
                <>
                <p>{elem.fields.author}</p>
                
                </> :
                null
            }
            </div>

        ))}
    </div>
    );
}

export default App;