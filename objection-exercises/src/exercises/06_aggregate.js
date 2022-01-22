const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the total number of users
  const usersCount = await User.query().resultSize()
  console.log(usersCount)
  // Get the average age of users
  const averageAge = await User.query().avg('age')
  console.log(averageAge)
  // Get the total number of dogs
  const dogsCount = await Pet.query().where('type', 'DOG').resultSize()
  console.log(dogsCount)
  // -----
  cleanup()
}

run()
