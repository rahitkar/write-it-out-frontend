import React from 'react';
import UserDetails from './UserDetails';

export default (props) => {
  const userWhoLiked = props.likes.map((userId, indx) => (
    <UserDetails key={indx} className='user-who-liked' userId={userId} />
  ));
  return <div>{userWhoLiked}</div>;
};
