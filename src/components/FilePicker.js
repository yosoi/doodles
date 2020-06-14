import Form from 'react-bootstrap/Form'
import React from 'react';

function FilePicker(props) {
  return (
    <Form>
      <Form.File
        id="custom-file"
        label="Choose an image"
        custom
      />
    </Form>
  );
}

export default FilePicker;
