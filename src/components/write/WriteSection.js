import React, { useState } from 'react';
import Input from '../home/Input';
import Category from './Category';
import Publish from './Publish';
import AcknowledgementPopup from './AcknowledgementPopup';

import api from '../../api';

import './editor.css';

export default () => {
  const [poem, setPoem] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [isPosted, changePostStatus] = useState(false);

  const onTitleChange = (title) => setTitle(title);
  const onPoemChange = (poem) => setPoem(poem);
  const addCategory = (category) => setCategory(category);

  const addPoem = () => {
    api.addPoemData({ title, poem, category }).then(() => {
      setPoem('');
      setTitle('');
      setCategory('');
      changePostStatus(true);
      setTimeout(() => changePostStatus(false), 2000);
    });
  };

  const acknowledgementPopup = isPosted ? <AcknowledgementPopup /> : '';

  return (
    <div className='editor'>
      <Input
        class='title-section'
        value={title}
        onChange={onTitleChange}
        placeHolder='give a title...'
      />
      <Input
        class='poem-section'
        value={poem}
        onChange={onPoemChange}
        placeHolder='write it out...'
      />
      <Category selectedCategory={category} onClick={addCategory} />
      <Publish
        isActive={title && poem && category}
        action='Publish'
        onClick={addPoem}
      />
      {acknowledgementPopup}
    </div>
  );
};
