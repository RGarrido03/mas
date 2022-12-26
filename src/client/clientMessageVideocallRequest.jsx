import Navbar from '../navbar/navbarBack';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Data from '../api/client/ptAvailableSchedule.json';
import { Link } from 'react-router-dom';

function ClientExerciseVideocallRequest() {
    return (
        <div style={{ minHeight: 'calc(100vh - 58px)', paddingTop: '58px' }}>
            <HelmetProvider>
                <Helmet>
                    <title>Pedir videochamada</title>
                </Helmet>
            </HelmetProvider>
            <Navbar text="Pedir videochamada" />
            <Container fluid className='px-3 text-center'>
                <Card className="hover off-white-background mt-3 text-start">
                    <Card.Body>
                        <Row>
                            <Col>
                                <Card.Text className='mb-0 bold'>Primeiro horário disponível</Card.Text>
                            </Col>
                            <Col xs="auto">
                                <i className='fa-regular fa-circle-dot dark-gray'></i>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                {Data.map((value, index) => {
                    return <Card className="hover off-white-background mt-3 text-start" key={index + 1}>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Card.Text className='mb-0'><span className='bold'>{value.weekday}</span>, {value.startTime} - {value.endTime}</Card.Text>
                                </Col>
                                <Col xs="auto">
                                    <i className='fa-regular fa-circle dark-gray'></i>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                })}
                <Link to="/client/messages/videocall"><Button className="primary-blue-background mt-3"><i className='fa-solid fa-paper-plane white' />&nbsp;&nbsp;Enviar pedido</Button></Link>
                <p className="mb-0 mt-3 fw-light fs-7">Assim que o Personal Trainer aceitar o pedido, enviar-te-emos uma notificação.</p>
            </Container>
        </div>
    )
}

export default ClientExerciseVideocallRequest;