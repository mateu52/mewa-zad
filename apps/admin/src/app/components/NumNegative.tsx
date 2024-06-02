import React from "react"

type Negative = {
    negative: number;
}

export default function Numnegative({negative}: Negative) {
    return (
        <div className="flex-1 p-2 bg-red-200 rounded-md">Liczba negatywnych: {negative} </div>
    )
}