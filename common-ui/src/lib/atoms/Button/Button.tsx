type ButtonProps = {
    text: string;
    type: "button" | "submit" | "reset" | undefined;
}

export function Button({text, type}: ButtonProps){

    return(
        <div className="">
            <button type={type} className="bg-green-200 ml-2 p-2">{text}</button>
        </div>
    )
}