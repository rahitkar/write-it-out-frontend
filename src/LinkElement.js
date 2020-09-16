import React from 'react';
import { NavLink } from 'react-router-dom';

export default (props) => {
  return (
    <NavLink
      activeClassName='indicate'
      className='option'
      to={`/${props.name}`}
    >
      <img alt='option' src={require(`./${props.src}.svg`)} />
      <div>{props.name}</div>
    </NavLink>
  );
};
