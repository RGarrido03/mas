import Navbar from '../navbar/navbarBack';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Data from '../api/pt/userExercise.json';

function PTUserDetailsChangePlan() {
    return (
        <div style={{ marginTop: 'calc(58px + 16px)' }}>
            <HelmetProvider>
                <Helmet>
                    <title>Editar plano de treino</title>
                </Helmet>
            </HelmetProvider>
            <Navbar text="Editar plano de treino" />
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
                                        <Button type="button" className="btn primary-blue-background white mt-3"><i className='fa-solid fa-pen-to-square white' />&nbsp;&nbsp;Editar</Button>
                                        &nbsp;&nbsp;
                                        <Button type="button" className="btn btn-light off-white-background border middle-gray mt-3"><i className='fa-solid fa-xmark' />&nbsp;&nbsp;Ignorar</Button>
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
                                        <Button type="button" className="btn primary-blue-background white mt-3"><i className='fa-solid fa-pen-to-square white' />&nbsp;&nbsp;Editar</Button>
                                        &nbsp;&nbsp;
                                        <Button type="button" className="btn btn-light off-white-background border middle-gray mt-3"><i className='fa-solid fa-xmark' />&nbsp;&nbsp;Ignorar</Button>
                                    </Col>
                                    <Col></Col>
                                </Row>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                })}
                <Row>
                    <Col></Col>
                    <Col xs="auto">
                        <Button type="button" className="btn primary-blue-background white mt-3"><i className='fa-solid fa-paper-plane white' />&nbsp;&nbsp;Submeter alterações</Button>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}

export default PTUserDetailsChangePlan;