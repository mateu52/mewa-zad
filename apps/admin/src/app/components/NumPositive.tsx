import React from "react"

type Positive = {
    positive: number
}

export default function Numpositive({positive}  : Positive) {
    return (
        <div className="flex-1 p-4 bg-green-200 rounded-md">Liczba pozytywnych: {positive} </div>
    )
}