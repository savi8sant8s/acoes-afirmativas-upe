import {
    Dimension
} from '../components'
import {
    Container
} from "react-bootstrap"
import axios from 'axios'

const API_URL = process.env.NEXT_PUBLIC_SERVER_API_URL

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
    const dimensions = await axios.get(`${API_URL}/api/dimensions`);
    return { dimensions: dimensions.data }
}

export default Dimensions