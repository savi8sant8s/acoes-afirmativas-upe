import Image from "next/image";

type IndicatorProps = {
    title: string;
}

export function Indicator({ title }: IndicatorProps) {
    return (
        <div className="text-center p-4 mt-10">
            <p className="text-blupe text-1.5xl">
                <strong>{title}</strong>
            </p>
            <Image width="50" height="30" src="/indicator.png" />
        </div>
    )
}