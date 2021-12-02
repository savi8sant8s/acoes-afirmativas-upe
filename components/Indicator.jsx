import Image from "next/image";

export function Indicator({ id, title }) {
    return (
        <div id={id} className="text-center color-blue indicator">
            <h5><strong>{title}</strong></h5>
            <Image width="50" height="30" src="/indicator.png" />
        </div>
    )
}