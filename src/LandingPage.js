import React, { useContext } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Links from './Links';
import Home from './components/home/Home';
import Explore from './components/explore/Explore';
import WriteSection from './components/write/WriteSection';
import Profile from './components/userProfile/UserProfile';

import Logout from './Logout';

import HomeIcon from './Icons/home.svg';
import ExploreIcon from './Icons/explore.svg';
import WriteIcon from './Icons/write.svg';
import UserIcon from './Icons/user.svg';

import UserContext from './UserContext';

export default (props) => {
  const loggedInUser = useContext(UserContext);

  return (
    <BrowserRouter>
      <div className='logo'>WriteItOut</div>
      <Logout clearUser={props.clearUser} />
      <Links
        paths={['', 'Explore', 'Write', `Profile/${loggedInUser}`]}
        categories={['Home', 'Explore', 'Write', 'Profile']}
        srcs={[HomeIcon, ExploreIcon, WriteIcon, UserIcon]}
        activeClass='indicate'
        className='option'
        rapperClass='top-bar'
      />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/Explore'>{Explore}</Route>
        <Route exact path='/Write' component={WriteSection} />
        <Route exact path='/Profile/:id' component={Profile} />
      </Switch>
    </BrowserRouter>
  );
};
