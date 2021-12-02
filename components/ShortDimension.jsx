import {
    Card,
    ListGroup,
    Button,
    Container
} from 'react-bootstrap'

export function ShortDimension({title, data}) {
    return (
        <Card className="card mb-4">
            <Card.Body>
            <Card.Title className="color-white text-center">
                Ações afirmativas em atividades de {title}
            </Card.Title>
                <ListGroup variant="flush">
                    {data.map((item, index) => (
                      <ListGroup.Item key={index} className="item">{item.descricaoAcoesRealizadas.slice(0,100)}...</ListGroup.Item>
                    ))}
                </ListGroup>
                <Container className="d-flex justify-content-center">
                    <Button href="/dimensoes" className="button">Ver mais</Button>
                </Container>

            </Card.Body>
        </Card>
    )
}