import { PrismaClient } from '.prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let acoesAfirmativas: any = req.body;
  acoesAfirmativas.filter(async(acaoAfirmativa: any)=>{
    await prisma.acoesAfirmativas.create({
      data: {
        dataResposta: acaoAfirmativa.dataCriacao,
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
            tematicas: acaoAfirmativa.tematicas,
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
  });
  res.status(200).send("SUCESSO");
}
