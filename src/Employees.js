/* eslint-disable */
import React from 'react';
const axios = require('axios');

function Employees (props) {
  const employees = props.employees
  return (
    <div>
      <h1>These are our Employees</h1>
      <ul className="list-group">
        {
          employees &&
          employees.map(employee => (
          <li className="list-group-item" key={employee.id}>
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
