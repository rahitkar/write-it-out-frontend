import React from 'react';

import PostDetails from './PostDetails';
import Poem from './Poem';
import Reaction from './Reaction';
import CommentSection from './CommentSection';

import './home.css';

export default (props) => {
  const { user, timeStamp, title, poem, likes, comments } = props.poemData;
  console.log(poem);
  return (
    <div className='poem-post'>
      <PostDetails user={user} timeStamp={timeStamp} />
      <Poem title={title} poem={poem} />
      <Reaction likes={likes} comments={comments} />
      <CommentSection url={user.url} />
    </div>
  );
};
