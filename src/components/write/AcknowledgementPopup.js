import React from 'react';
import { Link } from 'react-router-dom';

import './editor.css';

export default () => (
  <div className='on-post-show'>
    <div className='acknowledgement-popup'>Successfully posted </div>
    <Link to='/'>Go back to Home</Link>
  </div>
);
