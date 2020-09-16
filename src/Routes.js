import React from 'react';
import { Route, Switch } from 'react-router-dom';

export default (props) => {
  const routes = props.names.map((name, indx) => (
    <Route path={`/${name}`}>{props.components[indx]}</Route>
  ));
  return <Switch>{routes}</Switch>;
};
