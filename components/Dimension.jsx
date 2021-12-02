import {
    Card,
    Container,
    ListGroup
} from 'react-bootstrap'

export default function Dimension({ professor, data }) {
    return (
        <Container>
            <Card className="card m-4">
                <Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item className="item">
                            <p><strong>Professor: </strong>{professor}</p>
                            <p><strong>Atividades: </strong>
                                {data.map((item, index) => 
                                    <li key={index}>{item.descricaoAcoesRealizadas}</li>
                                )}
                            </p>
                        </ListGroup.Item>
                    </ListGroup>
                </Card.Body>
            </Card>
        </Container>
    )
}