import Navbar from '../navbar/navbarLogin';
import Footer from '../footer/footerLogin';
import { Container, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import React, { useEffect } from 'react';

function ClientRegister1() {
    useEffect(() => {
        var content = document.getElementById('content');
        if (content.offsetHeight < window.innerHeight) {
            var margin = (window.innerHeight - content.offsetHeight) / 2;
            content.style.marginTop = margin + "px";
        }
    });

    return (
        <div style={{ marginTop: 'calc(58px + 16px)', marginBottom: 'calc(58px + 16px)' }}>
            <HelmetProvider>
                <Helmet>
                    <title>Registo</title>
                </Helmet>
            </HelmetProvider>
            <Navbar />
            <Container fluid className='px-3 text-center' id='content'>
                <div>
                    <h1>Registo</h1>
                    <h2 className="mb-5">Personal Trainer</h2>
                </div>
                <div className="vstack gap-3 col-9 mx-auto">
                    <Link to="/pt/login" className='text-decoration-none middle-gray'><i className="fa-solid fa-arrow-left dark-gray"></i>&nbsp;&nbsp;Voltar atrás</Link>
                    <InputGroup>
                        <span className="input-group-text"><i className="fa-solid fa-key"></i></span>
                        <input type="text" className="form-control" placeholder="Código de validação" aria-label="Código de validação" />
                    </InputGroup>
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
                        <Link to="/pt/home" type="button" className="btn primary-blue-background white">Finalizar registo</Link>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default ClientRegister1;