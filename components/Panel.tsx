type PanelProps = {
    id: string;
    title: string;
    content?: any
}

export function Panel({ id, title, content }: PanelProps) {
    return (
        <div id={id} className="w-full bg-grayupe p-4 mb-10">
            <p className="text-whiteupe text-center text-2xl">{title}</p>
            <div className="flex justify-center mt-6">
                {content}
            </div>
        </div>
    )
}