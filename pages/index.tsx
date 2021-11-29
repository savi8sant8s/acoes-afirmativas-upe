import axios from 'axios';
import { InferGetServerSidePropsType } from 'next';
import { Menu, Presentation, Indicator, Panel, Card, Button } from '../components';
import Chart from "react-google-charts";
import React from 'react';

export const getServerSideProps = async () => {
    const stats = await axios.get("http://localhost:3000/api/estatisticas/acoes");
    const dimensoes = await axios.get("http://localhost:3000/api/estatisticas/dimensoes");
    return {
        props: { data: stats.data, dimensao: dimensoes.data.dimensao }
    }
}

function Stats({ data }: any) {
    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Card title="Professores participantes" content={data.professores} />
            <Card title="Grupos registrados no CNPQ" content={data.gruposCnpq} />
            <Card title="Áreas temáticas" content={
                <Chart
                    chartType="PieChart"
                    data={data.tematicas} />} />
            <Card title="Identificação dos grupos" content={
                <Chart
                    chartType="BarChart"
                    data={data.grupos} />} />
            <Card title="Identificação dos grupos" content={
                <Chart
                    chartType="PieChart"
                    data={data.localReunioes} />
            } />
        </div>
    )
}

function Home({ data, dimensao }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <div>
            <Menu />
            <Presentation id="pres" />
            <Indicator id="stats" title="A UPE no fomento as ações afirmativas" />
            <Panel title="Estatísticas das ações realizadas" content={<Stats data={data} />} />
            <Indicator id="teaching" title="Ações realizadas na dimensão ensino" />
            <Panel content={
                <div className="text-center">
                    {dimensao.ensino.slice(0, 5).map((_dimensao: any, index: number) => (
                        <li key={index} className="text-justify text-blupe">
                            {_dimensao.descricaoAcoesRealizadas.slice(0, 100) + "..."}
                        </li>
                    ))}
                    <Button href="/dimensao/ensino"  message="Ver mais" />
                </div>} />
            <Indicator id="extension" title="Ações realizadas na dimensão extensão" />
            <Panel content={
                <div className="text-center">
                    {dimensao.extensao.slice(0, 5).map((_dimensao: any, index: number) => (
                        <li key={index} className="text-justify text-blupe">
                            {_dimensao.descricaoAcoesRealizadas.slice(0, 100) + "..."}
                        </li>
                    ))}
                    <Button href="/dimensao/extensao" message="Ver mais" />
                </div>} />
            <Indicator id="search" title="Ações realizadas na dimensão pesquisa" />
            <Panel content={
                <div className="text-center">
                    {dimensao.pesquisa.slice(0, 5).map((_dimensao: any, index: number) => (
                        <li key={index} className="text-justify text-blupe">
                            {_dimensao.descricaoAcoesRealizadas.slice(0, 100) + "..."}
                        </li>
                    ))}
                    <Button href="/dimensao/pesquisa"  message="Ver mais" />
                </div>} />
        </div>
    )
}

export default Home;