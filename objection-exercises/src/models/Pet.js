const BaseModel = require('./BaseModel')
const {BelongsToOneRelation} = require('objection')

class Pet extends BaseModel {
  static get tableName() {
    return 'pets'
  }

  static get relationMappings() {
    const User = require('./User')
    return {
      users: {
        relation: BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'pets.ownerId',
          to: 'users.id',
        },
      },
    }
  }

  static get virtualAttributes() {
    return ['suffix']
  }

  get suffix() {
    return `${this.name} the ${this.type}`
  }
}

module.exports = Pet
