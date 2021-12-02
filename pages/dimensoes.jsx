import {
    Dimension
} from '../components'
import {
    Container
} from "react-bootstrap"
import axios from 'axios'


function Dimensions({ dimensions }) {

    return (
        <Container fluid>
            <h3 className="color-blue p-4 text-center">Ações afirmativas desenvolvidas</h3>
            {dimensions.map((item, index) => (
                <Dimension
                    key={index}
                    professor={item.professor.nome}
                    data={item.dimensoes}
                ></Dimension>
            ))}
        </Container>
    )
}

Dimensions.getInitialProps = async (ctx) => {
    const dimensions = await axios.get("https://acoes-afirmativas-upe.vercel.app/api/dimensions");
    return { dimensions: dimensions.data }
}

export default Dimensions