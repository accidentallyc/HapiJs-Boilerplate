'use strict';

const Hapi = require('hapi')

const server = new Hapi.Server()
server.connection({ port: process.env.PORT || 1338 })

//Replace global promise with bluebird
GLOBAL.Promise = require('bluebird')
GLOBAL.ROOT = __dirname

var plugins = [
  require('vision'),
  require('inert')
]

/*
BUILD TODO:
+ on build merge the used css/js between //styles and //scripts
*/
const configs = [ 'views','stylesheets','bower','files','controllers']

server.register( plugins, (err) => {
  // Include Every Single Configuration file
  for(var i in configs)
    require('./config/'+configs[i])(server)

  server.route({
      method: 'GET',
      path: '/',
      handler: function (request, reply) {
        reply.view('app.jade',{})
      }
  });

});



server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
