import React, { useState, useEffect } from 'react';

import PoemPosts from '../home/PoemPosts';
import api from '../../api';

import './profile.css';

export default (props) => {
  const { name, url } = props.details;
  const [poemsData, updatePoemsData] = useState([]);
  useEffect(() => {
    api.getUserPoems(props.userId).then(updatePoemsData);
  }, [props.userId]);
  return (
    <div>
      <div className='profile'>
        <img src={url} alt='dp' />
        <div>{name}</div>
      </div>
      <PoemPosts poemsData={poemsData} />
    </div>
  );
};
