import React from "react"

type Positive = {
    positive: number
}

export default function Positive({positive}  : Positive) {
    return (
        <div>Liczba pozytywnych: {positive} </div>
    )
}