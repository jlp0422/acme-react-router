/* eslint-disable */
import React from 'react';
const axios = require('axios');

function Managers(props) {
  const managers = props.managers.filter(manager => manager.Worker.length)
  return (
    <div>
      <h1>These are our Managers</h1>
      <ul className="list-group">
      {
        managers.map(manager => (
          <li className="list-group-item" key={manager.id}>{manager.name}</li>
        ))
      }
      </ul>
    </div>
  )

}

export default Managers;
