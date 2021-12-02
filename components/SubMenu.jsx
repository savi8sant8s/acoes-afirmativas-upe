import Link from "next/link"
import {
    Row,
    Col
} from "react-bootstrap"

export function SubMenu() {
    return (
        <nav className="bg-red p-2">
            <Row>
                <Col sm={3}>
                    <Link href="#dados">
                        <label className="link">Estatísticas</label>
                    </Link>
                </Col>
                <Col sm={3}>
                    <Link href="#ensino">
                        <label className="link">Dimensão Ensino</label>
                    </Link>
                </Col>
                <Col sm={3}>
                    <Link href="#extensao">
                        <label className="link">Dimensão Extensão</label>
                    </Link>
                </Col>
                <Col sm={3}>
                    <Link href="#pesquisa">
                        <label className="link">Dimensão Pesquisa</label>
                    </Link>
                </Col>
            </Row>
        </nav>
    )
}