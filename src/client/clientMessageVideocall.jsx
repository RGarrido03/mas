import Navbar from '../navbar/navbarVideocall';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import PTMale from '../img/pt-male.png';

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
            <Navbar actor="client" />
            <Container fluid>
                <img src={PTMale} alt="Video feed" className='rounded-4' style={{height:'calc(100vh - 58px - 114px)', width:'100%', objectFit:'cover'}}/>
            </Container>
            <Card className="dark-gray-background m-3 rounded-4 text-start fixed-bottom">
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
                            <div className="bg-danger rounded-circle d-flex align-items-center justify-content-center clickable" style={{ width: '3rem', height: '3rem' }} onClick={() => navigate(-1)}>
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