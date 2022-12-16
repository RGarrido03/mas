import Navbar from './navbar/navbarLogin';
import Footer from './footer/footerLogin';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ActorChoosing() {
    return (
        <div style={{ height: '100vh' }} className="d-flex align-items-center">
            <Navbar />
            <Container fluid className='px-3 text-center'>
                <div id="title">
                    <h1>Bem-vindx</h1>
                    <h2 className="mb-5">à nova app Fitness Hut</h2>
                </div>
                <div className="vstack gap-3 col-9 mx-auto" id="actorChoosing">
                    <p className="mb-0">Escolha uma das seguintes opções:</p>
                    <Link to="/client/login" className="btn primary-blue-background white">Cliente</Link>
                    <Link to="/pt/login" className="btn primary-blue-background white">Personal trainer</Link>
                </div>
            </Container>
            <Footer actor="client" />
        </div>
    )
}

export default ActorChoosing;