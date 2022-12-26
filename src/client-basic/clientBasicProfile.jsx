import Navbar from '../navbar/navbarBack';
import { Container, InputGroup, Stack, Button, Image, Row, Col } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ProfilePictureClientBasic from '../img/client.jpeg';
import Data from '../api/client/profile.json';

function ClientBasicProfile() {
    return (
        <div style={{ minHeight: '100vh', paddingTop: '58px' }}>
            <HelmetProvider>
                <Helmet>
                    <title>Editar perfil</title>
                </Helmet>
            </HelmetProvider>
            <Navbar text="Editar perfil" />
            <Container fluid>
                <p className='mb-2 mt-3 bold fs-5'>Fotografia de perfil</p>
                <Row className='d-flex align-items-center'>
                    <Col xs={5} style={{position:'relative'}}>
                        <Image roundedCircle="true" src={ProfilePictureClientBasic} className='border border-primary-blue w-100' alt='Current profile pic for the client' />
                        <Button variant="primary" className='primary-blue-background' style={{position:'absolute', right:'12px', bottom:0}}><i className='fa-solid fa-pen-to-square white'></i></Button>
                    </Col>
                    <Col>
                        <p className='fw-light fs-7 m-0'>Utiliza uma imagem do tipo PNG, JPG ou WEBM, até 5MB.</p>
                    </Col>
                </Row>
                <p className='mb-2 mt-3 bold fs-5'>Informações pessoais</p>
                <Stack direction='vertical' gap={3} className="mb-3">
                    <InputGroup>
                        <span className="input-group-text"><i className="fa-solid fa-user"></i></span>
                        <input type="text" className="form-control" placeholder={Data.name} aria-label="Nome" />
                    </InputGroup>
                    <InputGroup>
                        <span className="input-group-text"><i className="fa-solid fa-calendar"></i></span>
                        <input type="date" className="form-control" aria-label="Data de nascimento" />
                    </InputGroup>
                    <InputGroup className="mb-1">
                        <span className="input-group-text"><i className="fa-solid fa-envelope"></i></span>
                        <input type="text" className="form-control" placeholder={Data.email} aria-label="Nome" />
                    </InputGroup>
                </Stack>
                <p className='mb-2 mt-3 bold fs-5'>Palavra-passe</p>
                <Stack direction='vertical' gap={3} className="mb-3">
                    <InputGroup>
                        <span className="input-group-text"><i className="fa-solid fa-key"></i></span>
                        <input type="password" className="form-control" placeholder='Antiga palavra-passe' aria-label="Antiga palavra-passe" />
                    </InputGroup>
                    <InputGroup>
                        <span className="input-group-text"><i className="fa-solid fa-key"></i></span>
                        <input type="password" className="form-control" placeholder='Nova palavra-passe' aria-label="Nova palavra-passe" />
                    </InputGroup>
                    <InputGroup className="mb-1">
                        <span className="input-group-text"><i className="fa-solid fa-key"></i></span>
                        <input type="password" className="form-control" placeholder='Confirmar a nova palavra-passe' aria-label="Confirmar a nova palavra-passe" />
                    </InputGroup>
                </Stack>
                <div className="text-center">
                    <Button className='btn primary-blue-background mx-auto'><i className='fa-solid fa-save white'></i>&nbsp;&nbsp;Guardar alterações</Button>
                </div>
            </Container>
        </div>
    )
}

export default ClientBasicProfile;