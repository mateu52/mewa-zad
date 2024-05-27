import React from "react"

type Negative = {
    negative: number;
}

export default function Negative({negative}: Negative) {
    return (
        <div>Liczba negatywnych: {negative} </div>
    )
}