type ButtonProps = {
    text: string;
    type: "button" | "submit" | "reset" | undefined;
    style: string;
}

export function Button({text, type, style}: ButtonProps){

    return(
        <div className="">
            <button 
                type={type} 
                className={style}>
                {text}
            </button>
        </div>
    )
}