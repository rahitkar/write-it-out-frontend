import React from 'react';
import './container.css';
import LinkElement from './LinkElement';

const Links = (props) => {
  const links = props.names.map((name, indx) => {
    return (
      <LinkElement
        key={indx}
        id={indx}
        name={name}
        src={props.srcs[indx]}
        activeClass={props.activeClass}
        class={`${props.class}`}
      />
    );
  });
  return <div className={`${props.rapperClass} bar`}>{links}</div>;
};

Links.defaultProps = {
  srcs: [],
};

export default Links;
