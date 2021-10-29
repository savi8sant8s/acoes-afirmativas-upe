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
    let rows = await getRows(sheet);
    await axios.post("/api/acoes-afirmativas", rows);
  }

  return (
    <div className="flex flex-col items-center min-h-screen">
      <label className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded m-2 cursor-pointer">
        Adicionar planilha
        <img width="50" src="sheet.svg" />
        <input onClick={onLoadSheet} type="file" className="hidden"></input>
      </label>
      <label onClick={onRegisterAcoesAfirmativas} className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded m-2 cursor-pointer">
          Registrar respostas
          <img width="50" src="sheet.svg" />
        </label>
    </div>
  )
}

