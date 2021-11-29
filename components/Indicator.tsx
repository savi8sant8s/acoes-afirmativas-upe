import Image from "next/image";

type IndicatorProps = {
    id: string;
    title: string;
}

export function Indicator({ id, title }: IndicatorProps) {
    return (
        <div id={id} className="text-center p-4 mt-10">
            <p className="text-blupe text-1.5xl">
                <strong>{title}</strong>
            </p>
            <Image width="50" height="30" src="/indicator.png" />
        </div>
    )
}