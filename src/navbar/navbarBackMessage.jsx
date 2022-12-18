import React from 'react';
import { Container, Navbar, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ProfilePictureClient from '../img/client.jpeg';
import ProfilePicturePT from '../img/pt-male.png';
import { Link } from 'react-router-dom';

function NavbarBackMessage(props) {
    const navigate = useNavigate();
    const imgStyle = { height: "2rem" };

    return (
        <Navbar className="fixed-top primary-blue-background">
            <Container fluid className="px-3">
                <Navbar.Brand className="m-0">
                    <Stack direction='horizontal' gap={3}>
                        <i className='fa-lg fa-solid fa-arrow-left white clickable' onClick={() => navigate(-1)}></i>
                        {props.actor === "client" && <img src={ProfilePicturePT} alt="Cliente" style={imgStyle} className="border rounded-circle clickable" />}
                        {props.actor === "client" && <p className='m-0 py-0 fw-bold fs-5 white'>Rui Pinheiro <i className='fa-solid fa-circle-small fa-2xs text-success'></i></p>}
                        {props.actor === "pt" && <img src={ProfilePictureClient} alt="PT" style={imgStyle} className="border rounded-circle clickable" />}
                        {props.actor === "pt" && <p className='m-0 py-0 fw-bold fs-5 white'>Jorge Guerreiro <i className='fa-solid fa-circle-small fa-2xs text-success'></i></p>}
                    </Stack>
                </Navbar.Brand>
                {props.actor === "client" && <Link to="/client/messages/videocall/request"><i className='fa-regular fa-video white fa-lg'></i></Link>}
                {props.actor === "pt" && <Link to="/pt/messages/videocall"><i className='fa-regular fa-video white fa-lg'></i></Link>}
            </Container>
        </Navbar>
    );
}

export default NavbarBackMessage;