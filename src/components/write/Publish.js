import React from 'react';

export default (props) => {
  const handleClick = () => {
    props.onClick();
  };

  return (
    <div className={props.action}>
      <button onClick={handleClick}>{props.action}</button>
    </div>
  );
};
