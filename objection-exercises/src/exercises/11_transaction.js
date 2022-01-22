const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */
  // creates new person and then adds new pet to that person
  try{
    const sampleTransaction = await User.transaction(async trx => {
      const alex = await User.query(trx)
        .insert({ email: 'alexcousins@gmail.com', firstName: 'Alex', lastName: 'Cousins', age: 19 }).returning('*')
    
      await alex.$relatedQuery('pets', trx)
        .insert({ type: 'CAT', name: 'Alem' })
      
      const petCount = await Pet.query(trx).resultSize()
      if (petCount > 15){
        await Pet.query(trx).delete().where('type', 'BIRD')
      }     
    })
    console.log('Printed', sampleTransaction)
  } 
  catch(err){
    throw new Error("This is an error", err)
  }
  


  // -----
  cleanup()
}

run()
