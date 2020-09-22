import React, { useState, useEffect } from 'react';

import api from '../../api';

export default (props) => {
  const [details, setDetails] = useState({ name: '', url: '' });

  useEffect(() => {
    api.getUserDetails(props.userId).then((detail) => {
      setDetails(JSON.parse(detail));
    });
  }, [props.userId]);

  return (
    <div className='post-details'>
      <img alt={details.name} src={details.url} />
      <div>
        <span className='name'>{details.name}</span>
      </div>
    </div>
  );
};
