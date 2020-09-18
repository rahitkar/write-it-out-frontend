import React from 'react';

import PostDetails from './PostDetails';
import Poem from './Poem';
import Reaction from './Reaction';
import CommentSection from './CommentSection';

import './home.css';

export default (props) => {
  const { user, title, poem, likes, comments } = props.poemData;
  return (
    <div className='poem-post'>
      <PostDetails user={user} />
      <Poem title={title} poem={poem} />
      <Reaction likes={likes} comments={comments} />
      <CommentSection url={user.url} />
    </div>
  );
};
