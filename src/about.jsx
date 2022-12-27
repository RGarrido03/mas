import Navbar from './navbar/navbarBack';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import React from 'react';
import packageInfo from '../package.json';
const { version, dependencies } = packageInfo;

function About() {
    return (
        <div style={{ marginTop: 'calc(58px + 16px)' }}>
            <HelmetProvider>
                <Helmet>
                    <title>Acerca da app</title>
                </Helmet>
            </HelmetProvider>
            <Navbar text="Acerca da app" />
            <Container fluid className='px-3'>
                <Card className="off-white-background mt-3">
                    <Card.Body>
                        <Card.Title className='mb-2 bold'>Informações sobre versões</Card.Title>
                        <Card.Text>
                            Fitness Hut App: {version}<br />
                            ReactJS: {React.version}<br />
                            React Bootstrap: {dependencies['react-bootstrap'].slice(1)}<br />
                            Bootstrap: {dependencies.bootstrap.slice(1)}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="hover clickable off-white-background mt-3">
                    <Card.Body>
                        <Row>
                            <Col>
                                <Card.Text>Política de privacidade</Card.Text>
                            </Col>
                            <Col xs="auto">
                                <i className="fa-regular fa-chevron-right"></i>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className="hover off-white-background mt-3">
                    <Card.Body>
                        <Row>
                            <Col>
                                <Card.Text>Política de cookies</Card.Text>
                            </Col>
                            <Col xs="auto">
                                <i className="fa-regular fa-chevron-right"></i>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card className="hover off-white-background mt-3">
                    <Card.Body>
                        <Row>
                            <Col>
                                <Card.Text>Termos e condições</Card.Text>
                            </Col>
                            <Col xs="auto">
                                <i className="fa-regular fa-chevron-right"></i>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default About;