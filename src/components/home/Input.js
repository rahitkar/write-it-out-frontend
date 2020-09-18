import React, { useState } from 'react';

const Input = (props) => {
  const [input, updateInput] = useState(props.value);

  const handleKeyPress = (event) => {
    event.preventDefault();
    if (input) {
      // props.onKeyPress(input);
      updateInput('');
    }
  };

  const handleChange = (event) => {
    updateInput(event.target.value);
  };

  return (
    <form onSubmit={handleKeyPress} className={props.className}>
      <input
        value={input}
        onChange={handleChange}
        placeholder='write your comment...'
      />
    </form>
  );
};

Input.defaultProps = {
  value: '',
  className: '',
};

export default Input;
