import Navbar from '../navbar/navbarHome';
import Footer from '../footer/footerClient';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PTMale from '../img/pt-male.png';
import PTFemale from '../img/pt-female.png';

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
                <p className="fs-5 bold mb-2 mt-3">Contacta o teu Personal Trainer</p>
                <Card className="off-white-background">
                    <Card.Body>
                        <Row className="d-flex align-items-center">
                            <Col xs="auto">
                                <img src={PTMale} style={{ height: '3rem' }} alt="Fotografia de perfil do Personal Trainer" className='border border-primary-blue rounded-circle' />
                            </Col>
                            <Col className="ps-0">
                                <Card.Text>
                                    <span className='bold mb-0'>Rui Pinheiro</span><br />
                                    <i className="fa-solid fa-2xs fa-circle-small text-danger"></i> Offline
                                </Card.Text>
                            </Col>
                            <Col xs="auto">
                                <i className="fa-regular fa-chevron-right"></i>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                {/* Other PTs */}
                <p className="fs-5 bold mb-2 mt-4">Encontra um Personal Trainer</p>
                <Card className="off-white-background">
                    <Card.Body>
                        <Row className="d-flex align-items-center">
                            <Col xs="auto">
                                <img src={PTFemale} style={{ height: '3rem' }} alt="Fotografia de perfil do Personal Trainer" className='border border-primary-blue rounded-circle' />
                            </Col>
                            <Col className="ps-0">
                                <Card.Text>
                                    <span className='bold mb-0'>Carolina Patrocínio</span><br />
                                    <i className="fa-solid fa-2xs fa-circle-small text-success"></i> Online agora
                                </Card.Text>
                            </Col>
                            <Col xs="auto">
                                <i className="fa-regular fa-chevron-right"></i>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                <Card className="off-white-background mt-3">
                    <Card.Body>
                        <Row className="d-flex align-items-center">
                            <Col xs="auto">
                                <img src={PTFemale} style={{ height: '3rem' }} alt="Fotografia de perfil do Personal Trainer" className='border border-primary-blue rounded-circle' />
                            </Col>
                            <Col className="ps-0">
                                <Card.Text>
                                    <span className='bold mb-0'>Raquel Antunes</span><br />
                                    <i className="fa-solid fa-2xs fa-circle-small text-success"></i> Online agora
                                </Card.Text>
                            </Col>
                            <Col xs="auto">
                                <i className="fa-regular fa-chevron-right"></i>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>

                <Card className="off-white-background mt-3">
                    <Card.Body>
                        <Row className="d-flex align-items-center">
                            <Col xs="auto">
                                <img src={PTMale} style={{ height: '3rem' }} alt="Fotografia de perfil do Personal Trainer" className='border border-primary-blue rounded-circle' />
                            </Col>
                            <Col className="ps-0">
                                <Card.Text>
                                    <span className='bold mb-0'>Francisco Macau</span><br />
                                    <i className="fa-solid fa-2xs fa-circle-small text-success"></i> Online agora
                                </Card.Text>
                            </Col>
                            <Col xs="auto">
                                <i className="fa-regular fa-chevron-right"></i>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
            <Footer active="messages" />
        </div>
    )
}

export default clientMessages;