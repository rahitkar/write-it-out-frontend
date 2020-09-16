import React from 'react';
import Links from '../../Links';
import Gallery from '../../Gallery';
import { BrowserRouter } from 'react-router-dom';

const Home = (props) => <h1>Home</h1>;
const Editor = (props) => <h1>Editor</h1>;

export default (props) => {
  return (
    <BrowserRouter>
      <Links names={['home', 'write']} />
      <Gallery names={['home', 'write']} components={[<Home />, <Editor />]} />
    </BrowserRouter>
  );
};
