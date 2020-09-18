import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Links from './Links';
import Gallery from './Gallery';

import Home from './components/home/Home';
import Explore from './components/explore/Explore';
import WriteSection from './components/write/WriteSection';

import HomeIcon from './home.svg';
import ExploreIcon from './explore.svg';
import WriteIcon from './write.svg';

const names = ['Home', 'Explore', 'Write'];
const components = [<Home />, <Explore />, <WriteSection />];

function App() {
  return (
    <BrowserRouter>
      <Links
        names={names}
        srcs={[HomeIcon, ExploreIcon, WriteIcon]}
        activeClass='indicate'
        class='option'
        rapperClass='top-bar'
      />
      <Gallery names={names} components={components} />
    </BrowserRouter>
  );
}

export default App;
