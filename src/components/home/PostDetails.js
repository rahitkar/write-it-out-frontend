import React from 'react';

export default (props) => {
  const { name, url } = props.user;
  return (
    <div className='post-details'>
      <img alt={name} src={url} />
      <div>
        <span className='name'>{name}</span>
        <span className='time-stamp'>{props.timeStamp}</span>
      </div>
    </div>
  );
};
