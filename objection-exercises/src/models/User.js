const BaseModel = require('./BaseModel')
const {HasManyRelation, ManyToManyRelation} = require('objection')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    const Pet = require('./Pet')
    return {
      pets: {
        relation: HasManyRelation,
        modelClass: Pet,
        join: {
          from: 'users.id',
          to: 'pets.ownerId',
        },
      },
      children: {
        relation: ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          // ManyToMany relation needs the `through` object to describe the join table.
          through: {
            from: 'relations.parentId',
            to: 'relations.childId',
          },
          to: 'users.id',
        },
      },
      parents: {
        relation: ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          // ManyToMany relation needs the `through` object to describe the join table.
          through: {
            from: 'relations.childId',
            to: 'relations.parentId',
          },
          to: 'users.id',
        },
      }
    }
  }
  static get virtualAttributes() {
    return ['fullName', 'isAbove30']
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  get isAbove30() {
    return this.age >= 30
  }
}

module.exports = User
