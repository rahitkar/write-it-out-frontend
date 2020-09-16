import React from 'react';
import './container.css';
import LinkElement from './LinkElement';

export default (props) => {
  const links = props.names.map((name, indx) => (
    <LinkElement key={indx} id={indx} name={name} src={`${name}`} />
  ));
  return <div className='top-bar'>{links}</div>;
};
