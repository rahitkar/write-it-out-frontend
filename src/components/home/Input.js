import React, { useState } from 'react';
import Publish from '../write/Publish';

const Input = (props) => {
  const [input, updateInput] = useState(props.value);

  const addInput = () => {
    props.onClick();
    updateInput('');
  };

  const handleChange = (event) => {
    updateInput(event.target.value);
  };

  return (
    <div className={props.class}>
      <input
        value={input}
        onChange={handleChange}
        placeholder='write your comment...'
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
