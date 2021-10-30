import { useEffect, useState } from "react"

export default function Menu() {
  const [logged, setLogged] = useState<boolean>();

  useEffect(() => {
    let logged = localStorage.getItem("logged");
    if (logged) {
      setLogged(true);
    }
  });

  return (
    <nav className="w-full flex justify-between bg-blupe m-auto p-4 text-whiteupe text-2xl">
      <a href="/" className="cursor-pointer">Ações Afirmativas</a>
      {!logged &&
        <a href="acesso" className="cursor-pointer">Acesso</a>
      }
      {logged &&
        <a href="painel" className="cursor-pointer">Painel</a>
      }
    </nav>
  )
};