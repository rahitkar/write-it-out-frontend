import React, { useState, useEffect } from 'react';
import api from './api';
import './container.css';
import Pen from './Icons/pen.png';

export default () => {
  const [loginLink, setLoginLink] = useState('');

  useEffect(() => {
    api.getLoginLink().then(({ loginLink }) => setLoginLink(loginLink));
  }, []);

  return (
    <div className='login'>
      <div>
        <div>WriteItOut</div>
        <img src={Pen} alt='pen' />
      </div>
      <a className='github-login' href={loginLink}>
        Github Login
      </a>
    </div>
  );
};
