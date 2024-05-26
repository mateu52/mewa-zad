import { useEffect, useState } from "react"
import { fetchReviews } from "../../api/services"
import Positive from "../../components/Positive";

export type Review = {
    id: string;
    fields: {
        author: string;
        content: string;
        sentiment: string;
    }
}

export function Dashboard(){
    const [ data, setData ] = useState();
    const [ positive, setPositive ] = useState<number>(0);
    
    useEffect(() => {
        async function fetchData(){
            const review = await fetchReviews();
            setData(review);
            console.log(review, 'ok')
            const result = review.filter((elem: Review) => elem.fields.sentiment === "Negative");
            setPositive(result.length);
            console.log(result.length, positive)
        }
        fetchData()
        console.log(positive, 'effect')
    },[positive])
    return(
        <div>
        <h1>Dashboard {positive}</h1>
        <Positive />
        </div>
    )
}