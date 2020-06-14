import Button from 'react-bootstrap/Button'
import FilePicker from './FilePicker.js'
import Modal from 'react-bootstrap/Modal'
import React from 'react';

function UploadModal(props) {
  return (
    <Modal
      {...props}
      centered
      size="sm"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Upload
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FilePicker />
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={props.onHide}
          variant="outline-secondary"
        >
          Close
        </Button>
        <Button
          onClick={() => {
            props.onHide()
          }}
        >
          Upload
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UploadModal;
