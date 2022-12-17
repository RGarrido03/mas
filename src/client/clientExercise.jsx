import Navbar from '../navbar/navbarHome';
import Footer from '../footer/footerClient';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function clientExercise() {
    return (
        <div style={{ minHeight: 'calc(100vh - 58px - 57px)', paddingTop: '58px', paddingBottom: '57px' }}>
            <Navbar actor="client" text="Exercício" />
            <Container fluid>
                {/* Workout insight */}
                <Card className="mt-3 border-0">
                    <Card.Body className='p-0'>
                        <Card.Text>
                            <Row className='d-flex align-items-center'>
                                <Col>
                                    <p className='mb-0'>Metade já está!</p>
                                    <p className='mb-0 bold'>Continua o bom trabalho.</p>
                                </Col>
                                <Col xs="auto">
                                    <svg style={{height:"5em", width:"5em"}} viewBox="0 0 80 80">
                                        <g>
                                            <g>
                                                <circle cx="40" cy="40" r="36" fill="#F8F8F8" stroke="#CCCCCC" stroke-width="3" />
                                                <path d="M40 4.6322 a 35.3678 35.3678 0 0 1 0 70.7356 a 35.3678 35.3678 0 0 1 0 -70.7356"
                                                    className="circleStroke" style={{strokeDasharray: "133.3333px 222.2222px"}}
                                                />
                                            </g>
                                            <text x="28" y="38" className="bold">3/5</text>
                                            <text x="25" y="53">dias</text>
                                        </g>
                                    </svg>
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>

                {/* Weekly plan */}
                <Card className="off-white-background mt-3">
                    <Card.Body>
                        <Card.Title className='bold'>Plano semanal</Card.Title>
                        <Card.Text>
                            <p className='mt-3 mb-0'><span className="fw-semibold text-success">1º dia</span>&nbsp; Peito, ombros e tríceps</p>
                            <p className='mt-3 mb-0'><span className="fw-semibold text-success">2º dia</span>&nbsp; Pernas, glúteos e abdominais</p>
                            <p className='mt-3 mb-0'><span className="fw-semibold text-success">3º dia</span>&nbsp; Costas e bíceps</p>
                            <Row>
                                <Col>
                                    <p className='mt-3 mb-0'><span className="fw-semibold dark-gray">4º dia</span>&nbsp; Treino HIIT<br />90 minutos | 710kcal | Difícil</p>
                                </Col>
                                <Col xs="auto">
                                    <Link to="/client/exercise/videocall"><i className='fa-solid fa-play dark-gray mt-3 mb-0'></i></Link>
                                </Col>
                            </Row>
                            <p className='mt-3 mb-0'><span className="fw-semibold">5º dia</span>&nbsp; Abdominais</p>
                        </Card.Text>
                    </Card.Body>
                </Card>

                {/* Extra classes */}
                <Link to="/client/exercise/extraclasses" className='text-decoration-none'>
                    <Card className="off-white-background mt-3">
                        <Card.Body className="row d-flex align-items-center">
                            <Col>
                                <Card.Text><span className="semibold">Participar em aulas</span> extra</Card.Text>
                            </Col>
                            <Col xs="auto">
                                <i className="fa-regular fa-chevron-right"></i>
                            </Col>
                        </Card.Body>
                    </Card>
                </Link>

                {/* Suggest changes to actual plan */}
                <Link to="/client/exercise/changeplan" className='text-decoration-none'>
                    <Card className="off-white-background mt-3">
                        <Card.Body className="row d-flex align-items-center">
                            <Col>
                                <Card.Text><span className="semibold">Sugerir alterações</span> ao plano atual</Card.Text>
                            </Col>
                            <Col xs="auto">
                                <i className="fa-regular fa-chevron-right"></i>
                            </Col>
                        </Card.Body>
                    </Card>
                </Link>
            </Container>
            <Footer active="exercise" />
        </div>
    )
}

export default clientExercise;