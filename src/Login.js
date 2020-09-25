import React from 'react';
import './container.css';
import Pen from './Icons/pen.png';

export default () => {
  return (
    <div className='login'>
      <div>
        <div>WriteItOut</div>
        <img src={Pen} alt='pen' />
      </div>
      <a
        className='github-login'
        href='https://github.com/login/oauth/authorize?client_id=b9ffe923c010d19b541a'
      >
        Github Login
      </a>
    </div>
  );
};
