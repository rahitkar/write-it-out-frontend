import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './home.css';

import api from '../../api';

export default (props) => {
  const [details, setDetails] = useState({ name: '', url: '' });

  useEffect(() => {
    api.getUserDetails(props.userId).then((detail) => {
      setDetails(JSON.parse(detail));
    });
  }, [props.userId]);

  return (
    <div className={props.className}>
      <img alt={details.name} src={details.url} />
      <Link to={`/Profile/${props.userId}`}>{details.name}</Link>
    </div>
  );
};
