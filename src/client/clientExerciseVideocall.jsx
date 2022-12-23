import Navbar from '../navbar/navbarVideocallExercise';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Client from '../img/client.jpeg';
import PTMale from '../img/pt-male.png';
import PTFemale from '../img/pt-female.png';

function ClientExerciseVideocall() {
    const navigate = useNavigate();
    return (
        <div style={{ minHeight: 'calc(100vh)', paddingTop: '58px', paddingBottom: '114px', backgroundColor: 'black' }}>
            <HelmetProvider>
                <Helmet>
                    <title>Videochamada</title>
                    <meta name="theme-color" content="#000000" />
                </Helmet>
            </HelmetProvider>
            <Navbar text="Peito e bíceps" />
            <Container fluid className='px-3'>
                <img src={PTMale} alt="Video feed" className='rounded-4 mb-3' style={{ width: '100%', height:'calc(100vh - 58px - 114px - (100vw / 3))', objectFit: 'cover' }} />
                <Row>
                    <Col xs={4} className='pe-2'>
                        <img src={PTFemale} alt="Video feed" className='rounded-4' style={{ width: '100%', height:'100%', objectFit: 'cover' }} />
                    </Col>
                    <Col xs={4} className='px-2'>
                        <img src={Client} alt="Video feed" className='rounded-4' style={{ width: '100%', height:'100%', objectFit: 'cover' }} />
                    </Col>
                    <Col xs={4} className='ps-2'>
                        <img src={PTFemale} alt="Video feed" className='rounded-4' style={{ width: '100%', height:'100%', objectFit: 'cover' }} />
                    </Col>
                </Row>
            </Container>
            <Card className="hover dark-gray-background m-3 rounded-4 text-start fixed-bottom">
                <Card.Body>
                    <Row>
                        <Col xs="auto" className="pe-0">
                            <div className="main-gray-background rounded-circle d-flex align-items-center justify-content-center" style={{ width: '3rem', height: '3rem' }}>
                                <i className='fa-regular fa-microphone white fa-lg'></i>
                            </div>
                        </Col>
                        <Col></Col>
                        <Col xs="auto" className="px-0">
                            <div className="main-gray-background rounded-circle d-flex align-items-center justify-content-center" style={{ width: '3rem', height: '3rem' }}>
                                <i className='fa-regular fa-video white fa-lg'></i>
                            </div>
                        </Col>
                        <Col></Col>
                        <Col xs="auto" className="px-0">
                            <div className="main-gray-background rounded-circle d-flex align-items-center justify-content-center" style={{ width: '3rem', height: '3rem' }}>
                                <i className='fa-regular fa-camera-rotate white fa-lg'></i>
                            </div>
                        </Col>
                        <Col></Col>
                        <Col xs="auto" className="ps-0">
                            <div className="bg-danger rounded-circle d-flex align-items-center justify-content-center" style={{ width: '3rem', height: '3rem' }} onClick={() => navigate(-1)}>
                                <i className='fa-solid fa-phone-hangup white fa-lg'></i>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ClientExerciseVideocall;