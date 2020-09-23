import React, { useState } from 'react';

import UsersWhoLiked from './UserWhoLiked';

export default (props) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleOnClick = () => {
    props.likes.length && setIsClicked((isClicked) => !isClicked);
  };

  let popup = '';
  if (isClicked) {
    popup = <UsersWhoLiked likes={props.likes} />;
  }

  return (
    <div>
      <div className='likes' onClick={handleOnClick}>
        <span>{props.likes.length}</span>
        <span>likes</span>
      </div>
      <div className='likeDetails'>{popup}</div>
    </div>
  );
};
