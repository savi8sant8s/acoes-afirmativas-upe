import { PrismaClient, TipoDimensao } from '.prisma/client';
import { toBool, toMeetingPlaces, toLower, toTheme, toGroupType } from "../../services/conversion.service";

const prisma = new PrismaClient();

export default async function handler(req, res) {
    let acoesAfirmativas = req.body;

    if (req.method === 'POST') {
        acoesAfirmativas.filter(async (acaoAfirmativa) => {
            if (toBool(acaoAfirmativa.participaGrupoAcaoAfirmativa)) {
                await prisma.acoesAfirmativas.create({
                    data: {
                        dataResposta: acaoAfirmativa.dataCriacao,
                        tematicas: toTheme(acaoAfirmativa.tematicas),
                        professor: {
                            create: {
                                nome: toLower(acaoAfirmativa.nome),
                                email: toLower(acaoAfirmativa.email),
                                autorizaUtilizacaoInformacoes: toBool(acaoAfirmativa.autorizaUtilizacaoInformacoes)
                            }
                        },
                        grupo: {
                            create: {
                                nome: toLower(acaoAfirmativa.nomeGrupo),
                                tipo: toGroupType(acaoAfirmativa.tipoGrupo),
                                liderNome: toLower(acaoAfirmativa.liderNome),
                                liderEmail: toLower(acaoAfirmativa.liderEmail),
                                vinculoCnpq: toBool(acaoAfirmativa.vinculoCnpq),
                                localReunioes: toMeetingPlaces(acaoAfirmativa.localReunioes),
                                redesSociais: toLower(acaoAfirmativa.redesSociais)
                            }
                        },
                        dimensoes: {
                            createMany: {
                                data: [
                                    {
                                        tipo: TipoDimensao.ENSINO,
                                        tiposAcoesRealizadas: acaoAfirmativa.dimensaoEnsinoAcoes,
                                        descricaoAcoesRealizadas: acaoAfirmativa.dimensaoEnsinoDescricao
                                    },
                                    {
                                        tipo: TipoDimensao.EXTENSAO,
                                        tiposAcoesRealizadas: acaoAfirmativa.dimensaoExtensaoAcoes,
                                        descricaoAcoesRealizadas: acaoAfirmativa.dimensaoExtensaoDescricao
                                    },
                                    {
                                        tipo: TipoDimensao.PESQUISA,
                                        tiposAcoesRealizadas: acaoAfirmativa.dimensaoPesquisaAcoes,
                                        descricaoAcoesRealizadas: acaoAfirmativa.dimensaoPesquisaDescricao
                                    }
                                ]
                            }
                        }
                    }
                });
            }
        });
        res.status(200).send({ timestamp: new Date() });
    }
}
