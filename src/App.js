import React, { useState, useEffect } from 'react';

import LandingPage from './LandingPage';
import Login from './Login';

import api from './api';
import { UserContext } from './UserContext';

function App() {
  const [loggedInUserId, setUserId] = useState(null);
  useEffect(() => {
    api.getUser().then(({ loggedInUserId }) => setUserId(loggedInUserId));
  }, []);

  if (loggedInUserId) {
    return (
      <UserContext.Provider value={loggedInUserId}>
        <LandingPage />;
      </UserContext.Provider>
    );
  }
  return <Login />;
}

export default App;
