import Navbar from '../navbar/navbarHome';
import Footer from '../footer/footerPT';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PTFemale from '../img/pt-female.png';
import Data from '../api/pt/messageList.json';

function PTMessages() {
    return (
        <div style={{ marginTop: 'calc(58px + 16px)', marginBottom: 'calc(57px + 16px)' }}>
            <HelmetProvider>
                <Helmet>
                    <title>Mensagens</title>
                </Helmet>
            </HelmetProvider>
            <Navbar actor="pt" text="Mensagens" />
            <Container fluid className='px-3'>
                {Data.map((value, index) => {
                    return <Link to="/pt/messages/history" key={index} className='text-decoration-none'>
                        <Card className="hover off-white-background mt-3" key={value.name}>
                            <Card.Body>
                                <Row className="d-flex align-items-center">
                                    <Col xs="auto">
                                        <img src={PTFemale} style={{ height: '3rem' }} alt="Fotografia de perfil do Personal Trainer" className='border border-primary-blue rounded-circle' />
                                    </Col>
                                    <Col className="ps-0">
                                        <Card.Text>
                                            {value.isOpen ? <span className='semibold mb-0'>{value.name}</span> : <span className='bold mb-0'>{value.name}&nbsp;&nbsp;<i className='fa-solid fa-circle-small fa-2xs text-danger'></i></span>}
                                            
                                            <br />
                                            {value.lastMessage}
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

export default PTMessages;