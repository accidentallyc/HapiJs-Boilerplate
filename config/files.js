const LESS = require('less')
const FS = require("fs")
const render_less = Promise.promisify(LESS.render, {context:LESS})
const read_file   = Promise.promisify(FS.readFile, {context:FS})
module.exports = function(server){
  // SERVE ASSETS FILES
  server.route({
    method: 'GET',
    path: '/assets/{path*}',
    handler: function (request, reply) {
      var path = request.params.path
      reply.file(`assets/${path}`)
    }
  })
}
