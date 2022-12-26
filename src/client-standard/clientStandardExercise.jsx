import Navbar from '../navbar/navbarHome';
import Footer from '../footer/footerClientStandard';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Data from '../api/client/exercise.json';

function ClientStandardExercise() {
    return (
        <div style={{ minHeight: 'calc(100vh - 58px - 57px)', paddingTop: '58px', paddingBottom: '57px' }}>
            <HelmetProvider>
                <Helmet>
                    <title>Exercício</title>
                </Helmet>
            </HelmetProvider>
            <Navbar actor="client-standard" text="Exercício" />
            <Container fluid>
                {/* Workout insight */}
                <Card className="mt-3 border-0">
                    <Card.Body className='p-0'>
                        <Card.Text as="div">
                            <Row className='d-flex align-items-center'>
                                <Col>
                                    <p className='mb-0'>Metade já está!</p>
                                    <p className='mb-0 bold'>Continua o bom trabalho.</p>
                                </Col>
                                <Col xs="auto">
                                    <svg style={{ height: "5em", width: "5em" }} viewBox="0 0 80 80">
                                        <g>
                                            <g>
                                                <circle cx="40" cy="40" r="36" fill="#F8F8F8" stroke="#CCCCCC" strokeWidth="3" />
                                                <path d="M40 4.6322 a 35.3678 35.3678 0 0 1 0 70.7356 a 35.3678 35.3678 0 0 1 0 -70.7356"
                                                    className="circleStroke" style={{ strokeDasharray: "133.3333px 222.2222px" }}
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
                        <Card.Text as="div">
                            {Data["done"].map((value, index) => {return <p key={index} className='mt-3 mb-0'><span className="fw-semibold text-success">{index+1}º dia</span>&nbsp; {value.focus}</p>})}
                            <Row>
                                <Col>
                                    <p key={1 + Data["done"].length} className='mt-3 mb-0'><span className="fw-semibold dark-gray">{Data["done"].length + 1}º dia</span>&nbsp; {Data["actual"].focus}<br />{Data["actual"].duration} minutos | {Data["actual"].calories}kcal | {Data["actual"].difficulty}</p>
                                </Col>
                                <Col xs="auto">
                                    <Link to="/client-standard/exercise/videocall"><i className={((Data["actual"].isOnline) ? 'fa-play' : 'fa-building') + ' fa-solid dark-gray mt-3 mb-0'}></i></Link>
                                </Col>
                            </Row>
                            {Data["next"].map((value, index) => {return <p key={index + 2 + Data["done"].length} className='mt-3 mb-0'><span className="fw-semibold">{index + 2 + Data["done"].length}º dia</span>&nbsp; {value.focus}</p>})}
                        </Card.Text>
                    </Card.Body>
                </Card>

                {/* Extra classes */}
                <Link to="/client-standard/exercise/extraclasses" className='text-decoration-none'>
                    <Card className="hover off-white-background mt-3">
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
                <Link to="/client-standard/exercise/changeplan" className='text-decoration-none'>
                    <Card className="hover off-white-background mt-3">
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

export default ClientStandardExercise;