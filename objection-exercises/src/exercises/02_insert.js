const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!
  // Insert yourself in the users table
  const newUser = await User.query().insert({
    email: 'natnaelmk2@gmail.com',
    firstName: 'Natnael',
    lastName: 'Teshome2',
    age: 21,
  }).returning('*')
  console.log(newUser)
  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  const newPet = await Pet.query().insert(
    {
      ownerId: '3de4090f-be53-474f-af00-4e675527256d',
      type: 'CAT',
      name: 'RemytheCat'
    }
  ).returning('*')
  console.log(newPet)
  // -----
  cleanup()
}

run()
