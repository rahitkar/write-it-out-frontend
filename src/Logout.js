import React from 'react';
import api from './api';

import './container.css';

export default (props) => {
  const logout = () => {
    api.logout().then(props.clearUser(null));
  };

  return (
    <div className='logout' onClick={logout}>
      Logout
    </div>
  );
};
