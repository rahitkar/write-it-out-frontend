import React from 'react';
import Links from '../../Links';

const categories = [
  'Inspiration',
  'Letter',
  'Life',
  'Love',
  'One-liner',
  'Philosophy',
  'Poetry',
  'Politics',
  'Short-story',
];

export default (props) => {
  return (
    <div className='Explore-gallery'>
      <Links
        paths={['', ...categories]}
        categories={['All', ...categories]}
        categoryOf='Explore/'
        activeClass='indicate-1'
        className='option-1'
        rapperClass='top-bar-1'
      />
    </div>
  );
};
