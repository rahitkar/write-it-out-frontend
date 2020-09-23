import React from 'react';

import PoemPost from './PoemPost';

export default (props) => {
  const poems = props.poemsData.map((poemData) => (
    <PoemPost key={poemData.id} poemData={poemData} />
  ));
  return <div className='poem-feed'>{poems}</div>;
};
