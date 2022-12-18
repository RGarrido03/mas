import React from 'react';
import { Container, Navbar, Stack } from 'react-bootstrap';

function NavbarVideocallExercise(props) {
    const divStyle = { height: "2rem", width: "2rem" };

    return (
        <Navbar className="fixed-top" style={{backgroundColor:'black'}}>
            <Container fluid className="px-3">
                <Navbar.Brand className="m-0">
                    <Stack direction='horizontal' gap={3}>
                        <div style={divStyle} className="white-background border border-primary-blue rounded-circle d-flex align-items-center justify-content-center"><i className='fa-solid fa-xs fa-dumbbell primary-blue'></i></div>
                        <p className='m-0 py-0 fw-bold fs-5 white'>{props.text}</p>
                    </Stack>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavbarVideocallExercise;