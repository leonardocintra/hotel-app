'use strict'

const Model = use('Model')

class Property extends Model {
  user() {
    return this.belongsTo('App/Models/User')
  }

  images() {
    return this.hasMany('App/Models/Image')
  }

  static scopeNearBy (query, latidude, longitude, distance) {
    return query
  }
}

module.exports = Property
