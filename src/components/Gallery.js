import CardColumns from 'react-bootstrap/CardColumns'
import Doodle from './Doodle.js'
import React, { useState } from 'react';

function Gallery() {
  const [urls, setUrls] = useState([]);
  return (
    <CardColumns>
      {urls.map(url => <Doodle url={url} />)}
    </CardColumns>
  );
}

export default Gallery;
