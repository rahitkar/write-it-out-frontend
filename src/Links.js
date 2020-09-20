import React from 'react';
import './container.css';
import LinkElement from './LinkElement';

const Links = (props) => {
  const links = props.paths.map((path, indx) => {
    return (
      <LinkElement
        categoryOf={props.categoryOf}
        key={indx}
        id={indx}
        path={path}
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
  categoryOf: '',
};

export default Links;
