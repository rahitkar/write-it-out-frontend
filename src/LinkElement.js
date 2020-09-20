import React from 'react';
import { NavLink } from 'react-router-dom';

export default (props) => {
  const { src, activeClass, className, categoryOf, path, category } = props;
  let img = '';
  if (src) {
    img = <img alt='option' src={src} />;
  }
  return (
    <NavLink
      exact
      activeClassName={activeClass}
      className={className}
      to={`/${categoryOf}${path}`}
    >
      {img}
      <div>{category}</div>
    </NavLink>
  );
};
