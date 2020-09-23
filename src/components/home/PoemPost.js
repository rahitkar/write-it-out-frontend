import React from 'react';

import PostDetails from './PostDetails';
import Poem from './Poem';
import LikeSection from './LikeSection';
import CommentSection from './CommentSection';
import './home.css';
import './reaction.css';

export default (props) => {
  const { id, userId, title, poem, likes, comments } = props.poemData;

  return (
    <div className='poem-post'>
      <PostDetails userId={userId} />
      <Poem title={title} poem={poem} />
      <LikeSection postId={id} userId={userId} likes={likes} />
      <CommentSection postId={id} comments={comments} />
    </div>
  );
};
