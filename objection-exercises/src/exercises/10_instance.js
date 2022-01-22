const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get an instance of a user using findById(<YOUR_ID>)
  const natnael = await User.query().findById('3de4090f-be53-474f-af00-4e675527256d')
  // Use that instance to create a new pet related that user
  await natnael.$relatedQuery('pets').insert({
    type: 'DOG',
    name: 'Tina'
  })
  // Use that instance to get all of the user's pets and children
  // Hint -- use $fetchGraph
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph
  const print = await natnael.$fetchGraph('[pets, children]')
  console.log(print)
  // -----
  cleanup()
}

run()
