import Navbar from '../navbar/navbarLogin';
import Footer from '../footer/footerLogin';
import { Container, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import React, { useEffect } from 'react';

function PTLogin() {
    useEffect(() => {
        var content = document.getElementById('content');
        if (content.offsetHeight < window.innerHeight) {
            var margin = (window.innerHeight - content.offsetHeight) / 2;
            content.style.marginTop = margin + "px";
        }
    });

    let url = "";
    return (
        <div style={{ marginTop: 'calc(58px + 16px)', marginBottom: 'calc(58px + 16px)' }}>
            <HelmetProvider>
                <Helmet>
                    <title>Login</title>
                </Helmet>
            </HelmetProvider>
            <Navbar />
            <Container fluid className='px-3 text-center' id='content'>
                <div>
                    <h1>Bem-vindx</h1>
                    <h2 className="mb-5">à nova app Fitness Hut</h2>
                </div>
                <div className="vstack gap-3 col-9 mx-auto">
                    <Link to="/" className='text-decoration-none middle-gray'><i className="fa-solid fa-arrow-left dark-gray"></i>&nbsp;&nbsp;Voltar atrás</Link>
                    <InputGroup>
                        <span className="input-group-text"><i className="fa-solid fa-envelope"></i></span>
                        <input type="email" className="form-control" placeholder="E-mail" aria-label="E-mail" aria-describedby="login-email" />
                    </InputGroup>
                    <div>
                        <InputGroup className="mb-1">
                            <span className="input-group-text"><i className="fa-solid fa-key"></i></span>
                            <input type="password" className="form-control" placeholder="Palavra-passe" aria-label="Palavra-passe" aria-describedby="login-password" />
                        </InputGroup>
                        <div className="text-start">
                            <small className="form-text"><a href={url} className="middle-gray">Esqueceste-te da tua palavra-passe?</a></small>
                        </div>
                    </div>
                    <div className="hstack mx-auto">
                        <Link to="/pt/home" type="button" className="btn primary-blue-background white">Iniciar sessão</Link>
                        <div className="col-auto gx-0">&nbsp;</div>
                        <Link to="/pt/register" type="button" className="btn border off-white-background middle-gray">Registar</Link>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default PTLogin;