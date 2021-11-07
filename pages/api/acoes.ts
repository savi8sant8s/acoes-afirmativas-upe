import { PrismaClient, TipoDimensao } from '.prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { paraBooleano, paraLocalReunioes, paraMinusculo, paraTematica, paraTipoGrupo } from "../../services/conversao.service";

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let acoesAfirmativas: any = req.body;
  acoesAfirmativas.filter(async (acaoAfirmativa: any) => {
    if (paraBooleano(acaoAfirmativa.participaGrupoAcaoAfirmativa)) {
      await prisma.acoesAfirmativas.create({
        data: {
          dataResposta: acaoAfirmativa.dataCriacao,
          tematicas: paraTematica(acaoAfirmativa.tematicas),
          professor: {
            create: {
              nome: paraMinusculo(acaoAfirmativa.nome),
              email: paraMinusculo(acaoAfirmativa.email),
              autorizaUtilizacaoInformacoes: paraBooleano(acaoAfirmativa.autorizaUtilizacaoInformacoes)
            }
          },
          grupo: {
            create: {
              nome: paraMinusculo(acaoAfirmativa.nomeGrupo),
              tipo: paraTipoGrupo(acaoAfirmativa.tipoGrupo),
              liderNome: paraMinusculo(acaoAfirmativa.liderNome),
              liderEmail: paraMinusculo(acaoAfirmativa.liderEmail),
              vinculoCnpq: paraBooleano(acaoAfirmativa.vinculoCnpq),
              localReunioes: paraLocalReunioes(acaoAfirmativa.localReunioes),
              redesSociais: paraMinusculo(acaoAfirmativa.redesSociais)
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
  res.status(200).send({timestamp: new Date(), mensagem: "Ações adicionadas com sucesso."});
}
