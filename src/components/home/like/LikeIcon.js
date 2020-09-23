import React from 'react';
import api from '../../../api';

import '../reaction.css';

export default (props) => {
  const handleOnclick = () => {
    api.updateLike(props.postId).then(() => {
      api.getLikes(props.postId).then((likes) => {
        props.onClick(likes);
      });
    });
  };

  return (
    <div
      className={`${props.className} like-icon`}
      onClick={handleOnclick}
      alt='likeIcon'
    ></div>
  );
};
