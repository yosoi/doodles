import React from 'react';
import UploadIcon from '../icons/UploadIcon.js'
import RoundButton from './RoundButton.js'

function UploadButton(props) {
  return (
    <RoundButton
      {...props}
      icon={<UploadIcon />}
    />
  );
}

export default UploadButton;
