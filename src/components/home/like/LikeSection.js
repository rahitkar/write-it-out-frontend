import React, { useState, useContext } from 'react';

import UserContext from '../../../UserContext';

import LikeIcon from './LikeIcon';
import Likes from './Likes';

import '../reaction.css';

export default (props) => {
  const loggedInUser = useContext(UserContext);
  const { postId, likes } = props;

  const [isLiked, toggleLikeStatus] = useState(likes.includes(loggedInUser));
  const [usersWhoLiked, updateLikes] = useState(likes);

  const likePoem = (usersWhoLiked) => {
    toggleLikeStatus((likeStatus) => !likeStatus);
    updateLikes(usersWhoLiked);
  };

  return (
    <div className='reaction'>
      <LikeIcon
        postId={postId}
        onClick={likePoem}
        className={isLiked ? 'liked' : 'not-liked'}
      />
      <Likes likes={usersWhoLiked} postId={postId} />
    </div>
  );
};
