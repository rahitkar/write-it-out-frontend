import React from 'react';
import Input from '../home/Input';

export default (props) => (
  <div className='popup'>
    <Input
      onClick={props.onClick}
      placeHolder='add title...'
      class='title-popup'
      action='Publish'
    />
  </div>
);
