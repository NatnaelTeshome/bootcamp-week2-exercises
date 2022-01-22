exports.up = async knex => knex.schema.createTable('users', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'));
  
    table
      .string('email')
      .unique()
      .notNullable()
  
    table.timestamps(true)
  
    table
      .string('password')
      .notNullable()
    
    table
      .string('username')
      .unique()
      .notNullable()
    
    table
      .string('firstname')
      .notNullable()
    
    table
      .string('lastname')
      .notNullable()
  
    table
      .string('bio')
  
    table
      .string('profile_picture_url')
      .notNullable()
  })
  
  exports.down = async knex => knex.schema.dropTableIfExists('users')