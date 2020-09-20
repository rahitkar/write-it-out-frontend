import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './container.css';

export default (props) => {
  const routes = props.paths.map((path, indx) => (
    <Route exact key={indx} path={`/${props.categoryOf}${path}`}>
      <div className={`${props.categories[indx]}-gallery`}>
        {props.components[indx]}
      </div>
    </Route>
  ));
  return <Switch>{routes}</Switch>;
};
