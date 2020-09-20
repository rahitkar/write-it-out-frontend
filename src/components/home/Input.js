import React from 'react';

const Input = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <textarea
      className={props.class}
      value={props.value}
      onChange={handleChange}
      placeholder={props.placeHolder}
    />
  );
};

Input.defaultProps = {
  value: '',
  class: '',
};

export default Input;
