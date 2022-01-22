const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert a new person name Peter Bynum with two pet DOGs named Rocco & Rosey
  const Peter = await User.query().insertGraph({
    email: 'peterBynum@gmail.com',
    firstName: 'Peter',
    lastName: 'Bynum',
    age: 25,
    pets: [
      {
        type: 'DOG',
        name: 'Rocco'
      },
      {
        type: 'DOG',
        name: 'Rosey'
      }
    ]
  })

  // -----
  cleanup()
}

run()
