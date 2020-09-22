import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Links from './Links';
import Gallery from './Gallery';

import Home from './components/home/Home';
import Explore from './components/explore/Explore';
import WriteSection from './components/write/WriteSection';

import HomeIcon from './home.svg';
import ExploreIcon from './explore.svg';
import WriteIcon from './write.svg';
import Login from './Login';

import api from './api';

const home = '';
const paths = [home, 'Explore', 'Write'];
const categories = ['Home', 'Explore', 'Write'];
const components = [<Home />, <Explore />, <WriteSection />];

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    api.getUser().then(({ user }) => setUser(user));
    return;
  }, []);

  if (user) {
    return (
      <BrowserRouter>
        <div className='logo'>WriteItOut</div>
        <Links
          paths={paths}
          categories={categories}
          srcs={[HomeIcon, ExploreIcon, WriteIcon]}
          activeClass='indicate'
          className='option'
          rapperClass='top-bar'
        />
        <Gallery
          paths={paths}
          categories={categories}
          components={components}
        />
      </BrowserRouter>
    );
  }

  return <Login />;
}

export default App;
