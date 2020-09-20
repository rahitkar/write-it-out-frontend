import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './container.css';

export default (props) => {
  const { categories, paths, components, categoryOf } = props;
  const routes = paths.map((path, indx) => (
    <Route exact key={indx} path={`/${categoryOf}${path}`}>
      <div className={`${categories[indx]}-gallery`}>{components[indx]}</div>
    </Route>
  ));
  return <Switch>{routes}</Switch>;
};
