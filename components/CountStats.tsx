type CountStatsProps = {
    title: string;
    imgUrl: string;
    bg: string;
    number: string;
}

export function CountStats({ title, imgUrl, bg, number }: CountStatsProps) {
    return (
        <div className={`${bg} text-whiteupe text-1xl rounded-2xl w-96 shadow-2xl m-10`}>
            <div className="grid grid-cols-2 p-3">
                <img width="75" height="25" src={imgUrl} />
                <div>
                    <p>{title}</p>
                    <p className="text-3xl">{number}</p>
                </div>
            </div>
        </div>
    )
}