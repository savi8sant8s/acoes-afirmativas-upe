import { PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    let type = req.query.type;

    if (req.method == "GET") {
        let result = {};
        result = await prisma.acoesAfirmativas.findMany({
            select: {
                professor: {
                    select: {
                        nome: true
                    }
                },
                dimensoes: {
                    select: {
                        tipo: true,
                        descricaoAcoesRealizadas: true,
                    }
                }
            }
        });
        res.status(200).json(result);
    }
}
