import { useEffect, useState } from "react"
import { fetchReviews } from "../../api/services"
import Positive from "../../components/Positive";
import Negative from "../../components/Negative";
import Neutral from "../../components/Neutral";

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
    const [ negative, setNegative ] = useState<number>(0);
    const [neutral, setNeutral ] = useState<number>(0);
    
    useEffect(() => {
        async function fetchData(){
            const review = await fetchReviews();
            setData(review);
            console.log(review, 'ok')
            const posit = review.filter((elem: Review) => elem.fields.sentiment === "Positive");
            const negat = review.filter((elem: Review) => elem.fields.sentiment === "Negative");
            const neut = review.filter((elem: Review) => elem.fields.sentiment === "Neutral");
            setPositive(posit.length);
            setNegative(negat.length);
            setNeutral(neut.length);
            
        }
        fetchData()
        console.log(positive, 'effect')
    },[positive])
    return(
        <div>
        <h1>Dashboard</h1>
        <Positive positive={positive} />
        <Negative negative={negative} />
        <Neutral neutral={neutral} />
        </div>
    )
}