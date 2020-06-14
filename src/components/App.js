import ButtonContainer from './buttons/ButtonContainer.js'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Gallery from './Gallery.js'
import Heading from './Heading.js'
import React from 'react';
import Row from 'react-bootstrap/Row'

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Heading />
          </Col>
        </Row>
        <Row>
          <Col>
            <Gallery />
          </Col>
        </Row>
      </Container>
      <ButtonContainer />
    </div>
  );
}

export default App;
