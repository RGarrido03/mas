import Navbar from '../navbar/navbarHome';
import Footer from '../footer/footerClient';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PTMale from '../img/pt-male.png';
import PTFemale from '../img/pt-female.png';
import Data from '../api/client/ptsAvailable.json';

function clientMessages() {
    return (
        <div style={{ minHeight: 'calc(100vh - 58px - 57px)', paddingTop: '58px', paddingBottom: '57px' }}>
            <HelmetProvider>
                <Helmet>
                    <title>Mensagens</title>
                </Helmet>
            </HelmetProvider>
            <Navbar actor="client" text="Mensagens" />
            <Container fluid>
                {/* Own PT */}
                <p className="fs-5 bold mb-0 mt-3">Contacta o teu Personal Trainer</p>
                <Link to="/client/messages/history" className='text-decoration-none'>
                    <Card className="hover off-white-background mt-3">
                        <Card.Body>
                            <Row className="d-flex align-items-center">
                                <Col xs="auto">
                                    <img src={PTMale} style={{ height: '3rem' }} alt="Fotografia de perfil do Personal Trainer" className='border border-primary-blue rounded-circle' />
                                </Col>
                                <Col className="ps-0">
                                    <Card.Text>
                                        <span className='bold mb-0'>{Data.assigned.name}</span><br />
                                        {Data.assigned.online ? (<span><i className="fa-solid fa-2xs fa-circle-small text-success"></i> Online agora</span>) : <span><i className="fa-solid fa-2xs fa-circle-small text-danger"></i> Offline</span>}
                                    </Card.Text>
                                </Col>
                                <Col xs="auto">
                                    <i className="fa-regular fa-chevron-right"></i>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Link>

                {/* Other PTs */}
                <p className="fs-5 bold mb-0 mt-4">Encontra um Personal Trainer</p>
                {Data["available"].map((value) => {
                    return <Link to="/client/messages/history" className='text-decoration-none'>
                        <Card className="hover off-white-background mt-3" key={value.name}>
                            <Card.Body>
                                <Row className="d-flex align-items-center">
                                    <Col xs="auto">
                                        <img src={PTFemale} style={{ height: '3rem' }} alt="Fotografia de perfil do Personal Trainer" className='border border-primary-blue rounded-circle' />
                                    </Col>
                                    <Col className="ps-0">
                                        <Card.Text>
                                            <span className='bold mb-0'>{value.name}</span><br />
                                            {value.online ? (<span><i className="fa-solid fa-2xs fa-circle-small text-success"></i> Online agora</span>) : <span><i className="fa-solid fa-2xs fa-circle-small text-danger"></i> Offline</span>}
                                        </Card.Text>
                                    </Col>
                                    <Col xs="auto">
                                        <i className="fa-regular fa-chevron-right"></i>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Link>

                })}
            </Container>
            <Footer active="messages" />
        </div>
    )
}

export default clientMessages;