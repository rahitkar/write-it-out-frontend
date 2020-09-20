import React from 'react';

export default (props) => {
  const handleClick = () => {
    if (props.isActive) {
      props.onClick();
    }
  };

  const indicator = props.isActive ? 'active' : 'inactive';
  return (
    <div className={props.action}>
      <button className={indicator} onClick={handleClick}>
        {props.action}
      </button>
    </div>
  );
};
