import axios from "axios";
import Head from "next/head"
import { useState } from "react";
import readXlsxFile from 'read-excel-file'

export default function Home() {
  const [sheet, setSheet] = useState<File | any>();

  const schema = {
    "Carimbo de data/hora": {
      prop: 'dataCriacao',
      type: Date
    },
    "Endereço de e-mail": {
      prop: "email",
      type: String
    },
    "Pontuação": {
      prop: "pontuacao",
      type: Number
    },
    "Nome completo": {
      prop: "nome",
      type: String
    },
    "Email institucional": {
      prop: "emailInstitucional",
      type: String
    },
    "Você participa de algum Grupo relacionado à ações afirmativas?": {
      prop: "participaGrupoAcaoAfirmativa",
      type: String
    },
    "Como o Grupo se identifica?": {
      prop: "tipoGrupo",
      type: String
    },
    "Qual é o nome do Grupo?": {
      prop: "nomeGrupo",
      type: String
    },
    "Qual o nome do Líder?": {
      prop: "liderNome",
      type: String
    },
    "Qual é o e-mail do Líder?": {
      prop: "liderEmail",
      type: String
    },
    "O Grupo é registrado no CNPq?": {
      prop: "vinculoCnpq",
      type: String
    },
    "Onde as reuniões do Grupo são realizadas?": {
      prop: "localReunioes",
      type: String
    },
    "Informe o endereço do Grupo nas redes sociais caso possua (separados por vírgula):": {
      prop: "redesSociais",
      type: String
    },
    "As ações e atividades do Grupo envolvem alguma das seguintes temáticas?": {
      prop: "tematicas",
      type: String
    },
    "Na dimensão Ensino, quais as ações realizadas (ou em andamento) pelo Grupo em relação às temáticas elencadas anteriormente?": {
      prop: "dimensaoEnsinoAcoes",
      type: String
    },
    "Elenque os títulos das ações correspondentes a dimensão de ensino:": {
      prop: "dimensaoEnsinoDescricao",
      type: String
    },
    "Na dimensão Pesquisa, quais as ações realizadas (ou em andamento) pelo Grupo em relação às temáticas elencadas anteriormente?": {
      prop: "dimensaoPesquisaAcoes",
      type: String
    },
    "Elenque os títulos das ações correspondentes a dimensão de pesquisa:": {
      prop: "dimensaoPesquisaDescricao",
      type: String
    },
    "Na dimensão Extensão, quais as ações realizadas (ou em andamento) pelo Grupo em relação às temáticas elencadas anteriormente?": {
      prop: "dimensaoExtensaoAcoes",
      type: String
    },
    "Elenque os títulos das ações correspondentes a dimensão de extensão:": {
      prop: "dimensaoExtensaoDescricao",
      type: String
    },
    "Você autoriza a UPE a utilizar estas informações para a construção de uma plataforma para mapear as ações afirmativas e disponibilizar os dados às IES de Pernambuco?": {
      prop: "autorizaUtilizacaoInformacoes",
      type: String
    }
  }

  const getRows = async () => {
   let res = await readXlsxFile(sheet, { schema });
    return res.rows;
  }

  const onReadXlsx = (event: any) => {
    let file = event.target.files[0];
    setSheet(file);
  }

  const onRegisterAcoesAfirmativas = async () => {
    let rows = await getRows();
    axios.post("/api/acoes-afirmativas", rows).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <>
      <Head>
        <title>OAAUPE</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <nav className="bg-gray-100 w-full p-2">
          Observatório de Ações Afirmativas de Garanhuns/PE
        </nav>
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          {
            sheet != null &&
            <button onClick={onRegisterAcoesAfirmativas} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Registrar ações afirmativas
            </button>
          }
          <div className="flex w-full h-screen items-center justify-center bg-grey-lighter">
            <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg cursor-pointer">
              <img width="50" src="sheet.svg" />
              <span className="mt-2 text-base leading-normal">Selecione uma planilha</span>
              <input onChange={onReadXlsx} type='file' className="hidden" />
            </label>
          </div>
        </main>
      </div>
    </>
  )
}

