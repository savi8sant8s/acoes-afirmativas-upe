type ChartStatsProps = {
    title: string;
    bg: string;
    imgUrl: string;
    graph: any
}

export function ChartStats({ title, bg, imgUrl, graph }: ChartStatsProps) {
    return (
        <div className={`${bg} text-whiteupe text-1xl rounded-2xl w-96 shadow-2xl`}>
            <div className="grid grid-cols-2 p-3">
                <img width="75" height="25" src={imgUrl} />
                <p>{title}</p>
            </div>
            <div className="p-2">{graph}</div>
        </div>
    )
}