import React, { useState, useEffect } from 'react';
import api from './api';

export default () => {

  return (
    <div>
      <button>
        <a href='https://github.com/login/oauth/authorize?client_id=de3c6a3996f107813577'>
          Login
        </a>
      </button>
    </div>
  );
};
