import axios from 'axios';
import { InferGetServerSidePropsType } from 'next';
import { Menu, Presentation, Indicator, Panel, ChartStats, CountStats } from '../components';
import Chart from "react-google-charts";

export const getServerSideProps = async () => {
    const stats = await axios.get("http://localhost:3000/api/estatisticas/acoes");
    const dimensoes = await axios.get("http://localhost:3000/api/estatisticas/dimensoes");
    console.log(dimensoes.data)
    return {
        props: { data: stats.data, dimensoes: dimensoes.data }
    }
}

function Stats({ data }: any) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <CountStats number={data.professores} bg="bg-redupe" title="Professores participantes" imgUrl="/professor.png" />
                <CountStats number={data.gruposCnpq} bg="bg-blupe" title="Grupos vinculados ao Cnqp" imgUrl="/cnpq.png" />
            </div>
            <ChartStats
                bg="bg-blupe"
                title="Áreas temáticas"
                imgUrl="/people.png"
                graph={
                    <Chart
                        loader={<div>Carregando gráfico...</div>}
                        chartType="PieChart"
                        data={data.tematicas} />
                } />
            <ChartStats
                bg="bg-blupe"
                title="Identificação dos grupos"
                imgUrl="/people.png"
                graph={
                    <Chart
                        loader={<div>Carregando gráfico...</div>}
                        chartType="BarChart"
                        data={data.grupos} />
                } />
            <ChartStats
                bg="bg-blupe"
                title="Local das reuniões dos grupos"
                imgUrl="/people.png"
                graph={
                    <Chart
                        loader={<div>Carregando gráfico...</div>}
                        chartType="PieChart"
                        data={data.localReunioes} />
                } />
        </div>
    )
}

function Home({ data, dimensoes }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <div>
            <Menu />
            <Presentation id="pres" />
            <Indicator title="A UPE no fomento as ações afirmativas" />
            <Panel id="stats" title="Estatísticas das ações realizadas" content={<Stats data={data} />} />
            <Indicator title="Ações realizadas na dimensão ensino" />
            <Panel id="teaching" title="Ensino" content={
                <div>
                    {dimensoes.dimensao.ensino.map((dimensao: any, index: number) => (
                        <li key={index}>
                            {dimensao.descricaoAcoesRealizadas.slice(0, 100) + "..."}
                        </li>
                    ))}
                    <button className="bg-redupe hover:bg-red-300 text-white font-bold py-2 px-4 rounded">
                        Ver mais
                    </button>
                </div>} />
            <Indicator title="Ações realizadas na dimensão extensão" />
            <Panel id="extension" title="Extensão" content={
                <div>
                    {dimensoes.dimensao.extensao.map((dimensao: any, index: number) => (
                        <li key={index}>
                            {dimensao.descricaoAcoesRealizadas.slice(0, 100) + "..."}
                        </li>
                    ))}
                    <button className="bg-redupe hover:bg-red-300 text-white font-bold py-2 px-4 rounded">
                        Ver mais
                    </button>
                </div>} />
            <Indicator title="Ações realizadas na dimensão pesquisa" />
            <Panel id="search" title="Pesquisa" content={
                <div>
                    {dimensoes.dimensao.pesquisa.map((dimensao: any, index: number) => (
                        <li key={index}>
                            {dimensao.descricaoAcoesRealizadas.slice(0, 100) + "..."}
                        </li>
                    ))}
                    <button className="bg-redupe hover:bg-red-300 text-white font-bold py-2 px-4 rounded">
                        Ver mais
                    </button>
                </div>} />
        </div>
    )
}

export default Home;