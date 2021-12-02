import Link from "next/link"
import {
    Row,
    Col
} from "react-bootstrap"

export default function SubMenu() {
    return (
        <nav className="bg-red p-2">
            <Row>
                <Col sm={3}>
                    <Link href="#dados">
                        <li className="link">Estatísticas</li>
                    </Link>
                </Col>
                <Col sm={3}>
                    <Link href="#ensino">
                        <li className="link">Dimensão Ensino</li>
                    </Link>
                </Col>
                <Col sm={3}>
                    <Link href="#extensao">
                        <li className="link">Dimensão Extensão</li>
                    </Link>
                </Col>
                <Col sm={3}>
                    <Link href="#pesquisa">
                        <li className="link">Dimensão Pesquisa</li>
                    </Link>
                </Col>
            </Row>
        </nav>
    )
}