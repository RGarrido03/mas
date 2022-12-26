import Navbar from '../navbar/navbarBack';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Data from '../api/pt/exerciseClasses.json';
import { Link } from 'react-router-dom';

function PTExerciseClasses() {
    return (
        <div style={{ marginTop: 'calc(58px + 16px)' }}>
            <HelmetProvider>
                <Helmet>
                    <title>Aulas extra</title>
                </Helmet>
            </HelmetProvider>
            <Navbar text="Aulas extra" />
            <Container fluid className='px-3 text-center'>
                {Data.map((value, index) => {
                    return <Card key={index} className="off-white-background mt-3 text-start">
                        <Card.Body>
                            <Card.Title className='mb-2 semibold fs-6'><span className='bold'>{value.time}</span> | {value.focus}</Card.Title>
                            <Card.Text className='fs-7 text-center' as='div'>
                                <Row className='text-start'>
                                    <Col xs={6}>
                                        <span className='semibold'>Duração</span> {value.duration} minutos
                                    </Col>
                                    <Col xs={6}>
                                        <span className='semibold'>Dificuldade</span> {value.difficulty}
                                    </Col>
                                </Row>
                                {value.isOnline ? <Link to="/pt/classes/videocall" type="button" className="btn primary-blue-background white mt-3"><i className='fa-solid fa-video white'></i>&nbsp;&nbsp;Iniciar aula</Link> : ""}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                })}
                <Link to="/pt/classes/videocall" type="button" className="btn primary-blue-background white mt-3"><i className='fa-solid fa-add white'></i>&nbsp;&nbsp;Agendar aula</Link>
            </Container>
        </div>
    )
}

export default PTExerciseClasses;