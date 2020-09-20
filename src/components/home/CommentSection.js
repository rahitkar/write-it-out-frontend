import React from 'react';

import InputBox from './InputBox';

export default (props) => {
  return (
    <div className=''>
      <InputBox
        action='comment'
        class='comment-section'
        placeHolder='write your comment...'
      />
    </div>
  );
};
