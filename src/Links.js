import React from 'react';
import './container.css';
import LinkElement from './LinkElement';

const Links = (props) => {
  console.log(props);
  const links = props.names.map((name, indx) => {
    return (
      <LinkElement
        categoryOf={props.categoryOf}
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
  categoryOf: '',
};

export default Links;
