import Navbar from '../navbar/navbarBackMessage';
import Footer from '../footer/footerMessage';
import { Container, Row, Col } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PTMale from '../img/pt-male.png';
import Client from '../img/client.jpeg';
import Data from '../api/client/messageHistory.json';

function ClientStandardMessageHistory() {
    return (
        <div style={{ minHeight: '100vh', paddingTop: '58px', paddingBottom: '75px' }} className="d-flex align-items-end">
            <HelmetProvider>
                <Helmet>
                    <title>Mensagens</title>
                </Helmet>
            </HelmetProvider>
            <Navbar actor="client" />
            <Container fluid className='mb-3'>
                {Data.map((value, index) => {
                    if (value.sender === "client") {
                        return value.content.map((value_b, index_b) => {
                            console.log(value_b);
                            if (value_b.type === "message") {
                                return <div key={index_b} className="mt-3">
                                    <Row className='d-flex align-items-end'>
                                        <Col></Col>
                                        <Col xs="auto" className="pe-0 m-0 fs-7 text-end">
                                            {value_b.isRead && <span className="semibold">Lida<br /></span>}
                                            {!value_b.isRead && <span>Entregue<br /></span>}
                                            {value_b.time.slice(0, 5)}
                                        </Col>
                                        <Col xs="auto" className="pe-0">
                                            <p className="p-2 primary-blue-background rounded white mb-0">{value_b["text"]}</p>
                                        </Col>
                                        <Col xs="auto">
                                            <img src={Client} style={{ height: '2rem' }} alt="Fotografia de perfil do Cliente" className='border border-primary-blue rounded-circle' />
                                        </Col>
                                    </Row>
                                </div>;
                            } else {
                                return <div key={index_b} className="mt-3">
                                    <Row className='d-flex align-items-center fs-7'>
                                        <Col></Col>
                                        <Col xs="auto" className="pe-2">
                                            <img src={Client} style={{ height: '0.85rem' }} alt="Fotografia de perfil do Cliente" className='border border-primary-blue rounded-circle' />
                                        </Col>
                                        <Col xs="auto" className="px-0 bold">
                                            <p className="mb-0">{value_b["text"]}</p>
                                        </Col>
                                        <Col xs="auto" className="ps-2 m-0 text-end">
                                            {value_b.time.slice(0, 5)}
                                        </Col>
                                        <Col></Col>
                                    </Row>
                                </div>;
                            }
                        });

                    } else {
                        return value.content.map((value_b, index_b) => {
                            console.log(value_b);
                            if (value_b.type === "message") {
                                return <div key={index_b} className="mt-3">
                                    <Row className='d-flex align-items-end'>
                                        <Col xs="auto">
                                            <img src={PTMale} style={{ height: '2rem' }} alt="Fotografia de perfil do Personal Trainer" className='border border-primary-blue rounded-circle' />
                                        </Col>
                                        <Col xs="auto" className="px-0">
                                            <p className="p-2 off-white-background border rounded mb-0">{value_b["text"]}</p>
                                        </Col>
                                        <Col xs="auto" className="pe-0 m-0 fs-7 text-start">
                                            {value_b.time.slice(0, 5)}
                                        </Col>
                                        <Col></Col>
                                    </Row>
                                </div>;
                            } else {
                                return <div key={index_b} className="mt-3">
                                    <Row className='d-flex align-items-center fs-7'>
                                        <Col></Col>
                                        <Col xs="auto" className="pe-2">
                                            <img src={PTMale} style={{ height: '0.85rem' }} alt="Fotografia de perfil do Personal Trainer" className='border border-primary-blue rounded-circle' />
                                        </Col>
                                        <Col xs="auto" className="px-0 bold">
                                            <p className="mb-0">{value_b["text"]}</p>
                                        </Col>
                                        <Col xs="auto" className="ps-2 m-0 text-end">
                                            {value_b.time.slice(0, 5)}
                                        </Col>
                                        <Col></Col>
                                    </Row>
                                </div>;
                            }
                        });
                    }
                })}
            </Container>
            <Footer />
        </div>
    )
}

export default ClientStandardMessageHistory;