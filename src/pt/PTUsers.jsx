import Navbar from '../navbar/navbarHome';
import Footer from '../footer/footerPT';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PTFemale from '../img/pt-female.png';
import PTMale from '../img/pt-male.png';
import Data from '../api/pt/users.json';

function PTUsers() {
    return (
        <div style={{ minHeight: 'calc(100vh - 58px - 57px)', paddingTop: '58px', paddingBottom: '57px' }}>
            <HelmetProvider>
                <Helmet>
                    <title>Clientes</title>
                </Helmet>
            </HelmetProvider>
            <Navbar actor="pt" text="Clientes" />
            <Container fluid>
                <Link to="/pt/users/waiting" className='text-decoration-none'>
                    <Card className="hover off-white-background mt-3">
                        <Card.Body>
                            <Row className="d-flex align-items-center">
                                <Col xs="auto">
                                    <div style={{ height: '3rem', width: '3rem' }} className="d-flex align-items-center justify-content-center border border-primary-blue white-background rounded-circle">
                                        <i className="fa-solid fa-user-clock fa-lg primary-blue"></i>
                                    </div>
                                </Col>
                                <Col className="ps-0">
                                    <Card.Text>
                                        <span className='bold mb-0'>Pedidos de atribuição</span>
                                        <br />
                                        {Data.waiting.length === 1 && '1 cliente por atribuir.'}
                                        {Data.waiting.length === 0 && 'Sem clientes por atribuir.'}
                                        {Data.waiting.length > 1 && Data.waiting.length + ' clientes por atribuir.'}
                                    </Card.Text>
                                </Col>
                                <Col xs="auto">
                                    <i className="fa-regular fa-chevron-right"></i>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Link>
                {Data.assigned.map((value) => {
                    return <Link to="/pt/users/details" className='text-decoration-none'>
                        <Card className="hover off-white-background mt-3" key={value.name}>
                            <Card.Body>
                                <Row className="d-flex align-items-center">
                                    <Col xs="auto">
                                        <img src={value.gender === "female" ? PTFemale : PTMale} style={{ height: '3rem' }} alt="Fotografia de perfil do Personal Trainer" className='border border-primary-blue rounded-circle' />
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
            <Footer active="users" />
        </div>
    )
}

export default PTUsers;