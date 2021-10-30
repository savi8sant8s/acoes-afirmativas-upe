import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from "../../services/db";
import { getCountGroups } from '../../services/scraping-group-types';

type ActionsStats = {
    timestamp: Date,
    countProfessor: Number,
    countGroupsCnpq: Number,
    countGroups: any,
    countThemes: any
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ActionsStats>) {
    if (req.method == "GET"){
        let response: any = {};
        response.timestamp = new Date();
        response.countProfessor = await prisma.professor.count();
        response.countGroupsCnpq = await prisma.grupo.count({where:{vinculoCnpq: "Sim"}});
        let groups = await prisma.grupo.findMany({select: {tipo: true}});
        response.countGroups = getCountGroups(groups, ["Tipo", "Quantidade"]);
        let themes = await prisma.acoesAfirmativas.findMany({select: {tematicas: true}});
        response.countThemes = getCountGroups(themes, ["Temáticas", "Quantidade"]);
        res.status(200).json(response);
    }
}