exports.up = async knex => knex.schema.createTable('friends', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'))
  
    table
      .uuid('requestorId')
      .notNullable()
      .references('users.id')
  
    table
      .uuid('requestedId')
      .notNullable()
      .references('users.id')
    
    table
      .enum('status', ['accepted', 'rejection', 'sent'])
      .notNullable()
  })
  
  exports.down = async knex => knex.schema.dropTableIfExists('friends')
  