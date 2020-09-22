import React from 'react';

import { UserContext } from './UserContext';
import { BrowserRouter } from 'react-router-dom';
import Links from './Links';
import Gallery from './Gallery';

import Home from './components/home/Home';
import Explore from './components/explore/Explore';
import WriteSection from './components/write/WriteSection';

import HomeIcon from './home.svg';
import ExploreIcon from './explore.svg';
import WriteIcon from './write.svg';

const home = '';
const paths = [home, 'Explore', 'Write'];
const categories = ['Home', 'Explore', 'Write'];

const writeSection = (
  <UserContext.Consumer>
    {(loggedInUserId) => <WriteSection loggedInUserId={loggedInUserId} />}
  </UserContext.Consumer>
);

const components = [<Home />, <Explore />, writeSection];

export default () => (
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
    <Gallery paths={paths} categories={categories} components={components} />
  </BrowserRouter>
);
