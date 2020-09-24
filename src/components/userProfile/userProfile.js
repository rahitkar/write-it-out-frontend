import React, { useState, useEffect, useContext } from 'react';

import UserContext from '../../UserContext';

import PoemPosts from '../home/PoemPosts';
import UserDetails from '../home/UserDetails';
import api from '../../api';

import './profile.css';

export default (props) => {
  const loggedInUser = useContext(UserContext);
  const [poemsData, updatePoemsData] = useState([]);

  useEffect(() => {
    api.getUserPoems(loggedInUser).then(updatePoemsData);
  }, [loggedInUser]);

  return (
    <div>
      <UserDetails className='profile' userId={loggedInUser} />
      <PoemPosts poemsData={poemsData} />
    </div>
  );
};
