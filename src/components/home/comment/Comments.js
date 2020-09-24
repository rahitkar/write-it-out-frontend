import React, { useState } from 'react';

import UsersWhoCommented from './UserWhoCommented';

export default (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleOnClick = () => {
    props.comments.length && setIsClicked((isClicked) => !isClicked);
  };

  let popup = '';
  if (isClicked) {
    popup = <UsersWhoCommented comments={props.comments} />;
  }

  return (
    <div className='comment-rapper'>
      <div className='comments' onClick={handleOnClick}>
        <span>{props.comments.length}</span>
        <span>comments</span>
      </div>
      <div className='comment-details'>{popup}</div>
    </div>
  );
};
