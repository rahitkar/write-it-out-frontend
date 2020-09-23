import React, { useState, useEffect } from 'react';

import LandingPage from './LandingPage';
import Login from './Login';
import api from './api';

function App() {
  const [loggedInUserId, setUserId] = useState(null);
  useEffect(() => {
    api.getUser().then(({ loggedInUserId }) => setUserId(loggedInUserId));
  }, []);

  if (loggedInUserId) {
    return <LandingPage userId={loggedInUserId} />;
  }
  return <Login />;
}

export default App;
