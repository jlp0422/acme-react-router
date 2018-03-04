/* eslint-disable */
import React from 'react';
const axios = require('axios');

function Managers(props) {
  const managers = props.managers.filter(manager => manager.Worker.length)
  console.log('manager', managers)
  return (
    <ul>
    {
      managers.map(manager => (
        <li key={manager.id}>{manager.name}</li>
      ))
    }
    </ul>
  )

}

export default Managers;
