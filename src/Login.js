import React from 'react';
import './container.css';
import Pen from './pen.png';

export default () => {
  return (
    <div className='login'>
      <div>
        <div>WriteItOut</div>
        <img src={Pen} alt='pen' />
      </div>
      <button>
        <a className='github-login' href='https://github.com/login/oauth/authorize?client_id=de3c6a3996f107813577'>
          Github Login
        </a>
      </button>
    </div>
  );
};
