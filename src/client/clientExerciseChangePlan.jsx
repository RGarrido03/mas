import Navbar from '../navbar/navbarBack';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Data from '../api/client/exercise.json';

function ClientExerciseChangePlan() {
    return (
        <div style={{ minHeight: 'calc(100vh - 58px)', paddingTop: '58px' }}>
            <HelmetProvider>
                <Helmet>
                    <title>Sugerir alterações ao plano</title>
                </Helmet>
            </HelmetProvider>
            <Navbar text="Sugerir alterações ao plano" />
            <Container fluid>
                {Data["done"].map((value, index) => {
                    return <Card className="off-white-background mt-3" key={index + 1}>
                        <Card.Body>
                            <Card.Title className='mb-0 fs-6'><span className='bold text-success'>{index + 1}º dia</span> | {value.focus}</Card.Title>
                        </Card.Body>
                    </Card>
                })}
                <Card className="off-white-background mt-3" key={Data["done"].length + 1}>
                        <Card.Body>
                            <Card.Title className='mb-2 semibold fs-6'><span className='bold'>{Data["done"].length + 1}º dia</span> | {Data["actual"].focus}</Card.Title>
                            <Card.Text className='fs-7 text-center'>
                                <Row className='text-start'>
                                    <Col xs={6}>
                                        <span className='semibold'>Duração</span> {Data["actual"].duration} minutos<br />
                                        <span className='semibold'>Consumo</span> {Data["actual"].calories}kcal<br />
                                    </Col>
                                    <Col xs={6}>
                                        <span className='semibold'>Dificuldade</span> {Data["actual"].difficulty}<br />
                                        <span className='semibold'>Modalidade</span> {Data["actual"].isOnline ? "Online" : "Presencial"}<br />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col></Col>
                                    <Col xs="auto">
                                        <Button type="button" className="btn primary-blue-background white mt-3">Editar</Button>
                                        &nbsp;&nbsp;
                                        <Button type="button" className="btn off-white-background border middle-gray mt-3">Ignorar</Button>
                                    </Col>
                                    <Col></Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                {Data["next"].map((value, index) => {
                    return <Card className="off-white-background mt-3" key={index + Data["done"].length + 2}>
                        <Card.Body>
                            <Card.Title className='mb-2 semibold fs-6'><span className='bold'>{index + Data["done"].length + 2}º dia</span> | {value.focus}</Card.Title>
                            <Card.Text className='fs-7 text-center'>
                                <Row className='text-start'>
                                    <Col xs={6}>
                                        <span className='semibold'>Duração</span> {value.duration} minutos<br />
                                        <span className='semibold'>Consumo</span> {value.calories}kcal<br />
                                    </Col>
                                    <Col xs={6}>
                                        <span className='semibold'>Dificuldade</span> {value.difficulty}<br />
                                        <span className='semibold'>Modalidade</span> {value.isOnline ? "Online" : "Presencial"}<br />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col></Col>
                                    <Col xs="auto">
                                        <Button type="button" className="btn primary-blue-background white mt-3">Editar</Button>
                                        &nbsp;&nbsp;
                                        <Button type="button" className="btn off-white-background border middle-gray mt-3">Ignorar</Button>
                                    </Col>
                                    <Col></Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                })}
            </Container>
        </div>
    )
}

export default ClientExerciseChangePlan;