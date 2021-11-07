import readXlsxFile from "read-excel-file";
import { schemaPlanilha } from "./schema-planilha.service";

export const pegarDados = async (planilha: File) => {
    let { rows } = await readXlsxFile(planilha, { schema: schemaPlanilha });
    return rows;
}

