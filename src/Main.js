/* eslint-disable */
import React from 'react';
import { Link, Route, HashRouter as Router } from 'react-router-dom';
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
      <Router>
        <div>
          <Route component={ Nav } />
          <Route exact path='/' render={(employees) => (<Employees employees={this.state.people} /> )}/>
          <Route exact path='/managers' render={(managers) => (<Managers managers={this.state.people} />)} />
        </div>
      </Router>
    )
  }
}
