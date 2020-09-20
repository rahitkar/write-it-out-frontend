import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './container.css';

export default (props) => {
  const routes = props.names.map((name, indx) => (
    <Route key={indx} path={`/${props.categoryOf}${name}`}>
      <div className={`${name}-gallery`}>{props.components[indx]}</div>
    </Route>
  ));
  return <Switch>{routes}</Switch>;
};
