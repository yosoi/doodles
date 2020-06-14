import Card from 'react-bootstrap/Card'
import React from 'react';

function Doodle(props) {
  return (
    <Card>
      <Card.Img src={props.url} rounded />
    </Card>
  );
}

export default Doodle;
