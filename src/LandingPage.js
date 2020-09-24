import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Links from './Links';
import Gallery from './Gallery';
import Home from './components/home/Home';
import Explore from './components/explore/Explore';
import WriteSection from './components/write/WriteSection';
import UserProfile from './components/userProfile/UserProfile';
import HomeIcon from './Icons/home.svg';
import ExploreIcon from './Icons/explore.svg';
import WriteIcon from './Icons/write.svg';
import UserIcon from './Icons/user.svg';

const home = '';
const paths = [home, 'Explore', 'Write', 'Profile'];
const categories = ['Home', 'Explore', 'Write', 'Profile'];

export default (props) => {
  const components = [<Home />, <Explore />, <WriteSection />, <UserProfile />];

  return (
    <BrowserRouter>
      <div className='logo'>WriteItOut</div>
      <Links
        paths={paths}
        categories={categories}
        srcs={[HomeIcon, ExploreIcon, WriteIcon, UserIcon]}
        activeClass='indicate'
        className='option'
        rapperClass='top-bar'
      />
      <Gallery paths={paths} categories={categories} components={components} />
    </BrowserRouter>
  );
};
