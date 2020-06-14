import React from 'react';
import Button from 'react-bootstrap/Button'

function App(props) {
  return (
    <Button>
      {props.icon}
    </Button>
  );
}

export default App;
