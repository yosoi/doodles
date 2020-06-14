import React from 'react';
import CameraIcon from '../icons/CameraIcon.js'
import RoundButton from './RoundButton.js'

function CameraButton(props) {
  return (
    <RoundButton
      {...props}
      icon={<CameraIcon />}
    />
  );
}

export default CameraButton;
