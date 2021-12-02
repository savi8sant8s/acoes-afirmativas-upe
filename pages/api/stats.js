import { PrismaClient } from '.prisma/client';
import { generateMatriz } from '../../services/generate-matriz.service'

const prisma = new PrismaClient()

export default async function handler(req, res) {
    if (req.method == "GET"){
        let result = {};
        let groups = await prisma.grupo.findMany({select: {tipo: true}});
        let themes = await prisma.acoesAfirmativas.findMany({select: {tematicas: true}});
        let meetingPlaces = await prisma.grupo.findMany({select: {localReunioes: true}});

        result.timestamp = new Date();
        result.professors = await prisma.professor.count();
        result.cnpqNotGroups = await prisma.grupo.count({where:{vinculoCnpq: false}});
        result.cnpqGroups = await prisma.grupo.count({where:{vinculoCnpq: true}});
        result.groups = generateMatriz(groups, "Tipo");
        result.themes = generateMatriz(themes, "Temáticas");
        result.meetingPlaces = generateMatriz(meetingPlaces, "Local das reuniões");

        res.status(200).json(result);
    }
}
