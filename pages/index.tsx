import Head from "next/head";
import { InferGetStaticPropsType } from 'next'
import Chart from "react-google-charts";

const styles = {
    fontFamily: "Oswald"
};

export const getStaticProps = async () => {
    const response = await fetch("http://localhost:3000/api/actions");
    let data = await response.json()
    return {
      props: { data } 
    }
}

function Home({ data }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Oswald" />
            </Head>
            <div style={styles} className="bg-whiteupe">
                <div id="nav" className="w-full flex justify-between bg-blupe m-auto p-4 text-whiteupe text-2xl">
                    <p>Ações Afirmativas - UPE Garanhuns</p>
                    <a href="acesso" className="cursor-pointer">Acesso</a>
                </div>
                <div id="presentation" className="grid grid-cols-3 justify-items-center text-center mt-5 p-5">
                    <img width="150" height="50" src="logo.png" />
                    <div id="dimensions">
                        <p className="text-blupe text-2xl">Dimensões</p>
                        <div className="grid gap-4 grid-cols-3 text-center mt-10">
                            <div className="border-4 border-blupe text-blupe text-2xl rounded-2xl p-4 m-1 shadow-md">
                                Ensino
                            </div>
                            <div className="border-4 border-grayupe text-blupe text-2xl rounded-2xl p-4 m-1 shadow-md">
                                Extensão
                            </div>
                            <div className="border-4 border-redupe text-blupe text-2xl rounded-2xl p-4 m-1 shadow-md">
                                Pesquisa
                            </div>
                        </div>
                    </div>
                    <img width="150" height="50" src="universitas.png" />
                </div>
                <div id="stats" className="w-full bg-grayupe mt-10 p-10 text-center">
                    <p className="text-whiteupe text-2xl">Dados sobre as ações afirmativas</p>
                    <div className="grid grid-cols-2 gap-12 justify-items-center mt-10">
                        <div className="bg-redupe text-whiteupe text-1xl rounded-2xl p-4 m-1 w-96 shadow-2xl">
                        <div className="grid grid-cols-2">
                                <img width="75" height="25" src="professor.png" />
                                <p>Professores participantes
                                <br></br>
                                <label className="text-3xl">{data.countProfessor}</label></p>
                            </div>
                        </div>
                        <div className="bg-blupe text-whiteupe text-1xl rounded-2xl p-4 m-1 w-96 shadow-2xl">
                            <div className="grid grid-cols-2">
                                <img width="75" height="25" src="cnpq.png" />
                                <p>Grupos vinculados ao Cnqp
                                <br></br>
                                <label className="text-3xl">{data.countGroupsCnpq}</label></p>
                            </div>
                        </div>
                        <div className="bg-blupe text-whiteupe text-1xl rounded-2xl p-4 m-1 w-96 shadow-2xl">
                            <div className="grid grid-cols-2">
                                <img width="75" height="25" src="people.png" />
                                <p>Identificação dos grupos</p>
                            </div>
                            <Chart
                                chartType="PieChart"
                                loader={<div>Carregando gráfico</div>}
                                data={data.countGroups} />
                        </div>
                        <div className="bg-redupe text-whiteupe text-2xl rounded-2xl p-4 m-1 w-96 shadow-2xl">
                        <div className="grid grid-cols-2">
                                <img width="75" height="25" src="theme.png" />
                                <p>Áreas temáticas</p>
                            </div>
                            <Chart
                                chartType="PieChart"
                                loader={<div>Carregando gráfico</div>}
                                data={data.countThemes} />
                        </div>
                    </div>
                </div>
                <div id="footer" className="p-4 text-center text-blupe text-2xl mt-10">
                    <p>Todos os direitos reservados.</p>
                </div>
            </div>
        </>
    )
}

export default Home;