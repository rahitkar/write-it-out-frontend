import React from 'react';

export default (props) => {
  return (
    <div className='comments'>
      <span>{props.comments.length}</span>
      <span>comments</span>
    </div>
  );
};
