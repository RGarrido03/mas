import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ModalLogin = (props) => {
  const { show, handleClose } = props

  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title className='bold'>Ajuda & FAQs</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-0">Funcionalidade em desenvolvimento.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}


export default ModalLogin;