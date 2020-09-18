import React, { useState } from 'react';
import Publish from '../write/Publish';

const Input = (props) => {
  const [input, updateInput] = useState(props.value);

  const addInput = () => {
    props.onClick(input);
    updateInput('');
  };

  const handleChange = (event) => {
    updateInput(event.target.value);
  };

  return (
    <div className={props.class}>
      <textarea
        value={input}
        onChange={handleChange}
        placeholder={props.placeHolder}
      />
      <Publish onClick={addInput} action={props.action} />
    </div>
  );
};

Input.defaultProps = {
  value: '',
  className: '',
};

export default Input;
