import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const ModalClient = (props) => {
    const { show, handleClose } = props


    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Olá, Jorge!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <p>Terminar sessão</p>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default ModalClient;