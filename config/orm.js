module.exports = function(){
  GLOBAL.model = {}
  GLOBAL.Sequelize = require('sequelize')
  var sequelize = new Sequelize('app', 'postgres', '',{
    host: process.env.POSTGRES_PORT_5432_TCP_ADDR,
    port: process.env.POSTGRES_PORT_5432_TCP_PORT,
    dialect: 'postgres'
  })

  var models = require('require-dir')('../api/model')
  for(table in models){
    var definition = models[table]
    GLOBAL[table] = sequelize.define(table,definition)
  }

  sequelize.sync()

}
