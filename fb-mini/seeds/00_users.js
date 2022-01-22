
const userData = require('../data/users')

exports.seed = knex => {
  knex('friends').del().then(() => knex('friends').insert([]));
  return (knex('users').del()
  .then(() => knex('users').insert(userData)))
}


/*
exports.seed = knex => knex('users').del()
  .then(() => knex('users').insert(userData))
  */