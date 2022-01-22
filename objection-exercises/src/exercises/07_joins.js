const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  const usersAndPets = await User.query().withGraphFetched('pets')
  console.log(usersAndPets)
  // Get all users, their pets, AND their children
  const usersAndAll = await User.query().withGraphFetched('[pets, children]')
  console.log(usersAndAll)
  // Get all users, their parents, and their grandparents
  const userRelations = await User.query().withGraphFetched('[parents.parents]')
  console.log(userRelations)
  // Get all users, their pets, their chilren, and their childrens' pets
  const userPetsAndChildren  = await User.query().withGraphFetched('[pets, children.pets]')
  console.log(userPetsAndChildren) 
  cleanup()
}

run()
