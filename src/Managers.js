/* eslint-disable */
import React from 'react';
const axios = require('axios');

function Managers(props) {
  const managers = props.managers.filter(manager => manager.Worker.length)
  return (
    <div>
      <h1>These are our managers</h1>
      <ul>
      {
        managers.map(manager => (
          <li key={manager.id}>{manager.name}</li>
        ))
      }
      </ul>
    </div>
  )

}

export default Managers;
