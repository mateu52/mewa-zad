import React, { useEffect, useState } from "react"
//import { fetchReviews } from "../../api/services"
import { Review } from "../../types/type";
import Numpositive from "../../components/NumPositive";
import Numnegative from "../../components/NumNegative";
import Numneutral from "../../components/NumNeutral";
import {PositiveComponent} from "../../components/PositiveComponent";
import { NegativeComponent } from "../../components/NegativeComponent";
import { NeutralComponent } from "../../components/NeutralComponent";
// komponent z licznikiem opini oraz wyswietlanie ostatnich trzech
import { fetchReviews } from '@org/data-access';

export function Dashboard(){
    const [ numPositive, setNumPositive ] = useState<number>(0);
    const [ numNegative, setNumNegative ] = useState<number>(0);
    const [numNeutral, setNumNeutral ] = useState<number>(0);
    const [ positive, setPositive ] = useState<Review[]>([]);
    const [ negative, setNegative ] = useState<Review[]>([]);
    const [neutral, setNeutral ] = useState<Review[]>([]);
    
    useEffect(() => {
        async function fetchData(){
            const review = await fetchReviews();
            
            console.log(review, 'ok')
            const acceptedReviews =  review.filter((elem: Review) => elem.fields.accept === true );
            const posit = acceptedReviews.filter((elem: Review) => elem.fields.sentiment === "Positive");
            const negat = acceptedReviews.filter((elem: Review) => elem.fields.sentiment === "Negative");
            const neut = acceptedReviews.filter((elem: Review) => elem.fields.sentiment === "Neutral");

            setNumPositive(posit.length);
            setNumNegative(negat.length);
            setNumNeutral(neut.length);
            setPositive(posit);
            setNegative(negat);
            setNeutral(neut);
            
        }
        fetchData()
    },[])
    return(
        <div>
        <div className="flex mt-4">
            <Numpositive positive={numPositive} />
            <Numnegative negative={numNegative} />
            <Numneutral neutral={numNeutral} />
        </div>
        {/* 3 komponenty z 3 ostatnimi komentarzami */}
        <div className="">
            <PositiveComponent data={positive} />
            <NegativeComponent data={negative} />
            <NeutralComponent data={neutral} />
        </div>
        </div>
    )
}