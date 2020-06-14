import CameraButton from './CameraButton.js'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import React from 'react';
import Row from 'react-bootstrap/Row'
import UploadButton from './UploadButton.js'

function ButtonContainer() {
  return (
    <Container
      className="text-center"
      style={{
        bottom: 0,
        position: "fixed",
        right: 0,
        width: "6rem"
      }}
    >
      <Row className="mb-3">
        <Col>
          <CameraButton />
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <UploadButton />
        </Col>
      </Row>
    </Container>
  );
}

export default ButtonContainer;
