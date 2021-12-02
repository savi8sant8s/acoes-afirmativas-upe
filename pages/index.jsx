import {
  Container
} from "react-bootstrap"
import { 
  Indicator,
  Presentation,
  Stats, 
  ShortDimension,
  SubMenu 
} from "../components"
import axios from "axios"

const API_URL = process.env.NEXT_PUBLIC_SERVER_API_URL
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
  const shortDimensions = await axios.get(`${API_URL}/api/short-dimensions`);
  const stats = await axios.get(`${API_URL}/api/stats`);

  return { stats: stats.data, shortDimensions: shortDimensions.data }
}

export default Home