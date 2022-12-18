import Navbar from '../navbar/navbarBackMessage';
import { Container, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import chart from '../img/chart.svg';
import Data from '../api/pt/userExercise.json';

function PTUserDetails() {
    return (
        <div style={{ minHeight: 'calc(100vh - 58px - 57px)', paddingTop: '58px', paddingBottom: '57px' }}>
            <HelmetProvider>
                <Helmet>
                    <title>Início</title>
                </Helmet>
            </HelmetProvider>
            <Navbar actor="pt" />
            <Container fluid className="mt-3">
                {/* Exercise insight */}
                <Link to="/pt/users/details/changeplan" className='text-decoration-none'>
                    <Card className="off-white-background mt-3">
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Card.Title className='bold'>Plano semanal</Card.Title>
                                    <Card.Text as="div">
                                        {Data["done"].map((value, index) => { return <p key={index} className='mt-3 mb-0'><span className="fw-semibold text-success">{index + 1}º dia</span>&nbsp; {value.focus}</p> })}
                                        <p key={1 + Data["done"].length} className='mt-3 mb-0'><span className="fw-semibold dark-gray">{Data["done"].length + 1}º dia</span>&nbsp; {Data["actual"].focus}<br />{Data["actual"].duration} minutos | {Data["actual"].calories}kcal | {Data["actual"].difficulty}</p>
                                        {Data["next"].map((value, index) => { return <p key={index + 2 + Data["done"].length} className='mt-3 mb-0'><span className="fw-semibold">{index + 2 + Data["done"].length}º dia</span>&nbsp; {value.focus}</p> })}
                                    </Card.Text>
                                </Col>
                                <Col xs="auto">
                                    <i className='fa-solid fa-dumbbell dark-gray'></i>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Link>

                {/* Nutrition insight */}
                <Link to="/pt/users/details/nutrition" className='text-decoration-none'>
                    <Card className="off-white-background mt-3">
                        <Card.Body className="row d-flex align-items-center">
                            <Col>
                                <Card.Title className='bold'>Almoço (320kcal)</Card.Title>
                                <Card.Text>Bife de frango com um bróculo e meia batata cozida</Card.Text>
                            </Col>
                            <Col xs="auto">
                                <div className="float-end">
                                    <i className="fa-solid fa-pot-food dark-gray"></i>
                                </div>
                            </Col>
                        </Card.Body>
                    </Card>
                </Link>

                {/* Measures insight */}
                <Link to="/pt/users/details/measures" className='text-decoration-none'>
                    <Card className="off-white-background mt-3">
                        <Card.Body className="row d-flex align-items-center">
                            <Col>
                                <Card.Title className='bold'>Massa muscular</Card.Title>
                                <Card.Text><img src={chart} alt="Gráfico om a evolução da massa muscular" /></Card.Text>
                            </Col>
                            <Col xs="auto">
                                <div className="float-end">
                                    <i className="fa-solid fa-ruler dark-gray"></i>
                                </div>
                            </Col>
                        </Card.Body>
                    </Card>
                </Link>
            </Container>
        </div>
    )
}

export default PTUserDetails;