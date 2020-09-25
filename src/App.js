import React, { useState, useEffect } from 'react';

import LandingPage from './LandingPage';
import Login from './Login';

import UserContext from './UserContext';

import api from './api';

function App() {
  const [loggedInUserId, setUserId] = useState(null);
  useEffect(() => {
    api.getUser().then(({ loggedInUserId }) => setUserId(loggedInUserId));
  }, []);

  if (loggedInUserId) {
    return (
      <UserContext.Provider value={loggedInUserId}>
        <LandingPage clearUser={setUserId} />
      </UserContext.Provider>
    );
  }
  return <Login />;
}

export default App;
