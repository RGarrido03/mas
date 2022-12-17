import React from 'react';
import { Container, Navbar, Stack } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function NavbarHome(props) {
    const navigate = useNavigate();
    return (
        <Navbar className="fixed-top primary-blue-background">
            <Container fluid className="px-3">
                <Navbar.Brand className="m-0">
                    <Stack direction='horizontal' gap={3}>
                        <i className='fa-lg fa-solid fa-arrow-left white clickable' onClick={() => navigate(-1)}></i>
                        <p className='m-0 py-0 fw-bold fs-5 white'>{props.text}</p>
                    </Stack>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavbarHome;