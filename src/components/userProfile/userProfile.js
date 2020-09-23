import React, { useState, useEffect } from 'react';

import PoemPosts from '../home/PoemPosts';
import api from '../../api';

import './profile.css';

export default (props) => {
  const [details, setDetails] = useState({ name: '', url: '' });
  const [poemsData, updatePoemsData] = useState([]);

  useEffect(() => {
    api.getUserDetails(props.userId).then((detail) => {
      setDetails(JSON.parse(detail));
    });
    api.getUserPoems(props.userId).then(updatePoemsData);
  }, [props.userId]);

  const { name, url } = details;
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
