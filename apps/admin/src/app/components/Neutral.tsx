import React from "react"

type Neutral = {
    neutral: number
}
export default function Neutral({neutral}: Neutral) {
    return (
        <div className="flex-1 p-4 bg-green-200 rounded-md">Liczba neutralnych: {neutral} </div>
    )
}