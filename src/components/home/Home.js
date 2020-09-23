import React, { useState, useEffect } from 'react';
import api from '../../api';
import PoemPosts from './PoemPosts';

export default (props) => {
  const [poemsData, updatePoemData] = useState([]);

  useEffect(() => {
    api.fetchPoemsData().then(updatePoemData);
  }, []);

  return <PoemPosts loggedInUser={props.loggedInUser} poemsData={poemsData} />;
};
