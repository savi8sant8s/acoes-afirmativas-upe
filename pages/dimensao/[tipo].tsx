import { useRouter } from 'next/router'
import axios from 'axios';
import { InferGetServerSidePropsType } from 'next';
import { useEffect } from 'react';

export const getServerSideProps = async () => {
  const dimensoes = await axios.get("http://localhost:3000/api/estatisticas/dimensao");
  return {
    props: { dimensao: dimensoes.data.dimensao }
  }
}

function DimensaoExtensao({ dimensao }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const router = useRouter()
    const { tipo } = router.query
  
    useEffect(() => {
        if (!["pesquisa", "ensino", "extensao"].includes(String(tipo))){
            window.location.href = "/";
        }
    }, [tipo])

    return (
    <div className="text-center p-10">
      {dimensao[String(tipo)].slice(0, 10).map((_dimensao: any, index: number) => (
        <div key={index} className="text-justify text-blupe mb-10">
          <p><strong>Professor: </strong> {_dimensao.professor.nome}</p>
          <p><strong>Atividades:</strong>
            {_dimensao.dimensoes.map((__dimensao: any, index: number) => (
              <p key={index} className="ml-12 text-justify text-blupe">{__dimensao.descricaoAcoesRealizadas}</p>
            ))}
          </p>
        </div>
      ))}
    </div>
  )
}

export default DimensaoExtensao;