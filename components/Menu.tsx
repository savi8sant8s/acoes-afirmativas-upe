import axios from "axios";
import { useState } from "react";
import { pegarDados } from "../services/filtrar-planilha.service";

export function Menu() {
  return (
    <>
      <nav className="w-full bg-blupe p-4 text-whiteupe text-2xl">
        <a href="#pres" className="cursor-pointer">Ações Afirmativas</a>
      </nav>
      <nav className="w-full flex flex-col justify-end md:flex-row md:justify-between bg-redupe p-2 text-whiteupe text-0.5xl">
        <li>
          <a href="#stats" className="cursor-pointer underline">Estatísticas</a>
        </li>
        <li>
          <a href="#teaching" className="cursor-pointer underline">Dimensão Ensino</a>
        </li>
        <li>
          <a href="#extension" className="cursor-pointer underline">Dimensão Extensão</a>
        </li>
        <li>
          <a href="#search" className="cursor-pointer underline">Dimensão Pesquisa</a>
        </li>
      </nav>
    </>
  )
};