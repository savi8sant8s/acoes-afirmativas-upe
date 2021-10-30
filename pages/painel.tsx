import axios from "axios";
import { useState } from "react";
import { getRows } from "../services/scraping-sheet.service";

export default function Home() {
    const [sheet, setSheet] = useState<File | any>();

    const onLoadSheet = (event: any) => {
        let file = event.target.files[0];
        setSheet(file);
    }

    const onRegisterAcoesAfirmativas = async () => {
        if (sheet){
            let rows: any = await getRows(sheet);
            await axios.post("/api/actions", rows);
        }
    }

    return (
        <div className="m-10 p-10">
            <label className="bg-blupe text-white font-bold p-4 rounded cursor-pointer">
                Adicionar planilha
                <input onClick={onLoadSheet} type="file" className="hidden"></input>
            </label>
            {sheet && <label onClick={onRegisterAcoesAfirmativas} className="bg-blupe text-white font-bold p-4 rounded cursor-pointer">
                Registrar respostas
            </label>}
        </div>
    )
};