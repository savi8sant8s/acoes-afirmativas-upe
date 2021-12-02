import {
  Container
} from "react-bootstrap"
import Indicator from "../components/Indicator"
import Presentation from "../components/Presentation"
import Stats from "../components/Stats"
import ShortDimension from "../components/ShortDimension"
import SubMenu from "../components/SubMenu"
import axios from "axios"

function Home({stats, shortDimensions}) {
  return (
    <>
      <SubMenu />
      <Container fluid>
        <Presentation />
        <Indicator id="dados" title="A UPE no fomento as ações afirmativas" />
        <Stats data={stats}/>
        <Indicator id="ensino" title="Dimensão ensino" />
        <ShortDimension title="ensino" data={shortDimensions.ensino} />
        <Indicator id="extensao" title="Dimensão extensão" />
        <ShortDimension title="extensão" data={shortDimensions.extensao} />
        <Indicator id="pesquisa" title="Dimensão pesquisa" />
        <ShortDimension title="pesquisa" data={shortDimensions.pesquisa} />
      </Container>
    </>
  )
}

Home.getInitialProps = async (ctx) => {
  const shortDimensions = await axios.get("https://acoes-afirmativas-upe.vercel.app/api/short-dimensions");
  const stats = await axios.get("https://acoes-afirmativas-upe.vercel.app/api/stats");

  return { stats: stats.data, shortDimensions: shortDimensions.data }
}

export default Home