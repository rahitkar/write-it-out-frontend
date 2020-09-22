import React from 'react';

import PostDetails from './PostDetails';
import Poem from './Poem';
import Reaction from './Reaction';
import CommentSection from './CommentSection';

import './home.css';
import { UserContext } from '../../UserContext';

export default (props) => {
  const { userId, title, poem, likes, comments } = props.poemData;

  return (
    <div className='poem-post'>
      <PostDetails userId={userId} />
      <Poem title={title} poem={poem} />
      <UserContext.Consumer>
        {(userId) => (
          <div>
            <Reaction loggedInUser={userId} likes={likes} comments={comments} />
            <CommentSection loggedInUser={userId} />
          </div>
        )}
      </UserContext.Consumer>
    </div>
  );
};
