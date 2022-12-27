import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Modal from '../modal/modalLogin';
import packageInfo from '../../package.json';
const { version } = packageInfo;

function FooterLogin() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="py-3 border-top off-white-background fixed-bottom">
      <Modal show={show} handleClose={handleClose} handleShow={handleShow}/>
      <Container fluid className="px-3">
        <p className="float-start mb-0">v{version}</p>
        <div className="float-end">
          <a className="me-3" href="https://github.com/RGarrido03/MAS"><i className="fa-lg fa-brands fa-github"></i></a>
          <span className="clickable" onClick={()=> handleShow()}><i className="fa-lg fa-regular fa-circle-question"></i></span>
        </div>
      </Container>
    </div>
  );
}

export default FooterLogin;