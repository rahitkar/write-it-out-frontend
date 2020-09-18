import React from 'react';

export default (props) => {
  const poem = props.poem
    .split('\n')
    .map((line, indx) => <div key={indx}>{line}</div>);
  return (
    <div className='poem'>
      <h2>{props.title}</h2>
      <div>{poem}</div>
    </div>
  );
};
