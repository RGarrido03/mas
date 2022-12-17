import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const ModalGeneric = (props) => {
  const { actor, show, handleClose } = props

  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          {(() => {
            if (actor === "client") {
              return (
                <Modal.Title className='bold'>Olá, Jorge!</Modal.Title>
              )
            } else if (actor === "pt") {
              return (
                <Modal.Title className='bold'>Olá, Rui!</Modal.Title>
              )
            }
          })()}
        </Modal.Header>
        <Modal.Body>
          <HelmetProvider>
            <Helmet>
              <meta name="theme-color" content="#003366" />
            </Helmet>
          </HelmetProvider>
          {(actor === "client") ?
            (<p className="clickable"><i className="fa-solid fa-credit-card"></i>&nbsp;&nbsp;Gerir subscrição</p>) :
            (<p className="clickable"><i className="fa-solid fa-user"></i>&nbsp;&nbsp;Gerir inscrição na Fitness Hut</p>)
          }
          <p className="clickable"><i className="fa-solid fa-gear"></i>&nbsp;&nbsp;Definições</p>
          <p className="clickable mb-0"><i className="fa-solid fa-circle-info"></i>&nbsp;&nbsp;Acerca da app</p>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/" className='me-auto text-danger text-decoration-none clickable fw-bold'>
            <i className='fa-solid fa-arrow-right-from-bracket text-danger'></i>
            &nbsp;Terminar sessão
          </Link>
        </Modal.Footer>
      </Modal>
    </div>
  )
}


export default ModalGeneric;