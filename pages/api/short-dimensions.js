import { TipoDimensao } from '.prisma/client';
import prisma from "../../services/prisma.service";

export default async function handler(req, res) {
    if (req.method == "GET") {
        let result = {
            timestamp: new Date(),
            ensino: await prisma.dimensao.findMany({ take: 5, where: { tipo: TipoDimensao.ENSINO } }),
            pesquisa: await prisma.dimensao.findMany({ take: 5, where: { tipo: TipoDimensao.PESQUISA } }),
            extensao: await prisma.dimensao.findMany({ take: 5, where: { tipo: TipoDimensao.EXTENSAO } }),
        }
        res.status(200).json(result);
    }
}