/* eslint-disable */
import React from 'react';
const axios = require('axios');

function Employees (props) {
  console.log(props)
  const employees = props.employees
  // console.log(employees)
  return (
    <div>
      <h1>These are our employees</h1>
      <ul>
        {
          employees &&
          employees.map(employee => (
            <li key={employee.id}>{employee.name}
              {employee.ManagerId ? <p>is managed by {employee.Manager.name}</p>
                :
                null
              }
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Employees;
