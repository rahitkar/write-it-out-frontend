import React from 'react';
import { NavLink } from 'react-router-dom';

export default (props) => {
  let img = '';
  if (props.src) {
    img = <img alt='option' src={props.src} />;
  }
  return (
    <NavLink
      activeClassName={props.activeClass}
      className={props.class}
      to={`/${props.name}`}
    >
      {img}
      <div>{props.name}</div>
    </NavLink>
  );
};
