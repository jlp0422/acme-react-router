/* eslint-disable */
import React from 'react';
import { Link } from 'react-router-dom';
import Employees from './Employees';
import Managers from './Managers';
import Nav from './Nav';

const axios = require('axios');


export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      people: [],
    }
  }

  componentWillMount() {
    axios.get('/api/employees')
      .then(res => res.data)
      .then(people => {
        this.setState({ people })
      })
  }

  render() {
    return (
      <div>
        <Nav />
        <Employees employees={this.state.people}/>
        <Managers managers={this.state.people} />
      </div>
    )
  }
}
