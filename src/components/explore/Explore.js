import React from 'react';
import Links from '../../Links';

import ExploreRoutes from './ExploreRoutes';

import categories from './categories';

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
      <ExploreRoutes />
    </div>
  );
};
