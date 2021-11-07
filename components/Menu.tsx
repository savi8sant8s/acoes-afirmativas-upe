import axios from "axios";
import { useState } from "react";
import { pegarDados } from "../services/filtrar-planilha.service";

export default function Menu() {
  const [planilha, setPlanilha] = useState<File | any>();

  const onCarregarPlanilha = (event: any) => {
    let arquivo = event.target.files[0];
    setPlanilha(arquivo);
  }

  const onAdicionarAcoesAfirmativas = async () => {
    if (planilha) {
      let dados: any = await pegarDados(planilha);
      await axios.post("/api/acoes", dados);
      window.location.reload();
    }
  }

  return (
    <nav className="w-full flex justify-between bg-blupe m-auto p-4 text-whiteupe text-2xl">
      <a href="/" className="cursor-pointer">Ações Afirmativas</a>
      {!planilha &&
        <label className="bg-red-500 text-white p-2 rounded cursor-pointer">
          Adicionar planilha
          <input onChange={onCarregarPlanilha} type="file" className="hidden"></input>
        </label>
      }
      {planilha &&
        <label onClick={onAdicionarAcoesAfirmativas} className="bg-green-500 text-white p-2 rounded cursor-pointer">
          Registrar respostas
        </label>}
    </nav>
  )
};