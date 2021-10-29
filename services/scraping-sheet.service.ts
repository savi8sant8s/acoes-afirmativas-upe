import readXlsxFile from "read-excel-file";
import { schemaSheetProfessor } from "./schema-sheet.service";

export const getRows = async (sheet: File, schemaName: string = "professor") => {
    let schema: any = {
        "professor": schemaSheetProfessor
    }[schemaName];
    let { rows } = await readXlsxFile(sheet, { schema });
    return rows;
}

