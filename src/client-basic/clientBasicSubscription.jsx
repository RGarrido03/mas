import Navbar from '../navbar/navbarBack';
import { Container, Card, Button } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Data from '../api/client/subscription_basic.json';

function ClientBasicSubscription() {
    return (
        <div style={{ marginTop: 'calc(58px + 16px)' }}>
            <HelmetProvider>
                <Helmet>
                    <title>Gerir subscrição</title>
                </Helmet>
            </HelmetProvider>
            <Navbar text="Gerir subscrição" />
            <Container fluid>
                <Card className="off-white-background mt-3 text-start">
                    <Card.Body className='text-center'>
                        <div className="text-start">
                            <Card.Title className='mb-0 bold'>Plano atual</Card.Title>
                            <Card.Text className='mt-2 mb-2'>
                                <span className="bold">{Data.plan.name}</span><br />
                                <span>{Data.plan.description.split('\n').map((value, index) => { return <span key={index}>{value}<br /></span> })}</span>
                            </Card.Text>
                            <Card.Text className='mt-0 semibold'>{Data.plan.price}€/mês</Card.Text>
                        </div>
                        <Button className='btn white mt-3 primary-blue-background'><i className='fa-regular fa-repeat white'></i>&nbsp;&nbsp;Trocar de plano</Button>
                    </Card.Body>
                </Card>
                <Card className="off-white-background mt-3 text-start">
                    <Card.Body className='text-center'>
                        <div className="text-start">
                            <Card.Title className='mb-0 bold'>Método de pagamento</Card.Title>
                            <Card.Text className='mt-2'>
                                <i className={Data.payment.icon}></i>&nbsp;&nbsp;{Data.payment.name}
                            </Card.Text>
                        </div>
                        <Button className='btn white mt-3 primary-blue-background'><i className='fa-regular fa-repeat white'></i>&nbsp;&nbsp;Trocar método</Button>
                    </Card.Body>
                </Card>
                <Card className="off-white-background mt-3 text-start">
                    <Card.Body className='text-center'>
                        <div className="text-start">
                            <Card.Title className='mb-0 bold'>Gestão da subscrição</Card.Title>
                            <Card.Text className='mt-2'>
                                Subscrição {Data.info.type}. A próxima renovação ocorrerá a {Data.info.date} ({Data.info.price}€).
                            </Card.Text>
                        </div>
                        <Button className='btn btn-danger white mt-3'><i className='fa-regular fa-xmark white'></i>&nbsp;&nbsp;Cancelar subscrição</Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default ClientBasicSubscription;