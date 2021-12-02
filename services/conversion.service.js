import { LocalReunioes, Tematicas, TipoGrupo } from '.prisma/client';

export function toTheme(value) {
    let array = value.split(', ');
    let theme =
        array.map((item) => {
            let newValue = {
                "Indígenas": Tematicas.INDIGENAS,
                "Quilombolas": Tematicas.QUILOMBOLAS,
                "Negros e negras": Tematicas.NEGROS,
                "Comunidades LGBTQIA+": Tematicas.LGBTQIAPLUS,
                "Ciganos": Tematicas.CIGANOS,
                "Mulheres": Tematicas.MULHERES,
            }[item];
            if (newValue == undefined) newValue = Tematicas.OUTROS;
            return newValue;
        });
    return theme;
}

export function toGroupType(value) {
    let array = value.split(', ');
    return array.map((item) => {
        return {
            "Grupo de Pesquisa": TipoGrupo.PESQUISA,
            "Grupo de Estudos": TipoGrupo.ESTUDOS,
            "Grupo de Extensão": TipoGrupo.EXTENSAO,
            "Coletivo de Estudantes": TipoGrupo.COLETIVO_ESTUDANTES
        }[item];
    });
}

export function toMeetingPlaces(value) {
    let meetingPlaces = {
        "Sala dos professores": LocalReunioes.SALA_PROFESSORES,
        "Sala dos líderes": LocalReunioes.SALA_LIDERES,
        "Outros espaços da Universidade": LocalReunioes.OUTROS_ESPACOS_UNIVERSIDADE,
        "Áreas externas à Universidade": LocalReunioes.AREAS_EXTERNAS_UNIVERSIDADE,
        "Sala virtual": LocalReunioes.SALA_VIRTUAL
    }[value];
    if (meetingPlaces == undefined) meetingPlaces = LocalReunioes.OUTROS;
    return meetingPlaces;
}

export function toBool(value) {
    return value == "Sim" || value == "Talvez";
}

export function toLower(value) {
    return value.toLocaleLowerCase();
}