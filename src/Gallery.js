import React from 'react';
import Routes from './Routes';
import './container.css';

const Gallery = (props) => {
  return (
    <Routes names={props.names} components={props.components} />
  );
};

Gallery.defaultProps = {
  class: '',
};

export default Gallery;
