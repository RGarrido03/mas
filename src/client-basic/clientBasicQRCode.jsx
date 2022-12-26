import Navbar from '../navbar/navbarBack';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import QRCode from '../img/qr-code.svg';
import Data from '../api/client/qrcode.json';

function ClientBasicQRCode() {
    return (
        <div style={{ marginTop: 'calc(58px + 16px)' }}>
            <HelmetProvider>
                <Helmet>
                    <title>Código QR</title>
                </Helmet>
            </HelmetProvider>
            <Navbar text="Código QR" />
            <Container fluid className='text-center' id='qrcodecontainer'>
                <Row>
                    <Col></Col>
                    <Col xs={8} sm={6} md={4} lg={3} xl={2}>
                        <Card className="off-white-background mb-1">
                            <Card.Body>
                                <Card.Text>
                                    <img src={QRCode} className='w-100' alt='Código QR' />
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <span className="bold">{Data.name}</span><br />
                        ID: {Data.id}
                    </Col>
                    <Col></Col>
                </Row>
                <p className='m-0 mt-4 semibold'>Apresenta este código QR à entrada de um ginásio Fitness Hut.</p>
                <p className='m-0 fw-light fs-7'>Este identifica-te como um Cliente com Plano Basic e permite-te aceder aos mais variados serviços disponíveis, limitados pelo teu plano.</p>
            </Container>
        </div>
    )
}

export default ClientBasicQRCode;