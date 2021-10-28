import { PrismaClient } from '.prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let body = req.body;
  for (let x = 0; x < body.length; x++) {
    let acaoAfirmativa = body[x];
    await prisma.acoesAfirmativas.create({
      data: {
        dataResposta: acaoAfirmativa.dataCriacao,
        tematicas: acaoAfirmativa.tematicas,
        professor: {
          create: {
            nome: acaoAfirmativa.nome,
            email: acaoAfirmativa.email,
            participaGrupoAcaoAfirmativa: acaoAfirmativa.participaGrupoAcaoAfirmativa,
            autorizaUtilizacaoInformacoes: acaoAfirmativa.autorizaUtilizacaoInformacoes
          }
        },
        grupo: {
          create: {
            nome: acaoAfirmativa.nomeGrupo,
            tipo: acaoAfirmativa.tipoGrupo,
            liderNome: acaoAfirmativa.liderNome,
            liderEmail: acaoAfirmativa.liderEmail,
            vinculoCnpq: acaoAfirmativa.vinculoCnpq,
            localReunioes: acaoAfirmativa.localReunioes,
            redesSociais: acaoAfirmativa.redesSociais
          }
        },
        dimensoes: {
          createMany: {
            data: [
              {
                tipo: "ENSINO",
                tiposAcoesRealizadas: acaoAfirmativa.dimensaoEnsinoAcoes,
                descricaoAcoesRealizadas: acaoAfirmativa.dimensaoEnsinoDescricao
              },
              {
                tipo: "EXTENSAO",
                tiposAcoesRealizadas: acaoAfirmativa.dimensaoExtensaoAcoes,
                descricaoAcoesRealizadas: acaoAfirmativa.dimensaoExtensaoDescricao
              },
              {
                tipo: "PESQUISA",
                tiposAcoesRealizadas: acaoAfirmativa.dimensaoPesquisaAcoes,
                descricaoAcoesRealizadas: acaoAfirmativa.dimensaoPesquisaDescricao
              }
            ]
          }
        }
      }
    });
  }
  res.status(200).json({ status: "SUCESSO" });
}
