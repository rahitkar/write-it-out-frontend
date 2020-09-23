import React, { useState, useEffect } from 'react';

import PoemPosts from '../home/PoemPosts';
import UserDetails from '../home/UserDetails';
import api from '../../api';

import './profile.css';

export default (props) => {
  const [poemsData, updatePoemsData] = useState([]);

  useEffect(() => {
    api.getUserPoems(props.userId).then(updatePoemsData);
  }, [props.userId]);

  return (
    <div>
      <UserDetails className='profile' userId={props.userId} />
      <PoemPosts poemsData={poemsData} />
    </div>
  );
};
