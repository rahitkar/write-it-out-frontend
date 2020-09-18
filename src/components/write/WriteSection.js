import React, { useState } from 'react';
import Input from '../home/Input';
import api from '../../api';
import AcknowledgementPopup from './AcknowledgementPopup';

import './editor.css';

export default () => {
  const [poem, setPoem] = useState('');
  const [isPopupVisible, changePopupVisibility] = useState(false);
  const [isPosted, changePostStatus] = useState(false);

  const addPoemToDb = (title) => {
    api.addPoemData({ title, poem }).then(() => {
      changePopupVisibility(false);
      setPoem('');
      changePostStatus(true);
      setTimeout(() => changePostStatus(false), 2000);
    });
  };

  const addPoem = (poem) => {
    setPoem(poem);
    changePopupVisibility(true);
  };

  const acknowledgementPopup = isPosted ? <AcknowledgementPopup /> : '';

  let popup = '';
  if (isPopupVisible) {
    popup = (
      <div className='popup'>
        <Input
          onClick={addPoemToDb}
          placeHolder='add title...'
          class='title-popup'
          action='Publish'
        />
      </div>
    );
  }

  return (
    <div>
      <Input
        value={poem}
        onClick={addPoem}
        placeHolder='write it out...'
        class='editor'
        action='Compose'
      />
      {popup}
      {acknowledgementPopup}
    </div>
  );
};
