import React from 'react';
import Links from '../../Links';
import Gallery from '../../Gallery';
import { BrowserRouter } from 'react-router-dom';

const Home = (props) => <h1>Home</h1>;
const Editor = (props) => <h1>Editor</h1>;

const names = [
  'All',
  'Inspiration',
  'Letter',
  'Life',
  'Love',
  'One-liner',
  'Philosophy',
  'Poetry',
  'Politics',
  'Short-story',
];

export default (props) => {
  return (
    <BrowserRouter>
      <Links
        names={names}
        activeClass='indicate-1'
        class='option-1'
        rapperClass='top-bar-1'
      />
      <Gallery names={names} components={[<Home />, <Editor />]} />
    </BrowserRouter>
  );
};
