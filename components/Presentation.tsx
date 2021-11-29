type PresentationProps = {
    id: string;
}

export function Presentation({ id }: PresentationProps) {
    return (
        <div id={id} className="flex md:flex-row flex-col text-center justify-items-center">
            <img className="p-8 text-center" width="300" height="100" src="logo.png" />
            <div className="m-auto p-8 text-justify">
                <strong className="text-2xl text-left text-blupe">O que são ações afirmativas?</strong>
                <p className=" text-1.5xl text-justify text-blupe">
                    Ações afirmativas são políticas públicas focais
                    voltadas para grupos que sofrem discriminação
                    étnica, racial, de gênero, religiosa.
                    As políticas afirmativas têm como objetivo
                    promover a inclusão socioeconômica de populações
                    historicamente privadas do acesso a oportunidades.
                </p>
            </div>
        </div>
    )
};