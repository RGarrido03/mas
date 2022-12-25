import Navbar from '../navbar/navbarHome';
import Footer from '../footer/footerClient';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import chart from '../img/chart.svg';
import Data from '../api/client/measures.json';

function ClientMeasures() {
    return (
        <div style={{ minHeight: 'calc(100vh - 58px - 57px)', paddingTop: '58px', paddingBottom: '57px' }}>
            <HelmetProvider>
                <Helmet>
                    <title>Medidas corporais</title>
                </Helmet>
            </HelmetProvider>
            <Navbar actor="client" text="Medidas corporais" />
            <Container fluid>
                {/* Weekly plan */}
                <Card className="off-white-background mt-3">
                    <Card.Body>
                        <Row className='mb-2'>
                            <Col>
                                <Card.Title className='bold m-0'>Medidas atuais</Card.Title>
                            </Col>
                            <Col xs="auto">
                                <Link to="/client/measures/change"><i className='fa-solid fa-pen-to-square dark-gray m-0'></i></Link>
                            </Col>
                        </Row>
                        <Card.Text as="div">
                            <Row>
                                <Col xs="6">
                                    <p className="m-0 mb-1"><span className="semibold">Peso</span> {Data.weight} kg</p>
                                    <p className="m-0 mb-1"><span className="semibold">Peito</span> {Data.chest} cm</p>
                                    <p className="m-0"><span className="semibold">Cintura</span> {Data.waist} cm</p>
                                </Col>
                                <Col xs="6">
                                    <p className="m-0 mb-1"><span className="semibold">IMC</span> {Data.IMC} kg/m²</p>
                                    <p className="m-0 mb-1"><span className="semibold">Coxa</span> {Data.thighs} cm</p>
                                    <p className="m-0"><span className="semibold">Gémeos</span> {Data.calfs} cm</p>
                                </Col>
                            </Row>
                            <p className="m-0 mt-2 fw-light fs-7"><span className="semibold"></span>Última atualização a {Data["last-update"]}.</p>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="off-white-background mt-3">
                    <Card.Body>
                        <Card.Title className='bold m-0 mb-2'>Massa muscular</Card.Title>
                        <Card.Text as="div">
                            <Row className='d-flex align-items-center'>
                                <Col xs={8}>
                                    <img src={chart} className='w-100' alt="Gráfico com a evolução da massa muscular" />
                                </Col>
                                <Col xs={4}>
                                    +2,5kg em<br />duas semanas
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
                                <Col xs={8}>
                                    <div className="border rounded p-3 text-center">Gráfico</div>
                                </Col>
                                <Col xs={4}>
                                    +3cm em<br />duas semanas
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
                                <Col xs={8}>
                                    <div className="border rounded p-3 text-center">Gráfico</div>
                                </Col>
                                <Col xs={4}>
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

export default ClientMeasures;