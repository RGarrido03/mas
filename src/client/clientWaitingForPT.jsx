import Navbar from '../navbar/navbarLogin';
import Footer from '../footer/footerLogin';
import { Container, InputGroup, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function ClientWaitingForPT() {
    return (
        <div style={{ height: 'calc(100vh - 58.64px)', paddingTop: '58.64px'}} className="d-flex align-items-center">
            <HelmetProvider>
                <Helmet>
                    <title>A aguardar um PT</title>
                </Helmet>
            </HelmetProvider>
            <Navbar />
            <Container fluid className='px-3 text-center'>
                <h1>
                    A aguardar um
                    <br />
                    Personal Trainer
                </h1>
                <h2>Fizemos um pedido interno a vários Personal Trainers, para que te possamos atribuir um.</h2>
                <h2 className="bold mb-5">Esta atribuição pode demorar algumas horas.</h2>
                <Link to="/client/home" type="button" className="btn primary-blue-background white">Seguinte</Link>
            </Container>
            <Footer />
        </div>
    );
}

export default ClientWaitingForPT;