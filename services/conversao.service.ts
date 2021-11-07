import { LocalReunioes, Tematicas, TipoGrupo } from '.prisma/client';

export function paraTematica(valor: string): Tematicas[] {
    let lista = valor.split(', ');
    let tematica: Tematicas[] | any[] = 
        lista.map((item) => {
            let novoValor: Tematicas | any = {
                "Indígenas": Tematicas.INDIGENAS,
                "Quilombolas": Tematicas.QUILOMBOLAS,
                "Negros e negras": Tematicas.NEGROS,
                "Comunidades LGBTQIA+": Tematicas.LGBTQIAPLUS,
                "Ciganos": Tematicas.CIGANOS,
                "Mulheres": Tematicas.MULHERES,
            }[item];
            if (novoValor == undefined) novoValor = Tematicas.OUTROS;
            return novoValor;
    });
    return tematica;
}

export function paraTipoGrupo(valor: string): TipoGrupo[] {
    let lista = valor.split(', ');
    let tipoGrupo: TipoGrupo[] | any[] =
        lista.map((item) => {
            return {
                "Grupo de Pesquisa": TipoGrupo.PESQUISA,
                "Grupo de Estudos": TipoGrupo.ESTUDOS,
                "Grupo de Extensão": TipoGrupo.EXTENSAO,
                "Coletivo de Estudantes": TipoGrupo.COLETIVO_ESTUDANTES
            }[item];
        });
    return tipoGrupo;
}

export function paraLocalReunioes(valor: string): LocalReunioes {
    let localReunioes: LocalReunioes | any = {
        "Sala dos professores": LocalReunioes.SALA_PROFESSORES,
        "Sala dos líderes": LocalReunioes.SALA_LIDERES,
        "Outros espaços da Universidade": LocalReunioes.OUTROS_ESPACOS_UNIVERSIDADE,
        "Áreas externas à Universidade": LocalReunioes.AREAS_EXTERNAS_UNIVERSIDADE,
        "Sala virtual": LocalReunioes.SALA_VIRTUAL
    }[valor];
    if (localReunioes == undefined) localReunioes = LocalReunioes.OUTROS;
    return localReunioes;
}

export function paraBooleano(valor: string): boolean {
    return valor == "Sim" || valor == "Talvez";
}

export function paraMinusculo(valor: string): string {
    return valor.toLocaleLowerCase();
}