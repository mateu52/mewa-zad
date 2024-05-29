import React, { useEffect, useState } from "react"
import { fetchReviews } from "../../api/services"
import Numpositive from "../../components/NumPositive";
import Numnegative from "../../components/NumNegative";
import Numneutral from "../../components/NumNeutral";

export type Review = {
    id: string;
    fields: {
        author: string;
        content: string;
        sentiment: string;
        accept: boolean;
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
            const acceptedReviews =  review.filter((elem: Review) => elem.fields.accept === true );
            const posit = acceptedReviews.filter((elem: Review) => elem.fields.sentiment === "Positive");
            const negat = acceptedReviews.filter((elem: Review) => elem.fields.sentiment === "Negative");
            const neut = acceptedReviews.filter((elem: Review) => elem.fields.sentiment === "Neutral");
            setPositive(posit.length);
            setNegative(negat.length);
            setNeutral(neut.length);
            
        }
        fetchData()
        console.log(positive, 'effect')
    },[positive])
    return(
        <div>
        <div className="flex m-9 pt-5">
            
        </div>
        {/* 3 komponenty z 3 ostatnimi komentarzami */}
        <div>
            <Numpositive positive={positive} />
            <Numnegative negative={negative} />
            <Numneutral neutral={neutral} />
        </div>
        </div>
    )
}