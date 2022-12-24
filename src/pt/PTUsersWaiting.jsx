import Navbar from '../navbar/navbarBack';
import { Container, Card, Row, Col, Stack } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PTFemale from '../img/pt-female.png';
import PTMale from '../img/pt-male.png';
import Data from '../api/pt/users.json';

function PTUsersWaiting() {
    return (
        <div style={{ minHeight: 'calc(100vh - 56px)', paddingTop: '56px' }}>
            <HelmetProvider>
                <Helmet>
                    <title>Clientes</title>
                </Helmet>
            </HelmetProvider>
            <Navbar text="Clientes" />
            <Container fluid>
                {Data.waiting.map((value) => {
                    return <Card className="off-white-background mt-3" key={value.name}>
                        <Card.Body>
                            <Row className="d-flex align-items-center">
                                <Col xs="auto">
                                    <img src={value.gender === "female" ? PTFemale : PTMale} style={{ height: '3rem' }} alt="Fotografia de perfil do Personal Trainer" className='border border-primary-blue rounded-circle' />
                                </Col>
                                <Col className="ps-0">
                                    <Card.Text>
                                        <span className='bold mb-0'>{value.name}</span>
                                        <br />
                                        {value.age} anos
                                    </Card.Text>
                                </Col>
                            </Row>
                            <p className='mb-0 mt-3'><span className="semibold">Dados</span> {value.height.toFixed(2)}m | {value.weight}kg</p>
                            <p className='my-0'><span className="semibold">Objetivo</span> {value.focus}</p>
                            <Stack direction="horizontal" gap={2} className="mt-3 d-flex justify-content-center">
                                <button className="btn btn-success">Aceitar</button>
                                <button className="btn btn-outline-danger">Recusar</button>
                            </Stack>
                        </Card.Body>
                    </Card>
                })}
            </Container>
        </div>
    )
}

export default PTUsersWaiting;