const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users with a specific name (pick it from your database)
  const userSample = await User.query().where('firstName', 'Heidi')
  console.log(userSample)
  // Do the same with object notation
  const userSampleObject = await User.query().where({firstName: 'Heidi'})
  console.log(userSampleObject)
  // Get all DOGS and BIRDS
  const dogAndBird = await Pet.query().whereIn('type', ['DOG', 'BIRD'])
  console.log(dogAndBird)
  // -----
  cleanup()
}

run()
