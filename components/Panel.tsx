type PanelProps = {
    title?: string;
    content?: any
}

export function Panel({ title, content }: PanelProps) {
    return (
        <div className="w-full bg-grayupe p-4 mb-10 text-center">
            <p className="text-whiteupe text-center text-2xl">{title}</p>
            <div className="flex justify-center text-justify mt-6">
                {content}
            </div>
        </div>
    )
}