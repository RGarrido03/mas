import Navbar from '../navbar/navbarHome';
import Footer from '../footer/footerPT';
import { Container, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ExerciseData from '../api/pt/exercise.json';
import UnreadMessages from '../api/pt/unreadMessages.json';
import Notifications from '../api/pt/notifications.json';
import PTFemale from '../img/pt-female.png';

function PTHome() {
    return (
        <div style={{ minHeight: 'calc(100vh - 58px - 57px)', paddingTop: '58px', paddingBottom: '57px' }}>
            <HelmetProvider>
                <Helmet>
                    <title>Início</title>
                </Helmet>
            </HelmetProvider>
            <Navbar actor="pt" text="Início" />
            <Container fluid className="mt-3">
                {/* Exercise insight */}
                <Link to="/pt/exercise" className='text-decoration-none'>
                    <Card className="off-white-background mb-3">
                        <Card.Body className="row d-flex align-items-center">
                            <Col>
                                <Card.Title className='bold'>{ExerciseData["actual"].focus}</Card.Title>
                                <Card.Text>Hoje às {ExerciseData["actual"].time}, {ExerciseData["actual"].isOnline ? "online" : "presencial"}.</Card.Text>
                            </Col>
                            <Col xs="auto">
                                <div className="float-end">
                                    <i className="fa-solid fa-dumbbell dark-gray"></i>
                                </div>
                            </Col>
                        </Card.Body>
                    </Card>
                </Link>

                {/* Messages insight */}
                <Link to="/pt/messages" className='text-decoration-none'>
                    <Card className="off-white-background mb-3">
                        <Card.Body className="row d-flex align-items-center">
                            <Col>
                                <Card.Title className='bold'>{(UnreadMessages.length > 0) ? UnreadMessages.length : "Sem"} conversas por ler.</Card.Title>
                                <Card.Text>
                                    {UnreadMessages.length > 0 ? (UnreadMessages.map((value, index) => {
                                        if (index === 0) {
                                            return `De ${value}`
                                        } else if (index === UnreadMessages.length - 1) {
                                            return ` e ${value}.`
                                        } else {
                                            return `, ${value}`
                                        }
                                    })) : "Desfruta um momento de paz."
                                    }
                                </Card.Text>
                            </Col>
                            <Col xs="auto">
                                <div className="float-end">
                                    <i className="fa-solid fa-message dark-gray"></i>
                                </div>
                            </Col>
                        </Card.Body>
                    </Card>
                </Link>

                {/* Notifications */}
                {(Notifications.length > 0) ? <p className="mt-4 mb-2 bold fs-5">Notificações</p> : ""}
                {(Notifications.length > 0) ? Notifications.map((value, index) => {
                    return <Link to={value.link} className='text-decoration-none middle-gray'>
                        <Card className="off-white-background mb-3">
                            <Card.Body>
                                <Row className="d-flex align-items-center">
                                    <Col xs="auto" className="pe-0">
                                        <img src={PTFemale} style={{ height: '3rem' }} alt="Fotografia de perfil do Personal Trainer" className='border border-primary-blue rounded-circle' />
                                    </Col>
                                    <Col>
                                        <Card.Title className='mb-1 fs-6 bold'>{value.from}</Card.Title>
                                        <Card.Text>{value.text}</Card.Text>
                                    </Col>
                                    <Col xs="auto">
                                        <i class="fa-regular fa-chevron-right"></i>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Link>
                }) : ""}
            </Container>
            <Footer active="home" />
        </div>
    )
}

export default PTHome;