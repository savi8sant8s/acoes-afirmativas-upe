import {
    Card,
    Row,
    Col,
    Badge
} from 'react-bootstrap'
import Chart from 'react-google-charts'

export function Stats({ data }) {
    return (
        <Card className="card mb-4">
            <Card.Body>
                <Card.Title className="color-white text-center">
                    Dados sobe as ações afirmativas realizadas
                </Card.Title>
                <Row>
                    <Col sm={6} className="p-4">
                        <Chart
                            chartType="BarChart"
                            data={[
                                ['Participante(s)', 'Quantidade'],
                                ['Professores', data.professors],
                                ['Grupos com CNPQ', data.cnpqGroups],
                                ['Grupos sem CNPQ', data.cnpqNotGroups],
                            ]}
                            options={{
                                title: 'Participação',
                                legend: { position: 'none' },
                            }}
                        />
                    </Col>
                    <Col sm={6} className="p-4">
                        <Chart
                            chartType="BarChart"
                            data={data.groups}
                            options={{
                                title: 'Identificação dos grupos',
                                legend: { position: 'none' },
                            }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} className="p-4">
                        <Chart
                            chartType="PieChart"
                            data={data.themes}
                            options={{
                                title: 'Temáticas abordadas',
                            }}
                        />
                    </Col>
                    <Col sm={6} className="p-4">
                        <Chart
                            chartType="PieChart"
                            data={data.meetingPlaces}
                            options={{
                                title: 'Locais das reuniões dos grupos',
                            }}
                        />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}