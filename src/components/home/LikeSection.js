import React, { useState } from 'react';

import LikeIcon from './LikeIcon';
import Likes from './Likes';

export default (props) => {
  const { postId, likes, userId } = props;
  const [isLiked, toggleLikeStatus] = useState(likes.includes(userId));
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
