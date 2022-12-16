import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function FooterMessage() {
  return (
    <div className="py-3 border-top off-white-background fixed-bottom">
      <Container fluid className="px-3">
        <Row className='d-flex align-items-center'>
          <Col xs="auto" className="py-0 px-3">
            <i className="fa-lg fa-regular fa-paperclip clickable" id="homeButton"></i>
          </Col>

          <Col className="p-0">
            <input className='w-100 white-background border rounded p-2' placeholder='Escreve uma mensagem'></input>
          </Col>

          <Col xs="auto" className="py-0 px-3">
            <i className="fa-lg fa-solid fa-paper-plane-top dark-gray clickable" id="measuresButton"></i>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterMessage;