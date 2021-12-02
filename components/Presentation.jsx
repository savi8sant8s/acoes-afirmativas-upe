import {
    Col,
    Row
} from "react-bootstrap"
import Image from "next/image"

export default function Presentation() {
    return (
        <Row className="p-4 d-flex justify-content-center align-items-center">
            <Col sm={4} className="text-center">
                <Image src="/logo.png" width="300" height="300" />
            </Col>
            <Col sm={4} className="text-justify">
                <p className="color-red"><strong>O que são ações afirmativas?</strong></p>
                <p className="color-blue">Ações afirmativas são políticas públicas focais
                    voltadas para grupos que sofrem discriminação
                    étnica, racial, de gênero, religiosa.
                    As políticas afirmativas têm como objetivo
                    promover a inclusão socioeconômica de populações
                    historicamente privadas do acesso a oportunidades.</p>
            </Col>
        </Row>
    )
}