import Navbar from '../navbar/navbarLogin';
import Footer from '../footer/footerLogin';
import { Container, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function ClientBasicRegister1() {
    return (
        <div style={{ height: 'calc(100vh - 58.64px)', paddingTop: '58.64px'}} className="d-flex align-items-center">
            <HelmetProvider>
                <Helmet>
                    <title>Registo (1/4)</title>
                </Helmet>
            </HelmetProvider>
            <Navbar />
            <Container fluid className='px-3 text-center'>
                <div>
                    <h1>Registo</h1>
                    <h2 className="mb-5">Informações Pessoais</h2>
                </div>
                <div className="vstack gap-3 col-9 mx-auto">
                    <Link to="/client-basic/login" className='text-decoration-none middle-gray'><i className="fa-solid fa-arrow-left dark-gray"></i>&nbsp;&nbsp;Voltar atrás</Link>
                    <InputGroup>
                        <span className="input-group-text"><i className="fa-solid fa-user"></i></span>
                        <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" />
                    </InputGroup>
                    <InputGroup>
                        <span className="input-group-text"><i className="fa-solid fa-envelope"></i></span>
                        <input type="email" className="form-control" placeholder="E-mail" aria-label="E-mail" />
                    </InputGroup>
                    <InputGroup>
                        <span className="input-group-text"><i className="fa-solid fa-key"></i></span>
                        <input type="password" className="form-control" placeholder="Palavra-passe" aria-label="Palavra-passe"/>
                    </InputGroup>
                    <InputGroup>
                        <span className="input-group-text"><i className="fa-solid fa-key"></i></span>
                        <input type="password" className="form-control" placeholder="Confirmar palavra-passe" aria-label="Confirmar palavra-passe" />
                    </InputGroup>
                    <div className="mx-auto">
                        <Link to="/client-basic/register/2" type="button" className="btn primary-blue-background white">Próximo passo</Link>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default ClientBasicRegister1;