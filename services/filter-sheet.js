import readXlsxFile from "read-excel-file";
import { sheetSchema } from "./sheet-schema.service";

export const getData = async (sheet) => {
    let { rows } = await readXlsxFile(sheet, { schema: sheetSchema });
    return rows;
}

