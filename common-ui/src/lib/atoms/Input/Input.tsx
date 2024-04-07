type Props = {
    label: string;
}

export function Input({label}: Props){
    return(
        <div>
            <input>{label}</input>
        </div>
    )
}