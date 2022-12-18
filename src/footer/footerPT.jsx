import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function FooterClient(props) {
  return (
    <div className="py-3 border-top off-white-background fixed-bottom">
      <Container fluid className="px-4">
        <Row>
          <Col xs="auto" className="p-0 ps-3">
            <Link to="/pt/home"><i className={((props.active === "home") ? "fa-solid dark-gray" : "fa-regular") + " fa-lg fa-home"}></i></Link>
          </Col>
          <Col></Col>

          <Col xs="auto" className="p-0">
          <Link to="/pt/classes"><i className={((props.active === "classes") ? "fa-solid dark-gray" : "fa-regular") + " fa-lg fa-dumbbell"}></i></Link>
          </Col>
          <Col></Col>

          <Col xs="auto" className="p-0">
          <Link to="/client/users"><i className={((props.active === "users") ? "fa-solid dark-gray" : "fa-regular") + " fa-lg fa-user"}></i></Link>
          </Col>
          <Col></Col>

          <Col xs="auto" className="p-0 pe-3">
          <Link to="/pt/messages"><i className={((props.active === "messages") ? "fa-solid dark-gray" : "fa-regular") + " fa-lg fa-message"}></i></Link>
          </Col>
        </Row>
      </Container >
    </div >
  );
}

export default FooterClient;