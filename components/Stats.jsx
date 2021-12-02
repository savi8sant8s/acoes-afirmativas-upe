import {
    Card,
    Row,
    Col,
    Badge
} from 'react-bootstrap'
import Chart from 'react-google-charts'

export default function Stats({ data }) {
    return (
        <Card className="card mb-4">
            <Card.Body>
                <Card.Title className="color-white text-center">
                    Dados sobe as ações afirmativas realizadas
                </Card.Title>
                <Row>
                    <Col sm={6} className="p-4">
                        <h4 className="color-white">
                            Docentes participantes: <Badge bg="info badge-large">{data.professors}</Badge>
                        </h4>
                        <h4 className="color-white">
                            Grupos presentes no cnpq: <Badge bg="info badge-large">{data.cnpqGroups}</Badge>
                        </h4>
                    </Col>
                    <Col sm={6} className="p-4">
                        <Chart
                            chartType="BarChart"
                            data={data.groups}
                            options={{
                                title: 'Identificação dos grupos',
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
                                title: 'Temáticas abordadas'}}
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