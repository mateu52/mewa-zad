import React from "react"

type Neutral = {
    neutral: number
}
export default function Neutral({neutral}: Neutral) {
    return (
        <div>Liczba neutralnych: {neutral} </div>
    )
}