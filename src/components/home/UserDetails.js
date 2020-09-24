import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import api from '../../api';

export default (props) => {
  const [isClicked, setClickedStatus] = useState(false);
  const [details, setDetails] = useState({ name: '', url: '' });

  useEffect(() => {
    api.getUserDetails(props.userId).then((detail) => {
      setDetails(JSON.parse(detail));
    });
  }, [props.userId]);

  let url = '';
  if (isClicked) {
    url = <Redirect to={`/Profile/${props.userId}`}></Redirect>;
  }

  return (
    <div className={props.className}>
      <img alt={details.name} src={details.url} />
      <div onClick={() => setClickedStatus(true)}>
        {details.name}
        {url}
      </div>
    </div>
  );
};
