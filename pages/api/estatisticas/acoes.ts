import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from "../../../services/db";
import { gerarMatrizParaGrafico } from '../../../services/gerar-matriz.service';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method == "GET"){
        let resposta: any = {};
        let grupos = await prisma.grupo.findMany({select: {tipo: true}});
        let tematicas = await prisma.acoesAfirmativas.findMany({select: {tematicas: true}});
        let localReunioes = await prisma.grupo.findMany({select: {localReunioes: true}});

        resposta.dataHora = new Date();
        resposta.professores = await prisma.professor.count();
        resposta.gruposCnpq = await prisma.grupo.count({where:{vinculoCnpq: true}});

        resposta.grupos = gerarMatrizParaGrafico(grupos, "Tipo");
        resposta.tematicas = gerarMatrizParaGrafico(tematicas, "Temáticas");
        resposta.localReunioes = gerarMatrizParaGrafico(localReunioes, "Local de reuniões");

        res.status(200).json(resposta);
    }
}
