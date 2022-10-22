import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/about/:id'>Context</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>
  )
}
