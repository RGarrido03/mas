import Navbar from '../navbar/navbarBack';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Data from '../api/client/exerciseClasses.json';
import { Link } from 'react-router-dom';

function ClientExerciseClasses() {
    return (
        <div style={{ minHeight: 'calc(100vh - 58px)', paddingTop: '58px' }}>
            <HelmetProvider>
                <Helmet>
                    <title>Aulas extra</title>
                </Helmet>
            </HelmetProvider>
            <Navbar text="Participar em aulas extra" />
            <Container fluid>
                {Data.map((value) => {
                    return <Card className="off-white-background mt-3" key={value.name}>
                        <Card.Body>
                            <Card.Title className='mb-2 semibold fs-6'><span className='bold'>{value.time}</span> | {value.focus}</Card.Title>
                            <Card.Text className='fs-7 text-center'>
                                <Row className='text-start'>
                                    <Col xs={6}>
                                        <span className='semibold'>Duração</span> {value.duration} minutos<br />
                                        <span className='semibold'>Consumo</span> {value.calories}kcal<br />
                                    </Col>
                                    <Col xs={6}>
                                        <span className='semibold'>Dificuldade</span> {value.difficulty}<br />
                                        <span className='semibold'>PT</span> {value.pt}<br />
                                    </Col>
                                </Row>
                                <Link to="/client/home" type="button" className="btn primary-blue-background white mt-3">Participar</Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                })}
            </Container>
        </div>
    )
}

export default ClientExerciseClasses;