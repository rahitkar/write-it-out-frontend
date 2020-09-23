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

const filterPoems = (poemsData) =>
  categories.map((category) => {
    return poemsData.filter((poemData) => category === poemData.category);
  });

export default (props) => {
  const [components, setComponents] = useState([]);

  const getPoemsComponent = (poemsData) =>
    poemsData.map((filteredPoemsData) => (
      <PoemPosts
        loggedInUser={props.loggedInUser}
        poemsData={filteredPoemsData}
      />
    ));

  useEffect(() => {
    api.fetchPoemsData().then((poemsData) => {
      const filteredPoemsData = filterPoems(poemsData);
      setComponents(getPoemsComponent([poemsData, ...filteredPoemsData]));
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
