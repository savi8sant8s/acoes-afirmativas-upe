import { TipoDimensao } from '.prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from "../../../services/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == "GET") {
        let resposta: any = {};
        resposta.dimensao = {
            ensino: await prisma.acoesAfirmativas.findMany({
                select: {
                    professor: true,
                    dimensoes: true
                },
                where: {
                    dimensoes: { some: { tipo: TipoDimensao.ENSINO } }
                }
            }),
            extensao: await prisma.acoesAfirmativas.findMany({
                select: {
                    professor: true,
                    dimensoes: true
                },
                where: {
                    dimensoes: { some: { tipo: TipoDimensao.EXTENSAO } }
                }
            }),
            pesquisa: await prisma.acoesAfirmativas.findMany({
                select: {
                    professor: true,
                    dimensoes: true
                },
                where: {
                    dimensoes: { some: { tipo: TipoDimensao.PESQUISA } }
                }
            }),
        }
        res.status(200).json(resposta);
    }
}
