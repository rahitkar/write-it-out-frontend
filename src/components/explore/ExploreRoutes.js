import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import PoemPosts from '../home/PoemPosts';

import api from '../../api';

import categories from './categories';

const filterPoems = (poemsData) =>
  categories.map((category) => {
    return poemsData.filter((poemData) => category === poemData.category);
  });

export default (props) => {
  const [components, setComponents] = useState([]);

  const getPoemsComponent = (poemsData) =>
    poemsData.map((filteredPoemsData) => (
      <PoemPosts poemsData={filteredPoemsData} />
    ));

  useEffect(() => {
    api.fetchPoemsData().then((poemsData) => {
      const filteredPoemsData = filterPoems(poemsData);
      setComponents(getPoemsComponent([poemsData, ...filteredPoemsData]));
    });
  }, []);

  const paths = ['', ...categories];
  const options = ['All', ...categories];

  const routes = paths.map((path, indx) => (
    <Route key={indx} exact path={`/Explore/${path}`}>
      <div className={`${options[indx]}-gallery`}>{components[indx]}</div>
    </Route>
  ));

  return <Switch>{routes}</Switch>;
};
