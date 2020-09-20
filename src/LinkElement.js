import React from 'react';
import { NavLink } from 'react-router-dom';

export default (props) => {
  let img = '';
  if (props.src) {
    img = <img alt='option' src={props.src} />;
  }
  return (
    <NavLink
      exact
      activeClassName={props.activeClass}
      className={props.class}
      to={`/${props.categoryOf}${props.path}`}
    >
      {img}
      <div>{props.category}</div>
    </NavLink>
  );
};
