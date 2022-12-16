import React, { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function FooterGeneric(props) {
  return (
    <div className="py-3 border-top off-white-background fixed-bottom">
      <Container fluid className="px-4">
        <Row>
          <Col xs="auto" className="p-0 ps-3">
            <i className="fa-lg fa-solid fa-home dark-gray tabIcon clickable" id="homeButton"></i>
          </Col>
          <Col></Col>

          <Col xs="auto" className="p-0">
            <i className="fa-lg fa-regular fa-dumbbell tabIcon clickable" id="exerciseButton"></i>
          </Col>
          <Col></Col>

          {(() => {
            if (props.actor === "pt") {
              return (
                <Fragment>
                  <Col xs="auto" className="p-0">
                    <i className="fa-lg fa-regular fa-user tabIcon clickable" id="userButton"></i>
                  </Col>
                  <Col></Col>
                </Fragment>
              )
            }
          })()}

          <Col xs="auto" className="p-0">
            <i className="fa-lg fa-regular fa-message tabIcon clickable" id="messagesButton"></i>
          </Col>

          {(() => {
            if (props.actor === "client") {
              return (
                <Fragment>
                  <Col></Col>
                  <Col xs="auto" className="p-0">
                    <i className="fa-lg fa-regular fa-pot-food tabIcon clickable" id="nutritionButton"></i>
                  </Col>

                  <Col></Col>
                  <Col xs="auto" className="p-0 pe-3">
                    <i className="fa-lg fa-regular fa-ruler tabIcon clickable" id="measuresButton"></i>
                  </Col>
                </Fragment>
              )
            }
          })()}
        </Row>
      </Container >
    </div >
  );
}

export default FooterGeneric;