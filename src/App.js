import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Links from './Links';
import Gallery from './Gallery';

import Editor from './components/write/Editor';
import Explore from './components/explore/Explore';
import './container.css';

const Home = (props) => <h1>Home</h1>;

function App() {
  return (
    <BrowserRouter>
      <Links names={['home', 'explore', 'write']} />
      <Gallery
        class='gallery'
        names={['home', 'explore', 'write']}
        components={[<Home />, <Explore />, <Editor />]}
      />
    </BrowserRouter>
  );
}

export default App;
