import Navbar from '../navbar/navbarHome';
import Footer from '../footer/footerPT';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PTFemale from '../img/pt-female.png';
import Data from '../api/pt/users.json';

function PTMessages() {
    return (
        <div style={{ minHeight: 'calc(100vh - 58px - 57px)', paddingTop: '58px', paddingBottom: '57px' }}>
            <HelmetProvider>
                <Helmet>
                    <title>Clientes</title>
                </Helmet>
            </HelmetProvider>
            <Navbar actor="pt" text="Clientes" />
            <Container fluid>
                {Data.map((value) => {
                    return <Link to="/pt/users/details" className='text-decoration-none'>
                        <Card className="hover off-white-background mt-3" key={value.name}>
                            <Card.Body>
                                <Row className="d-flex align-items-center">
                                    <Col xs="auto">
                                        <img src={PTFemale} style={{ height: '3rem' }} alt="Fotografia de perfil do Personal Trainer" className='border border-primary-blue rounded-circle' />
                                    </Col>
                                    <Col className="ps-0">
                                        <Card.Text>
                                            <span className='bold mb-0'>{value.name}</span>
                                            <br />
                                            {value.text}
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