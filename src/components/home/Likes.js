import React from 'react';

export default (props) => {
  return (
    <div className='likes'>
      <span>{props.likes.length}</span>
      <span>likes</span>
    </div>
  );
};
