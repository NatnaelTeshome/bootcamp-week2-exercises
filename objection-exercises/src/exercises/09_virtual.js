const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Use basic queries to test any virtual attributes you wrote on your models
  const userSample = await User.query().first()
  console.log(userSample.fullName)
  console.log(userSample.isAbove30)

  const petSample = await Pet.query().first()
  console.log(petSample.suffix)
  // -----
  cleanup()
}

run()
