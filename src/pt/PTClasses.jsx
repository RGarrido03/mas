import Navbar from '../navbar/navbarHome';
import Footer from '../footer/footerPT';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Data from '../api/pt/exercise.json';

function PTExercise() {
    return (
        <div style={{ marginTop: 'calc(58px + 16px)', marginBottom: 'calc(57px + 16px)' }}>
            <HelmetProvider>
                <Helmet>
                    <title>Aulas</title>
                </Helmet>
            </HelmetProvider>
            <Navbar actor="pt" text="Aulas" />
            <Container fluid>
                {/* Daily plan */}
                <Card className="off-white-background mt-3">
                    <Card.Body>
                        <Card.Title className='bold'>Plano semanal</Card.Title>
                        <Card.Text as="div">
                            {Data["done"].map((value, index) => { return <p key={index} className='mt-3 mb-0'><span className="fw-semibold text-success">{value.time}</span>&nbsp; {value.focus}</p> })}
                            <Row className="d-flex align-items-end">
                                <Col>
                                    <p key={1 + Data["done"].length} className='mt-3 mb-0 dark-gray'><span className="bold">{Data["actual"].time}</span>&nbsp; {Data["actual"].focus} ({Data["actual"].duration} minutos)</p>
                                </Col>
                                <Col xs="auto">
                                    {(Data["actual"].isOnline) ? <Link to="/pt/classes/videocall"><i className={'fa-play fa-solid dark-gray mt-3 mb-0'}></i></Link> : <i className={'fa-building fa-solid dark-gray mt-3 mb-0'}></i>}
                                </Col>
                            </Row>
                            {Data["next"].map((value, index) => {
                                return <Row className="d-flex align-items-end">
                                    <Col>
                                        <p key={1 + Data["done"].length} className='mt-3 mb-0'><span className="fw-semibold">{value.time}</span>&nbsp; {value.focus} ({value.duration} minutos)</p>
                                    </Col>
                                    <Col xs="auto">
                                        <i className={((value.isOnline) ? 'fa-play' : 'fa-building') + ' fa-solid'}></i>
                                    </Col>
                                </Row>
                            })}
                        </Card.Text>
                    </Card.Body>
                </Card>

                {/* Extra classes */}
                <Link to="/pt/classes/extraclasses" className='text-decoration-none'>
                    <Card className="hover off-white-background mt-3">
                        <Card.Body className="row d-flex align-items-center">
                            <Col>
                                <Card.Text className='semibold'>Aulas extra</Card.Text>
                            </Col>
                            <Col xs="auto">
                                <i className="fa-regular fa-chevron-right"></i>
                            </Col>
                        </Card.Body>
                    </Card>
                </Link>
            </Container>
            <Footer active="classes" />
        </div>
    )
}

export default PTExercise;