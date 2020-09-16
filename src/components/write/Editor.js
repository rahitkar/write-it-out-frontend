import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './editor.css';

const Editor = (props) => {
  const [input, setInput] = useState('');

  const handleChange = (input) => {
    setInput(input);
  };

  return (
    <ReactQuill
      onChange={handleChange}
      value={input}
      modules={Editor.modules}
      formats={Editor.formats}
      placeholder='Write it out...'
    />
  );
};

Editor.modules = {
  toolbar: [
    [{ header: '1' }, { font: [] }],
    ['bold', 'italic'],
  ],
};

Editor.formats = ['header', 'font', 'size', 'bold', 'italic', 'indent'];

export default Editor;
