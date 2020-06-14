import React from 'react';
import CameraButton from './CameraButton.js'
import UploadButton from './UploadButton.js'

function ButtonContainer() {
  return (
    <div>
      <UploadButton />
      <CameraButton />
    </div>
  );
}

export default ButtonContainer;
