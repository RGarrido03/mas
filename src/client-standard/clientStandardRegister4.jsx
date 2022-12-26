import Navbar from '../navbar/navbarLogin';
import Footer from '../footer/footerLogin';
import { Container, InputGroup, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import React, { useEffect } from 'react';

function ClientStandardRegister4() {
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
                    <title>Registo (4/4)</title>
                </Helmet>
            </HelmetProvider>
            <Navbar />
            <Container fluid className='px-3 text-center' id='content'>
                <div>
                    <h1>Registo</h1>
                    <h2 className="mb-5">Diz-nos mais sobre ti</h2>
                </div>
                <div className="vstack gap-3 col-9 mx-auto">
                    <Link to="/client-standard/register/3" className='text-decoration-none middle-gray'><i className="fa-solid fa-arrow-left dark-gray"></i>&nbsp;&nbsp;Voltar atrás</Link>
                    <InputGroup>
                        <span className="input-group-text"><i className="fa-solid fa-ruler"></i></span>
                        <input type="number" className="form-control" placeholder="Altura (cm)" aria-label="Altura" />
                    </InputGroup>
                    <InputGroup>
                        <span className="input-group-text"><i className="fa-solid fa-weight-scale"></i></span>
                        <input type="number" className="form-control" placeholder="Peso (kg)" aria-label="Peso (kg)" />
                    </InputGroup>
                    <InputGroup>
                        <span className="input-group-text"><i className="fa-solid fa-key"></i></span>
                        <Form.Select className="middle-gray">
                            <option>Quero...</option>
                            <option value="1">Perder peso</option>
                            <option value="2">Aumentar a massa muscular</option>
                            <option value="3">Manter o meu peso</option>
                        </Form.Select>
                    </InputGroup>
                    <div className="mx-auto">
                        <Link to="/client-standard/waiting-for-pt" type="button" className="btn primary-blue-background white">Finalizar registo</Link>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default ClientStandardRegister4;