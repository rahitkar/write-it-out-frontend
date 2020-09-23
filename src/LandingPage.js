import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Links from './Links';
import Gallery from './Gallery';
import Home from './components/home/Home';
import Explore from './components/explore/Explore';
import WriteSection from './components/write/WriteSection';
import UserProfile from './components/userProfile/userProfile';
import HomeIcon from './home.svg';
import ExploreIcon from './explore.svg';
import WriteIcon from './write.svg';
import api from './api';

const home = '';
const paths = [home, 'Explore', 'Write', 'Profile'];
const categories = ['Home', 'Explore', 'Write', 'Profile'];

export default (props) => {
  const [details, setDetails] = useState({ name: '', url: '' });

  useEffect(() => {
    api.getUserDetails(props.userId).then((detail) => {
      setDetails(JSON.parse(detail));
    });
  }, [props.userId]);

  const components = [
    <Home />,
    <Explore />,
    <WriteSection />,
    <UserProfile userId={props.userId} details={details} />,
  ];

  return (
    <BrowserRouter>
      <div className='logo'>WriteItOut</div>
      <Links
        paths={paths}
        categories={categories}
        srcs={[HomeIcon, ExploreIcon, WriteIcon, details.url]}
        activeClass='indicate'
        className='option'
        rapperClass='top-bar'
      />
      <Gallery paths={paths} categories={categories} components={components} />
    </BrowserRouter>
  );
};
