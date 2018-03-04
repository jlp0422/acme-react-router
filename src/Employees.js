/* eslint-disable */
import React from 'react';
const axios = require('axios');

function Employees (props) {
  const employees = props.employees
  return (
    <div>
      <h1>These are our Employees</h1>
      <ul>
        {
          employees &&
          employees.map(employee => (
          <li key={employee.id}>
            {
              employee.ManagerId ?
                `${employee.name} is managed by ${employee.Manager.name}`
               :
                `${employee.name}`
            }
            </li>
          ))
        }
      </ul>

    </div>
  )
}

export default Employees;
