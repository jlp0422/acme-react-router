/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ location }) => {
  const path = location.pathname
  return (
    <ul>
      <li>
      {
        path === '/' ?
        <span>Home</span>
        :
        <Link to='/'>Home</Link>
      }
      </li>
      <li>
      {
        path === '/managers' ?
        <span>Managers</span>
        :
        <Link to='/managers'>Managers</Link>
      }
      </li>
    </ul>
  )
}

export default Nav
