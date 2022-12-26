import Navbar from '../navbar/navbarHome';
import Footer from '../footer/footerClientBasic';
import { Container, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import chart from '../img/chart.svg';
import ExerciseData from '../api/client/exercise.json';

function ClientBasicHome() {
    return (
        <div style={{ marginTop: 'calc(58px + 16px)', marginBottom:'calc(57px + 16px)' }}>
            <HelmetProvider>
                <Helmet>
                    <title>Início</title>
                </Helmet>
            </HelmetProvider>
            <Navbar actor="client-basic" text="Início"/>
            <Container fluid className="mt-3">
                {/* Exercise insight */}
                <Link to="/client-basic/exercise" className='text-decoration-none'>
                    <Card className="hover off-white-background mb-3">
                        <Card.Body className="row d-flex align-items-center">
                            <Col>
                                <Card.Title>
                                    <h1>Bom dia, Jorge!</h1>
                                </Card.Title>
                                <Card.Text>
                                    Hoje é dia de {ExerciseData["actual"].focus}. Vamos lá?
                                </Card.Text>
                            </Col>
                            <Col xs="auto">
                                <div className="float-end">
                                    <i className="fa-solid fa-dumbbell dark-gray"></i>
                                </div>
                            </Col>
                        </Card.Body>
                    </Card>
                </Link>

                {/* Measures insight */}
                <Link to="/client-basic/measures" className='text-decoration-none'>
                    <Card className="hover off-white-background mb-3">
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

                {/* Subscription insight */}
                <Link to="/client-basic/subscription" className='text-decoration-none'>
                    <Card className="hover off-white-background mb-3">
                        <Card.Body className="row d-flex align-items-center">
                            <Col>
                                <Card.Title className='bold'>Subscrição</Card.Title>
                                <Card.Text>Renovação a 15 de janeiro via <i className='fa-brands fa-cc-visa'></i></Card.Text>
                            </Col>
                            <Col xs="auto">
                                <div className="float-end">
                                    <i className="fa-solid fa-credit-card dark-gray"></i>
                                </div>
                            </Col>
                        </Card.Body>
                    </Card>
                </Link>
            </Container>
            <Footer active="home" />
        </div>
    )
}

export default ClientBasicHome;