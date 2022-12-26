import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const ModalGeneric = (props) => {
  const { actor, show, handleClose } = props

  console.log(actor);

  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          {(() => {
            if (actor === "client" || actor === "client-basic" || actor === "client-standard") {
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
          {(() => {
            if (actor === "client") {
              return (<Link to='/client/profile' className='text-decoration-none'><p><i className="fa-solid fa-user"></i>&nbsp;&nbsp;Editar perfil</p></Link>)
            } else if (actor === "client-basic") {
              return (<Link to='/client-basic/profile' className='text-decoration-none'><p><i className="fa-solid fa-user"></i>&nbsp;&nbsp;Editar perfil</p></Link>)
            } else if (actor === "client-standard") {
              return (<Link to='/client-standard/profile' className='text-decoration-none'><p><i className="fa-solid fa-user"></i>&nbsp;&nbsp;Editar perfil</p></Link>)
            } else if (actor === "pt") {
              return (<Link to='/pt/profile' className='text-decoration-none'><p><i className="fa-solid fa-user"></i>&nbsp;&nbsp;Editar perfil</p></Link>)
            }
          })()}
          {(() => {
            if (actor === "client") {
              return (<Link to='/client/subscription' className='text-decoration-none'><p><i className="fa-solid fa-credit-card"></i>&nbsp;&nbsp;Gerir subscrição</p></Link>)
            } else if (actor === "client-basic") {
              return (<Link to='/client-basic/subscription' className='text-decoration-none'><p><i className="fa-solid fa-credit-card"></i>&nbsp;&nbsp;Gerir subscrição</p></Link>)
            } else if (actor === "client-standard") {
              return (<Link to='/client-standard/subscription' className='text-decoration-none'><p><i className="fa-solid fa-credit-card"></i>&nbsp;&nbsp;Gerir subscrição</p></Link>)
            }
          })()}
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