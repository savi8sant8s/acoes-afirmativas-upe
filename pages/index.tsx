import axios from 'axios';
import { InferGetStaticPropsType } from 'next'
import Chart from "react-google-charts";

export const getStaticProps = async () => {
    const { data } = await axios.get("http://localhost:3000/api/stats/actions");
    return {
        props: { data }
    }
}

function Presentation() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 justify-items-center text-center mt-3">
            <img width="150" height="50" src="logo.png" />
            <img width="150" height="50" src="upe.png" />
            <img width="150" height="50" src="universitas.png" />
        </div>
    )
};

function CountItemStats({ title, image, bg, count }: any) {
    return (
        <div className={`${bg} text-whiteupe text-1xl rounded-2xl w-96 shadow-2xl m-10`}>
            <div className="grid grid-cols-2 p-3">
                <img width="75" height="25" src={image} />
                <div>
                    <p>{title}</p>
                    <p className="text-3xl">{count}</p>
                </div>
            </div>
        </div>
    )
}

function ChartItemStats({ title, bg, image, chart }: any) {
    return (
        <div className={`${bg} text-whiteupe text-1xl rounded-2xl w-96 shadow-2xl`}>
            <div className="grid grid-cols-2 p-3">
                <img width="75" height="25" src={image} />
                <p>{title}</p>
            </div>
            <div className="p-2">{chart}</div>
        </div>
    )
}

function Home({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <div>
            <Presentation />
            <div id="stats" className="w-full bg-grayupe mt-10 p-10 text-center">
                <p className="text-whiteupe text-2xl">Dados sobre as ações afirmativas</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center mt-10">
                    <div>
                    <CountItemStats count={data.countProfessor} bg="bg-redupe" title="Professores participantes" image="professor.png" />
                    <CountItemStats count={data.countGroupsCnpq} bg="bg-blupe" title="Grupos vinculados ao Cnqp" image="cnpq.png" />
                    </div>
                    <ChartItemStats chart={
                        <Chart chartType="PieChart" data={data.countThemes} />}
                        bg="bg-redupe"
                        title="Áreas temáticas"
                        image="theme.png" />
                    <ChartItemStats chart={<Chart chartType="BarChart" data={data.countGroups} />}
                        bg="bg-blupe"
                        title="Identificação dos grupos"
                        image="people.png" />
                    <ChartItemStats chart={<Chart chartType="PieChart" data={data.countGroupMeetings} />}
                        bg="bg-blupe"
                        title="Local das reuniões dos grupos"
                        image="people.png" />
                </div>
            </div>
        </div>
    )
}

export default Home;