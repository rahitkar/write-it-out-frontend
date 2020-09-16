import React from 'react';
import Routes from './Routes';
import './container.css';

const Gallery = (props) => {
  return (
    <div className={props.class}>
      <Routes names={props.names} components={props.components} />
    </div>
  );
};

Gallery.defaultProps = {
  class: '',
};

export default Gallery;
