import axios from 'axios';
import { InferGetStaticPropsType } from 'next';
import Chart from "react-google-charts";

export const getStaticProps = async () => {
    const { data } = await axios.get("http://localhost:3000/api/estatisticas/acoes");
    return {
        props: { data }
    }
}

function Apresentacao() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center text-center mt-3">
            <img width="150" height="50" src="logo.png" />
            <img width="150" height="50" src="upe.png" />
            <img width="150" height="50" src="universitas.png" />
        </div>
    )
};

function EstatisticaQuant({ titulo, imagem, bg, quant }: any) {
    return (
        <div className={`${bg} text-whiteupe text-1xl rounded-2xl w-96 shadow-2xl m-10`}>
            <div className="grid grid-cols-2 p-3">
                <img width="75" height="25" src={imagem} />
                <div>
                    <p>{titulo}</p>
                    <p className="text-3xl">{quant}</p>
                </div>
            </div>
        </div>
    )
}

function EstatisticaGrafico({ titulo, bg, imagem, grafico }: any) {
    return (
        <div className={`${bg} text-whiteupe text-1xl rounded-2xl w-96 shadow-2xl`}>
            <div className="grid grid-cols-2 p-3">
                <img width="75" height="25" src={imagem} />
                <p>{titulo}</p>
            </div>
            <div className="p-2">{grafico}</div>
        </div>
    )
}

function Home({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div>
            <Apresentacao />
            <div id="stats" className="w-full bg-grayupe mt-10 p-10 text-center">
                <p className="text-whiteupe text-2xl">Dados sobre as ações afirmativas</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center mt-10">
                    <div>
                    <EstatisticaQuant quant={data.professores} bg="bg-redupe" titulo="Professores participantes" imagem="professor.png" />
                    <EstatisticaQuant quant={data.gruposCnpq} bg="bg-blupe" titulo="Grupos vinculados ao Cnqp" imagem="cnpq.png" />
                    </div>
                    <EstatisticaGrafico grafico={
                        <Chart chartType="PieChart" data={data.tematicas} />}
                        bg="bg-redupe"
                        titulo="Áreas temáticas"
                        imagem="theme.png" />
                    <EstatisticaGrafico grafico={<Chart chartType="BarChart" data={data.grupos} />}
                        bg="bg-blupe"
                        titulo="Identificação dos grupos"
                        imagem="people.png" />
                    <EstatisticaGrafico grafico={<Chart chartType="PieChart" data={data.localReunioes} />}
                        bg="bg-blupe"
                        titulo="Local das reuniões dos grupos"
                        imagem="people.png" />
                </div>
            </div>
        </div>
    )
}

export default Home;