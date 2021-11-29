type ButtonProps = {
    message?: string;
    href?: string;
}

export function Button({ message, href }: ButtonProps) {
    
    const onGoTo = () => {
        if (href){
            window.location.href = href;
        }
    }

    return (
        <button onClick={onGoTo} className="mt-2 bg-redupe hover:bg-red-300 text-white font-bold py-2 px-4 rounded">
            {message}
        </button>
    )
}