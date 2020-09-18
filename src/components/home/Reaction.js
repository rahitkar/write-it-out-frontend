import React from 'react';

import LikeIcon from './LikeIcon'
import Likes from './Likes';
import Comments from './Comments';

export default (props) => {
  return (
    <div className='reaction'>
      <LikeIcon />
      <Likes likes={props.likes} />
      <Comments comments={props.comments} />
    </div>
  );
};
