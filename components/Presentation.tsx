import Image from 'next/image';

export function Presentation() {
    return (
        <div className="flex md:flex-row flex-col text-center justify-items-center p-8">
            <Image alt="logo" className="text-center m-6" width="300" height="300" src="/logo.png" />
            <div className="text-justify m-6 align">
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