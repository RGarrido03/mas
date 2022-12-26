import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function FooterClientBasic(props) {
  return (
    <div className="py-3 border-top off-white-background fixed-bottom">
      <Container fluid className="px-4">
        <Row>
          <Col xs="auto" className="p-0 ps-3">
            <Link to="/client-basic/home"><i className={((props.active === "home") ? "fa-solid dark-gray" : "fa-regular") + " fa-lg fa-home"}></i></Link>
          </Col>
          <Col></Col>

          <Col xs="auto" className="p-0">
            <Link to="/client-basic/exercise"><i className={((props.active === "exercise") ? "fa-solid dark-gray" : "fa-regular") + " fa-lg fa-dumbbell"}></i></Link>
          </Col>
          <Col></Col>
          
          <Col xs="auto" className="p-0 pe-3">
            <Link to="/client-basic/measures"><i className={((props.active === "measures") ? "fa-solid dark-gray" : "fa-regular") + " fa-lg fa-ruler"}></i></Link>
          </Col>
        </Row>
      </Container >
    </div>
  );
}

export default FooterClientBasic;