import React from 'react';
import './container.css';
import LinkElement from './LinkElement';

const Links = (props) => {
  const { paths, categoryOf, categories, srcs, activeClass, className } = props;
  const links = paths.map((path, indx) => {
    return (
      <LinkElement
        categoryOf={categoryOf}
        key={indx}
        id={indx}
        path={path}
        category={categories[indx]}
        src={srcs[indx]}
        activeClass={activeClass}
        className={`${className}`}
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
