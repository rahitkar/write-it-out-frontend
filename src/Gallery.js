import React from 'react';
import Routes from './Routes';
import './container.css';

const Gallery = (props) => {
  return (
    <Routes
      paths={props.paths}
      categoryOf={props.categoryOf}
      components={props.components}
    />
  );
};

Gallery.defaultProps = {
  class: '',
  categoryOf: '',
};

export default Gallery;
