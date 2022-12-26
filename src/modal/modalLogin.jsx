import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const ModalLogin = (props) => {
  const { show, handleClose } = props

  return (
    <div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header>
          <Modal.Title className='bold'>Ajuda & FAQs</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <HelmetProvider>
            <Helmet>
              <meta name="theme-color" content="#003366" />
            </Helmet>
          </HelmetProvider>
          <p className="mb-1 fw-bold">Porque é que preciso de escolher um ator?</p>
          <p className="mb-0">
            Uma vez que esta app não inclui um servidor de autenticação, torna-se necessária a escolha manual de um ator.
            <br />
            Num cenário real, esta página seria dispensável, uma vez que cada login se encontra associado a uma categoria específica, com devidas permissões de acesso.
          </p>
          <p className="mb-1 mt-3 fw-bold">Quais são as diferenças entre Clientes?</p>
          <p className="mb-0">
            Os sufixos "Basic", "Standard" e "Premium" indicam o plano do Cliente. O Premium contém todas as funcionalidades, ao passo que os outros dois apenas têm acesso a uma parte delas.
            Na secção "Escolha de um plano" - fase 2 do registo de clientes -, é possível consultar as características de cada plano.
          </p>
          <p className="mb-1 mt-3 fw-bold">Onde é que posso consultar o código fonte ou a documentação desta app?</p>
          <p className="mb-0">
            Todo o código e documentos relacionados a esta app encontram-se disponíveis no <span style={{whiteSpace: 'nowrap'}}><i className='fa-brands fa-github'></i> <a href='https://github.com/RGarrido03/mas' className='middle-gray'>GitHub</a></span>.
            Esta app é 100% open-source.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}


export default ModalLogin;