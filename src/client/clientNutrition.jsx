import Navbar from '../navbar/navbarHome';
import Footer from '../footer/footerClient';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Data from '../api/client/nutrition_daily.json';

function ClientNutrition() {
    return (
        <div style={{ minHeight: 'calc(100vh - 58px - 57px)', paddingTop: '58px', paddingBottom: '57px' }}>
            <HelmetProvider>
                <Helmet>
                    <title>Nutrição</title>
                </Helmet>
            </HelmetProvider>
            <Navbar actor="client" text="Nutrição" />
            <Container fluid>
                {/* Nutrition insight */}
                <Card className="mt-3 border-0">
                    <Card.Body className='p-0'>
                        <Card.Text as="div">
                            <Row className='d-flex align-items-center'>
                                <Col>
                                    <p className='mb-0'>O objetivo de hoje são 2000 kcal.</p>
                                    <p className='mb-0 bold'>Continua o bom trabalho.</p>
                                </Col>
                                <Col xs="auto">
                                    <svg style={{ height: "5em", width: "5em" }} viewBox="0 0 80 80">
                                        <g>
                                            <g>
                                                <circle cx="40" cy="40" r="36" fill="#F8F8F8" stroke="#CCCCCC" strokeWidth="3" />
                                                <path d="M40 4.6322 a 35.3678 35.3678 0 0 1 0 70.7356 a 35.3678 35.3678 0 0 1 0 -70.7356"
                                                    className="circleStroke" style={{ strokeDasharray: "80px 222.2222px" }}
                                                />
                                            </g>
                                            <text x="26" y="38" className="bold">600</text>
                                            <text x="25" y="53">kcal</text>
                                        </g>
                                    </svg>
                                </Col>
                            </Row>
                        </Card.Text>
                    </Card.Body>
                </Card>

                {/* Daily plan */}
                <Card className="off-white-background mt-3">
                    <Card.Body>
                        <Card.Title className='bold'>Plano diário</Card.Title>
                        <Card.Text as="div">
                            {Data["done"].map((value, index) => {
                                return <p key={index} className='mt-3 mb-0 fs-7'>
                                    <span className="fw-semibold text-success">
                                        <i className={'fa-regular fa-' + value.icon + ' text-success'} />
                                        &nbsp;
                                        {value.type}
                                    </span>
                                    &nbsp; {value.name} ({value.calories} kcal)
                                </p>
                            })}

                            <p key={1 + Data["done"].length} className='mt-3 mb-0'>
                                <span className="fw-semibold dark-gray">
                                    <i className={'fa-regular fa-' + Data["actual"].icon + ' dark-gray'} />
                                    &nbsp;
                                    {Data["actual"].type}
                                </span>
                                &nbsp;&nbsp;
                                {Data["actual"].name}
                                <br />
                                {Data["actual"].calories} kcal | {Data["actual"].protein}g de proteína | {Data["actual"].fat}g de gordura
                            </p>

                            {Data["next"].map((value, index) => {
                                return <p key={index + 2 + Data["done"].length} className='mt-3 mb-0 fs-7'>
                                    <span className="fw-semibold">
                                        <i className={'fa-regular fa-' + value.icon} />
                                        &nbsp;
                                        {value.type}
                                    </span>
                                    &nbsp; {value.name} ({value.calories} kcal)
                                </p>
                            })}
                        </Card.Text>
                    </Card.Body>
                </Card>

                {/* Suggest changes to actual plan */}
                <Link to="/client/nutrition/changeplan" className='text-decoration-none'>
                    <Card className="hover off-white-background mt-3">
                        <Card.Body className="row d-flex align-items-center">
                            <Col>
                                <Card.Text><span className="semibold">Ver e editar</span> o plano semanal</Card.Text>
                            </Col>
                            <Col xs="auto">
                                <i className="fa-regular fa-chevron-right"></i>
                            </Col>
                        </Card.Body>
                    </Card>
                </Link>
            </Container>
            <Footer active="nutrition" />
        </div>
    )
}

export default ClientNutrition;