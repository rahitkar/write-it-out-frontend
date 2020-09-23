import React from 'react';

import UserDetails from './UserDetails';
import Poem from './Poem';
import LikeSection from './like/LikeSection';
import CommentSection from './comment/CommentSection';
import './home.css';
import './reaction.css';

export default (props) => {
  const { id, userId, title, poem, likes, comments } = props.poemData;

  return (
    <div className='poem-post'>
      <UserDetails userId={userId} className='post-details' />
      <Poem title={title} poem={poem} />
      <LikeSection
        postId={id}
        loggedInUser={props.loggedInUser}
        likes={likes}
      />
      <CommentSection postId={id} comments={comments} />
    </div>
  );
};
