import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Dimension from '../components/Dimension'
import {
    Container
} from "react-bootstrap"
import axios from 'axios'


function DimensionType({ dimensions }) {

    return (
        <Container fluid>
            <h3 className="color-blue p-4 text-center">Atividades desenvolvidas</h3>
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

DimensionType.getInitialProps = async (ctx) => {
        const dimensions = await axios.get(`http://localhost:3000/api/dimensions`);
        return { dimensions: dimensions.data }
}

export default DimensionType