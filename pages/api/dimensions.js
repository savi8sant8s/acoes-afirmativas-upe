import prisma from "../../services/prisma.service";

export default async function handler(req, res) {

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
