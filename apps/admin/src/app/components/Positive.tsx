import React from "react"

type Positive = {
    positive: number
}

export default function Positive({positive}  : Positive) {
    return (
        <div className="flex mt-4">Liczba pozytywnych: {positive} </div>
    )
}