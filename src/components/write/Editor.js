import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Publish from './Publish';
import api from '../../api';
import './editor.css';

const Editor = (props) => {
  const [input, setInput] = useState(props.value);
  const handleChange = (html, delta, source, editor) => {
    setInput({ html, text: editor.getText() });
  };

  const handleClick = () => {
    props.addPoem(input);
    api.addPoemData(input.text).then(setInput({ html: '', text: '' }));
  };

  return (
    <div>
      <ReactQuill
        onChange={handleChange}
        value={input.html}
        modules={Editor.modules}
        formats={Editor.formats}
        placeholder='Write it out...'
      />
      <Publish action='Compose' onClick={handleClick} />
    </div>
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
