import Image from "next/image";

export default function Indicator({ id, title }) {
    return (
        <div id={id} className="text-center color-blue mt-4">
            <p className="color-red"><strong>{title}</strong></p>
            <Image width="50" height="30" src="/indicator.png" />
        </div>
    )
}