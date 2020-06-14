import Button from 'react-bootstrap/Button'
import React from 'react';

function App(props) {
  return (
    <Button
      className="rounded-circle"
      size="lg"
      variant="outline-primary"
    >
      {props.icon}
    </Button>
  );
}

export default App;
