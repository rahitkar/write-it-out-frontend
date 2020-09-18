import React from 'react';

import Input from './Input';

export default (props) => {
  return (
    <div className='comment-section'>
      <img alt='user-img' src={props.url} />
      <Input className='comment' />
    </div>
  );
};
