import React from 'react';
import UserDetails from '../UserDetails';

import '../reaction.css';

export default (props) => {
  const userWhoLiked = props.comments.map(({ comment, userId }, indx) => (
    <div key={indx} className='comment-reaction'>
      <UserDetails className='user-who-commented' userId={userId} />
      <p>{comment}</p>
    </div>
  ));
  return userWhoLiked;
};
