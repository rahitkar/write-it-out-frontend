import React, { useState } from 'react';

import Editor from './Editor';

export default () => {
  const [poem, addInput] = useState({ html: '', text: '' });
  const [title, addTitle] = useState('');

  const addPoem = (input) => {
    addInput(input);
  };

  return (
    <div>
      <Editor value={poem} addPoem={addPoem} />
    </div>
  );
};
