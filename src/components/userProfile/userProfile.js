import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import PoemPosts from '../home/PoemPosts';
import UserDetails from '../home/UserDetails';
import api from '../../api';

import './profile.css';

export default (props) => {
  const [poemsData, updatePoemsData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    api.getUserPoems(id).then(updatePoemsData);
  }, [id]);

  return (
    <div className='Profile-gallery'>
      <UserDetails className='profile' userId={id} />
      <PoemPosts poemsData={poemsData} />
    </div>
  );
};
