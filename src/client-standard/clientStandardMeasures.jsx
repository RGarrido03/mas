import Navbar from '../navbar/navbarHome';
import Footer from '../footer/footerClientStandard';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import chart from '../img/chart.svg';
import Data from '../api/client/measures.json';

function ClientStandardMeasures() {
    return (
        <div style={{ marginTop: 'calc(58px + 16px)', marginBottom: 'calc(57px + 16px)' }}>
            <HelmetProvider>
                <Helmet>
                    <title>Medidas corporais</title>
                </Helmet>
            </HelmetProvider>
            <Navbar actor="client-standard" text="Medidas corporais" />
            <Container fluid>
                {/* Weekly plan */}
                <Card className="off-white-background mt-3">
                    <Card.Body>
                        <Row className='mb-2'>
                            <Col>
                                <Card.Title className='bold m-0'>Medidas atuais</Card.Title>
                            </Col>
                            <Col xs="auto">
                                <Link to="/client-standard/measures/change"><i className='fa-solid fa-pen-to-square dark-gray m-0'></i></Link>
                            </Col>
                        </Row>
                        <Card.Text as="div">
                            <Row>
                                <Col xs={6}>
                                    <p className="m-0 mb-1"><span className="semibold">Peso</span> {Data.weight} kg</p>
                                    <p className="m-0 mb-1"><span className="semibold">Abdominal</span> {Data.abs} cm</p>
                                    <p className="m-0 mb-1"><span className="semibold">Braço</span> {Data.arm} cm</p>
                                    <p className="m-0 mb-1"><span className="semibold">Coxas</span> {Data.thighs} cm</p>
                                    <p className="m-0 mb-1"><span className="semibold">Peito</span> {Data.chest} cm</p>
                                </Col>
                                <Col>
                                    <p className="m-0 mb-1"><span className="semibold">IMC</span> {Data.IMC} kg/m²</p>
                                    <p className="m-0 mb-1"><span className="semibold">Antebraço</span> {Data.forearm} cm</p>
                                    <p className="m-0 mb-1"><span className="semibold">Costas</span> {Data.back} cm</p>
                                    <p className="m-0 mb-1"><span className="semibold">Gémeos</span> {Data.calfs} cm</p>
                                    <p className="m-0 mb-1"><span className="semibold">Rabo</span> {Data.butt} cm</p>
                                    
                                </Col>
                            </Row>
                            <p className="m-0 mt-1 fw-light fs-7"><span className="semibold"></span>Última atualização a {Data["last-update"]}.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="off-white-background mt-3">
                    <Card.Body>
                        <Card.Title className='bold m-0 mb-2'>Peso</Card.Title>
                        <Card.Text as="div">
                            <Row className='d-flex align-items-center'>
                                <Col xs={8} sm={7} md={6} lg={5} xl={4}>
                                    <img src={chart} className='w-100' alt="Gráfico com a evolução da massa muscular" />
                                </Col>
                                <Col>
                                    +2,5kg em<br />duas semanas
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="off-white-background mt-3">
                    <Card.Body>
                        <Card.Title className='bold m-0 mb-2'>Abdominal</Card.Title>
                        <Card.Text as="div">
                            <Row className='d-flex align-items-center'>
                                <Col xs={8} sm={7} md={6} lg={5} xl={4}>
                                    <div className="border rounded p-3 text-center">Gráfico</div>
                                </Col>
                                <Col>
                                    -3cm em<br />duas semanas
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="off-white-background mt-3">
                    <Card.Body>
                        <Card.Title className='bold m-0 mb-2'>Antebraço</Card.Title>
                        <Card.Text as="div">
                            <Row className='d-flex align-items-center'>
                                <Col xs={8} sm={7} md={6} lg={5} xl={4}>
                                    <div className="border rounded p-3 text-center">Gráfico</div>
                                </Col>
                                <Col>
                                    +2cm em<br />uma semana
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="off-white-background mt-3">
                    <Card.Body>
                        <Card.Title className='bold m-0 mb-2'>Braço</Card.Title>
                        <Card.Text as="div">
                            <Row className='d-flex align-items-center'>
                                <Col xs={8} sm={7} md={6} lg={5} xl={4}>
                                    <div className="border rounded p-3 text-center">Gráfico</div>
                                </Col>
                                <Col>
                                    +2cm em<br />uma semana
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="off-white-background mt-3">
                    <Card.Body>
                        <Card.Title className='bold m-0 mb-2'>Costas</Card.Title>
                        <Card.Text as="div">
                            <Row className='d-flex align-items-center'>
                                <Col xs={8} sm={7} md={6} lg={5} xl={4}>
                                    <div className="border rounded p-3 text-center">Gráfico</div>
                                </Col>
                                <Col>
                                    +2cm em<br />uma semana
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="off-white-background mt-3">
                    <Card.Body>
                        <Card.Title className='bold m-0 mb-2'>Coxas</Card.Title>
                        <Card.Text as="div">
                            <Row className='d-flex align-items-center'>
                                <Col xs={8} sm={7} md={6} lg={5} xl={4}>
                                    <div className="border rounded p-3 text-center">Gráfico</div>
                                </Col>
                                <Col>
                                    +2cm em<br />uma semana
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="off-white-background mt-3">
                    <Card.Body>
                        <Card.Title className='bold m-0 mb-2'>Gémeos</Card.Title>
                        <Card.Text as="div">
                            <Row className='d-flex align-items-center'>
                                <Col xs={8} sm={7} md={6} lg={5} xl={4}>
                                    <div className="border rounded p-3 text-center">Gráfico</div>
                                </Col>
                                <Col>
                                    +2cm em<br />uma semana
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="off-white-background mt-3">
                    <Card.Body>
                        <Card.Title className='bold m-0 mb-2'>Peito</Card.Title>
                        <Card.Text as="div">
                            <Row className='d-flex align-items-center'>
                                <Col xs={8} sm={7} md={6} lg={5} xl={4}>
                                    <div className="border rounded p-3 text-center">Gráfico</div>
                                </Col>
                                <Col>
                                    +2cm em<br />uma semana
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="off-white-background mt-3">
                    <Card.Body>
                        <Card.Title className='bold m-0 mb-2'>Rabo</Card.Title>
                        <Card.Text as="div">
                            <Row className='d-flex align-items-center'>
                                <Col xs={8} sm={7} md={6} lg={5} xl={4}>
                                    <div className="border rounded p-3 text-center">Gráfico</div>
                                </Col>
                                <Col>
                                    +2cm em<br />uma semana
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
            <Footer active="measures" />
        </div>
    )
}

export default ClientStandardMeasures;