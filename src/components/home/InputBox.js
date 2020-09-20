import React, { useState } from 'react';
import Input from './Input';
import Publish from '../write/Publish';

export default (props) => {
  const [input, updateInput] = useState(props.value);

  const addInput = () => {
    props.onClick(input);
    updateInput('');
  };

  return (
    <div className={props.class}>
      <Input
        value={input}
        onChange={(input) => updateInput(input)}
        placeHolder={props.placeHolder}
      />
      <Publish onClick={addInput} action={props.action} />
    </div>
  );
};
