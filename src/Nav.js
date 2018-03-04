/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ location }) => {
  const path = location.pathname
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
      {
        path === '/' ?
        <span className="nav-link font-weight-bold active">Home</span>
        :
        <Link className="nav-link" to='/'>Home</Link>
      }
      </li>
      <li>
      {
        path === '/managers' ?
        <span className="nav-link font-weight-bold active">Managers</span>
        :
        <Link className="nav-link" to='/managers'>Managers</Link>
      }
      </li>
    </ul>
  )
}

export default Nav
