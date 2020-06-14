import ButtonContainer from './buttons/ButtonContainer.js'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Gallery from './Gallery.js'
import Heading from './Heading.js'
import React from 'react';
import Row from 'react-bootstrap/Row'
import UploadModal from './UploadModal.js'

function App() {
  const [modalShow, setModalShow] = React.useState(false);
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
      <ButtonContainer
        onCamera={() => console.log("say cheese")}
        onUpload={() => setModalShow(true)}
      />
      <UploadModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

export default App;
