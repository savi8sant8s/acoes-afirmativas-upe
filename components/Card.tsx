type CardProps = {
    title?: string;
    content?: any;
}

export function Card({ title, content }: CardProps) {
    return (
        <div className={"bg-whiteupe text-blupe text-1xl rounded-2xl w-80 shadow-2xl p-4"}>
            <div className="p-6">
                <p>{title}</p>
                <p className="text-3xl">{content}</p>
            </div>
        </div>
    )
}