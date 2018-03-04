/* eslint-disable */
const express = require('express');
const app = express();
const path = require('path');

app.use('/dist', express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/api/employees', (req, res, next) => {
  Employee.findAll({
    include: [ 'Manager', 'Worker' ]
  })
    .then(employees => res.send(employees))
    .catch(next)
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`listening on port: ${port}`))

// SEQUELIZE
const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/acme_react_db', {
  logging: false
})

const Employee = conn.define('employee', {
  name: {
    type: Sequelize.STRING
  }
})

const sync = () => {
  return conn.sync({ force: true })
}

const seed = () => {
  return Promise.all([
    Employee.create({ name: 'joe' }),
    Employee.create({ name: 'jeremy' }),
    Employee.create({ name: 'evan' }),
    Employee.create({ name: 'anna'})
  ])
  .then(([joe, jeremy, evan, anna]) => {
    joe.setManager(jeremy)
    evan.setManager(anna)
    jeremy.setWorker(joe)
    anna.setWorker(evan)
  })
}

Employee.belongsTo(Employee, { as: 'Manager'})
Employee.hasMany(Employee, { as: 'Worker' })

sync()
  .then(() => seed())
