import React from "react"

type Negative = {
    negative: number;
}

export default function Negative({negative}: Negative) {
    return (
        <div className="flex-1 p-4 bg-green-200 rounded-md">Liczba negatywnych: {negative} </div>
    )
}