import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Links from '../../Links';
import Gallery from '../../Gallery';
import PoemPosts from '../home/PoemPosts';

import api from '../../api';

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

export default () => {
  const [components, setComponents] = useState([]);

  useEffect(() => {
    api.fetchPoemsData().then((poemsData) => {
      const filteredPoemsData = categories.map((category) => {
        return poemsData.filter((poemData) => category === poemData.category);
      });
      setComponents(
        [poemsData, ...filteredPoemsData].map((filteredPoemsData) => (
          <PoemPosts poemsData={filteredPoemsData} />
        ))
      );
    });
  }, []);

  return (
    <BrowserRouter>
      <Links
        paths={['', ...categories]}
        categories={['All', ...categories]}
        categoryOf='Explore/'
        activeClass='indicate-1'
        className='option-1'
        rapperClass='top-bar-1'
      />
      <Gallery
        paths={['', ...categories]}
        categories={['All', ...categories]}
        categoryOf='Explore/'
        components={components}
      />
    </BrowserRouter>
  );
};
