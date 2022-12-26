import Navbar from '../navbar/navbarLogin';
import Footer from '../footer/footerLogin';
import { Container, Card, Stack, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function ClientRegister2() {
    return (
        <div style={{ height: 'calc(100vh - 58.64px)', paddingTop: '58.64px' }} className="d-flex align-items-center">
            <HelmetProvider>
                <Helmet>
                    <title>Registo (2/4)</title>
                </Helmet>
            </HelmetProvider>
            <Navbar />
            <Container fluid className='px-3 text-center'>
                <div>
                    <h1>Registo</h1>
                    <h2 className="mb-5">Escolha de um plano</h2>
                </div>
                <div className="vstack gap-3 col-12 mx-auto">
                    <Link to="/client/register/1" className='text-decoration-none middle-gray'><i className="fa-solid fa-arrow-left dark-gray"></i>&nbsp;&nbsp;Voltar atrás</Link>
                    <Stack direction='vertical' gap={3}>
                        <Card className='w-100 off-white-background border'>
                            <Card.Body className='text-start'>
                                <Card.Title className='align-middle fs-6'>
                                    <Row>
                                        <Col>
                                            <span className="bold">Basic</span>
                                            <span> (9,99€/mês)</span>
                                        </Col>
                                        <Col xs="auto"><i className='fa-regular fa-circle dark-gray'></i></Col>
                                    </Row>
                                </Card.Title>
                                <Card.Text>
                                    - Gestão de planos de treino<br />
                                    - Medidas corporais
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='w-100 off-white-background border'>
                            <Card.Body className='text-start'>
                                <Row>
                                    <Col>
                                        <span className="bold">Standard</span>
                                        <span> (19,99€/mês)</span>
                                    </Col>
                                    <Col xs="auto"><i className='fa-regular fa-circle dark-gray'></i></Col>
                                </Row>
                                <Card.Text>
                                    Tudo no plano Basic, mais:<br />
                                    - Planos de treino criados por um PT<br />
                                    - Mensagens e videochamadas com um PT
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className='w-100 off-white-background border'>
                            <Card.Body className='text-start'>
                                <Row>
                                    <Col>
                                        <span className="bold">Premium</span>
                                        <span> (24,99€/mês)</span>
                                    </Col>
                                    <Col xs="auto"><i className='fa-regular fa-circle-dot dark-gray'></i></Col>
                                </Row>
                                <Card.Text>
                                    Tudo no plano Standard, mais:<br />
                                    - Planos de nutrição criados por um PT
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Stack>
                    <div className="mx-auto">
                        <Link to="/client/register/3" type="button" className="btn primary-blue-background white">Próximo passo</Link>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default ClientRegister2;