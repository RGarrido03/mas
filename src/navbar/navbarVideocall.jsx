import React from 'react';
import { Container, Navbar, Stack } from 'react-bootstrap';
import ProfilePictureClient from '../img/client.jpeg';
import ProfilePicturePT from '../img/pt-male.png';

function NavbarBackMessage(props) {
    const imgStyle = { height: "2rem" };

    return (
        <Navbar className="fixed-top" style={{backgroundColor:'black'}}>
            <Container fluid className="px-3">
                <Navbar.Brand className="m-0">
                    <Stack direction='horizontal' gap={3}>
                        {props.actor === "client" && <img src={ProfilePicturePT} alt="Cliente" style={imgStyle} className="border rounded-circle clickable" />}
                        {props.actor === "client" && <p className='m-0 py-0 fw-bold fs-5 white'>Rui Pinheiro</p>}
                        {props.actor === "pt" && <img src={ProfilePictureClient} alt="PT" style={imgStyle} className="border rounded-circle clickable" />}
                        {props.actor === "pt" && <p className='m-0 py-0 fw-bold fs-5 white'>Jorge Guerreiro</p>}
                    </Stack>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavbarBackMessage;