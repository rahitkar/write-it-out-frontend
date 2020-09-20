import React from 'react';
import Input from '../home/InputBox';
import ClosePopup from './ClosePopup';

export default (props) => {
  return (
    <div className='popup'>
      <Input
        onClick={props.onClick}
        placeHolder='add title...'
        class='title-popup'
        action='Publish'
      />
      <ClosePopup onClick={props.closePopup} />
    </div>
  );
};
