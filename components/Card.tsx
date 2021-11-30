type CardProps = {
    title?: string;
    content?: any;
}

export function Card({ title, content }: CardProps) {
    return (
        <div className={"bg-whiteupe text-blupe text-1xl rounded-2xl shadow-2xl p-4 m-4 w-80"}>
            <div className="p-6">
                <p>{title}</p>
                <p className="text-3xl">{content}</p>
            </div>
        </div>
    )
}