import { TipoDimensao } from '.prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from "../../../services/db";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == "GET"){
        let resposta: any = {};
        resposta.dimensao = {
            ensino: await prisma.dimensao.findMany({where: {tipo: TipoDimensao.ENSINO}}),
            pesquisa: await prisma.dimensao.findMany({where: {tipo: TipoDimensao.PESQUISA}}),
            extensao: await prisma.dimensao.findMany({where: {tipo: TipoDimensao.EXTENSAO}}),
        }
        res.status(200).json(resposta);
    }
}