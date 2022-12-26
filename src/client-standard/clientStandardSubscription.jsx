import Navbar from '../navbar/navbarBack';
import { Container, Card, Button } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function ClientStandardSubscription() {
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
                                <span className="bold">Premium</span><br />
                                - Gestão de planos de treino<br />
                                - Medidas corporais<br />
                                - Planos de treino criados por um PT<br />
                                - Mensagens e videochamadas com um PT<br />
                                - Planos de nutrição criados por um PT<br />
                            </Card.Text>
                            <Card.Text className='mt-0 semibold'>24,99€/mês</Card.Text>
                        </div>
                        <Button className='btn white mt-3 primary-blue-background'><i className='fa-regular fa-repeat white'></i>&nbsp;&nbsp;Trocar de plano</Button>
                    </Card.Body>
                </Card>
                <Card className="off-white-background mt-3 text-start">
                    <Card.Body className='text-center'>
                        <div className="text-start">
                            <Card.Title className='mb-0 bold'>Método de pagamento</Card.Title>
                            <Card.Text className='mt-2'>
                                <i className='fa-brands fa-cc-visa'></i>&nbsp;&nbsp;Cartão de débito (acabado em 0595)
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
                                Subscrição mensal. A próxima renovação ocorrerá a 15 de janeiro (24,99€).
                            </Card.Text>
                        </div>
                        <Button className='btn btn-danger white mt-3'><i className='fa-regular fa-xmark white'></i>&nbsp;&nbsp;Cancelar subscrição</Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default ClientStandardSubscription;