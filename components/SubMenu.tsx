import Link from 'next/link';

export function SubMenu() {
    return (
        <nav className="w-full flex flex-col justify-end md:flex-row md:justify-between bg-redupe p-2 text-whiteupe text-0.5xl">
            <li>
                <Link href="#stats">Estatísticas</Link>
            </li>
            <li>
                <Link href="#teaching">Dimensão Ensino</Link>
            </li>
            <li>
                <Link href="#extension">Dimensão Extensão</Link>
            </li>
            <li>
                <Link href="#search">Dimensão Pesquisa</Link>
            </li>
        </nav>
    )
};