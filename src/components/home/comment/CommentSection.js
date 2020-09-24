import React, { useState } from 'react';
import api from '../../../api';

import InputBox from '../InputBox';
import Comments from './Comments';

import '../reaction.css';

export default (props) => {
  const { postId, comments } = props;
  const [allComments, setComments] = useState(comments);

  const addComment = (comment) => {
    api.addComment(comment, postId).then(
      api.getComments(postId).then((comments) => {
        console.log(comments);
        setComments(comments);
      })
    );
  };

  return (
    <div>
      <Comments comments={allComments} />
      <InputBox
        action='comment'
        onClick={addComment}
        class='comment-section'
        placeHolder='write your comment...'
      />
    </div>
  );
};
