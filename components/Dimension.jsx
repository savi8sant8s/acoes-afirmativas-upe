import {
    Card,
    Container,
    ListGroup
} from 'react-bootstrap'

export function Dimension({ professor, data }) {
    return (
        <Container>
            <Card className="card mt-4 mb-4">
                <ListGroup variant="flush">
                    <ListGroup.Item className="item p-4">
                        <p><strong>Professor: </strong>{professor}</p>
                        <p><strong>Atividades: </strong>
                            {data.map((item, index) =>
                                <li key={index}>{item.tipo}: {item.descricaoAcoesRealizadas}</li>
                            )}
                        </p>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Container>
    )
}